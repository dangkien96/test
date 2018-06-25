<?php

namespace App\Http\Controllers\Rest;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\CategoryModel;
use DB;

class CategoryCtrl extends Controller
{
    private $category;

    public function __construct(CategoryModel $categoryModel){
    	$this->category = $categoryModel;
    }

    //get list category
    public function listCategory(Request $request){

    	$name    = $request->input("name", "");
    	$perPage = $request->input("perPage", 10);

    	$listCategory = $this->category->filterName($name)->buildCond()->paginate($perPage);

    	return response()->json($listCategory); 
    }

    //insert category
    public function insertCategory(Request $request){

    	$this->validate($request);

		$name      = $request->input("name", "");
		$parent_id = $request->input("parent_id", 0);

		DB::beginTransaction();
		try{
	    	$categoryId = $this->category->insertGetId([
				"name"      => $name,
				"parent_id" => $parent_id
	    	]);

	    	if($categoryId){
	    		return response()->json(['messages' => 'Xảy ra lỗi thêm'], 422); 
	    	}

	    	DB::commit();
			return response()->json(['status' => true], 200);

    	}catch (Exception $e) {
			DB::rollback();
			return response()->json(['messages' => 'Xảy ra lỗi hệ thống'], 422); 
		}
    }

    //update category
    public function updateCategory($id, Request $request){

    	$this->validate($request);
    	$categoryInfo = $this->category->find($id);
    	if(!$categoryInfo){
    		return response()->json(['messages' => 'Không tìm thấy thông tin chuyên mục'], 422);
    	}

		$name      = $request->input("name", "");
		$parent_id = $request->input("parent_id", 0);

		DB::beginTransaction();
		try{
	    	$categoryInfo->name = $name;
	    	$categoryInfo->name = $parent_id;
	    	$categoryInfo->save();
	    	
	    	DB::commit();
			return response()->json(['status' => true], 200);

    	}catch (Exception $e) {
			DB::rollback();
			return response()->json(['messages' => 'Xảy ra lỗi hệ thống'], 422); 
		}
    }

    //delete category
    public function deleteCategory($id, Request $request){

    	$categoryInfo = $this->category->find($id);
    	if(!$categoryInfo){
    		return response()->json(['messages' => 'Không tìm thấy thông tin chuyên mục'], 422);
    	}

		DB::beginTransaction();
		try{
	    	$categoryInfo->delete();
	    	
	    	DB::commit();
			return response()->json(['status' => true], 200);

    	}catch (Exception $e) {
			DB::rollback();
			return response()->json(['messages' => 'Xảy ra lỗi hệ thống'], 422); 
		}
    }

    //get record category
    public function getRecordCategory($id, Request $request){

    	$categoryInfo = $this->category->find($id);
    	if(!$categoryInfo){
    		return response()->json(['messages' => 'Không tìm thấy thông tin chuyên mục'], 422);
    	}
    	
    	return response()->json($categoryInfo); 
    }


    //validate data request
    public function validate($request){
	    return $this->validate($request, [
			'name'          => 'required',
			], [
			'name.required' => 'Tên chuyên mục không được để trống',
	    	]
		);
	}
}
