<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\MyModel;

class UserModel extends MyModel
{
    protected $table = "users";

    public function filterFreeText($freeText) {

        if(!empty($freeText))
        {
            $this->setFunctionCond('where', [function($query) use ($freeText){
                $query->orwhere('name', 'like', "%$freeText%")
                      ->orWhere('email', 'like', "%$freeText%")                        
                      ->orWhere('phone', 'like', "%$freeText%")                        
                      ->orWhere('account', 'like', "%$freeText%");                       
            }]);
        }
        
        return $this;
    }

    public function filterName($param) {
    	if (!empty($param))
    	{
    		$this->setFunctionCond('where', ['name', 'like', '%'.$param.'%']);
    	}
    	return $this;
    }

    public function filterEmail($param) {
    	if (!empty($param))
    	{
    		$this->setFunctionCond('where', ['email', 'like', '%'.$param.'%']);
    	}
    	return $this;
    }

    public function filterPhone($param) {
    	if (!empty($param))
    	{
    		$this->setFunctionCond('where', ['phone', '=', $param]);
    	}
    	return $this;
    }

    public function filterStatus($param) {
    	if (!empty($param))
    	{
    		$this->setFunctionCond('where', ['status', '=', $param]);
    	}
    	return $this;
    }
}
