<?php

namespace App\Http\Controllers\Rest;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\UserModel;
use App\Libs\Config\UserConfig;
use App\Libs\Config\ListType\UserType;
use DB, Session, Storage, Hash, Validator;

class UserCtrl extends Controller
{
    private $userModel;
    private $userConfig;

    public function __construct(UserModel $userModel, UserConfig $userConfig){
		$this->userModel  = $userModel;
		$this->userConfig = $userConfig;
    }

    //get list user
    public function listUser(Request $request){

		$freeText = $request->input("freeText", "");
		$name     = $request->input("name", "");
		$email    = $request->input("email", "");
		$phone    = $request->input("phone", "");
		$status   = $request->input("status", UserType::CONST_USER_AVAILABLE);
		$perPage  = $request->input("perPage", 10);

		$listUser = $this->userModel->filterFreeText($freeText)
						->filterName($name)
						->filterEmail($email)
						->filterPhone($phone)
						->filterStatus($status)
						->paginate($perPage);

		return response()->json($listUser);  
    }

    //insert User
    public function insertUser(Request $request){
    	$validate = $this->_validateInsert($request);
    	if($validate->fails()){
    		return response()->json($validate->messages(), 422);
    	}

		$name     = $request->input("name", "");
		$email    = $request->input("email", "");
		$phone    = $request->input("phone", "");
		$account  = $request->input("account", "");
		$status   = $request->input("status", "");
		if ($request->hasFile('avatar')){
			$avatar = Storage::disk('public')->putFile('avatar', $request->avatar);
        }else{
        	$avatar = Storage::disk('public')->putFile('avatar', UserType::CONST_USER_AVATAR);
        }
		$avatar = "";

        DB::beginTransaction();
        try{
			$userId = $this->userModel->insertGetId([
				"name"     => $name,
				"email"    => $email,
				"account"  => $account,
				"phone"    => $phone,
				"password" => Hash::make(UserType::CONST_USER_PASSWORD),
				"status"   => $status,
				"avatar"   => $avatar
			]);

			if(!$userId){
				return response()->json(['messages' => 'Xảy ra lỗi thêm người dùng'], 422);
			}	

			DB::commit();
			return response()->json(['status' => true], 200);

        } catch (Exception $e) {
			DB::rollback();
			return response()->json(['messages' => 'Xảy ra lỗi hệ thống'], 422);
		}
    }

    //Update User
    public function updateUser($id,Request $request){
    	$validate = $this->_validateUpdate($request);
    	if($validate->fails()){
    		return response()->json($validate->messages(), 422);
    	}

    	$userInfo = $this->userModel->find($id);
    	if(!$userInfo){
    		return response()->json(['messages' => 'Không tìm thấy người dùng'], 422);
    	}

		$name     = $request->input("name", "");
		$email    = $request->input("email", "");
		$phone    = $request->input("phone", "");
		$account  = $request->input("account", "");
		$status   = $request->input("status", "");
		// $avatar = Storage::disk('public')->putFile('avatar', UserType::CONST_USER_AVATAR);
		$avatar = "";	

        DB::beginTransaction();
        try{
			$userInfo->name    = $name;
			$userInfo->email   = $email;
			$userInfo->account = $account;
			$userInfo->phone   = $phone;
			$userInfo->status  = $status;
			$userInfo->avatar  = $avatar;
			$userInfo->save();

			DB::commit();
			return response()->json(['status' => true], 200);

        } catch (Exception $e) {
			DB::rollback();
			return response()->json(['messages' => 'Xảy ra lỗi hệ thống'], 422);
		}
    }

    //Update UserSelf
    public function updateUserSelf(Request $request){
    	$curUserInfo = $this->userConfig->getCurUser();
    	$this->validateUpdate($request);

    	if(!$curUserInfo){
    		return response()->json(['messages' => 'Không tìm thấy người dùng'], 422);
    	}

		$name     = $request->input("name", "");
		$email    = $request->input("email", "");
		$phone    = $request->input("phone", "");
		$account  = $request->input("account", "");
		if ($request->hasFile('avatar')){
			$avatar = Storage::disk('public')->putFile('avatar', $request->avatar);
        }else{
        	$avatar = $curUserInfo->avatar;
        }

        DB::beginTransaction();
        try{
			$curUserInfo->name    = $name;
			$curUserInfo->email   = $email;
			$curUserInfo->account = $account;
			$curUserInfo->phone   = $phone;
			$curUserInfo->avatar  = $avatar;
			$curUserInfo->save();

			DB::commit();
			return response()->json(['status' => true], 200);

        } catch (Exception $e) {
			DB::rollback();
			return response()->json(['messages' => 'Xảy ra lỗi hệ thống'], 422);
		}
    }

    //delete User
    public function deleteUser($id){
    	$userInfo = $this->userModel->find($id);

    	if(!$userInfo){
    		return response()->json(['messages' => 'Không tìm thấy người dùng'], 422);
    	}

    	DB::beginTransaction();
        try{
			$userInfo->delete();

			DB::commit();
			return response()->json(['status' => true], 200);

        } catch (Exception $e) {
			DB::rollback();
			return response()->json(['messages' => 'Xảy ra lỗi hệ thống'], 422);
		}
    }

    //getRecord User
    public function getRecordUser($id){
		$userInfo = $this->userModel->find($id);
    	if(empty($userInfo)){
    		return response()->json(['messages' => 'Không tìm thấy người dùng'], 422);
    	}
    	return response()->json($userInfo); 
    }

    //validateInsert data request
    private function _validateInsert($request){
	    return Validator::make($request->all(), [
				'name'   => 'required',
				'account' => 'required|unique:users',
				'email'  => 'required|email|unique:users',
				'phone'  => 'required',
				'status' => 'required',
			], [
				'name.required'   => 'Tên người dùng không được để trống',
				'account.required' => 'Tài khoản không được để trống',
				'email.required'  => 'email không được để trống',
				'phone.required'  => 'Điện thoại không được để trống',
				'status.required' => 'Trạng thái không được để trống',
				'account.unique'   => 'Tài khoản đã tồn tại',
				'email.email'     => 'Email không đúng định dạng',
				'email.unique'    => 'Email đã tồn tại',
	    	]
		);
	}

	//validateUpdate data request
    public function _validateUpdate($request){
	    return Validator::make($request->all(), [
				'name'   => 'required',
				'account' => 'required',
				'email'  => 'required',
				'phone'  => 'required',
				'status' => 'required',
			], [
				'name.required'   => 'Tên người dùng không được để trống',
				'account.required' => 'Tài khoản không được để trống',
				'email.required'  => 'email không được để trống',
				'phone.required'  => 'Điện thoại không được để trống',
				'status.required' => 'Trạng thái không được để trống',
	    	]
		);
	}
}
