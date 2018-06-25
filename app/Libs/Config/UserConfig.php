<?php

namespace App\Libs\Config;

class UserConfig{
    
	private $curUserInfo;
	
    function __construct() {
        $this->curUserInfo = auth()->user();
    }

    /**
     * Lay thong tin user dang dang nhap
     * @return type
     */
    public function getCurUser() {
        return $this->curUserInfo;
    }
    
}