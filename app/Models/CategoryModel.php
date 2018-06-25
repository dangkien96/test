<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\MyModel;

class CategoryModel extends MyModel
{
    protected $table = "category";

    public function filterName($param) {
    	if (!empty($param))
    	{
    		$this->setFunctionCond('where', ['name', 'like', '%'.$param.'%']);
    	}
    	return $this;
    }
}
