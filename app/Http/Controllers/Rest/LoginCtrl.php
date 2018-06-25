<?php

namespace App\Http\Controllers\Rest;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Validator;
use Auth;
use Illuminate\Support\MessageBag;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Carbon\Carbon;

class LoginCtrl extends Controller
{
    use AuthenticatesUsers;
    
    public function postLogin(Request $request) {
       	$rules = [
    		'email' =>'required',
    		'password' => 'required'
    	];
    	$messages = [
    		'email.required' => 'Tên tài khoản là trường bắt buộc',
    		'password.required' => 'Mật khẩu là trường bắt buộc',
    	];
    	$validator = Validator::make($request->all(), $rules, $messages);

    	if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $email    = $request->email;
        $password = $request->password;

        if (Auth::attempt(['email' => $email, 'password' => $password])) { 
            return response()->json(['user'=> Auth::user()], 200);
        } else {
            $errors = new MessageBag(['errorlogin' => 'Email hoặc mật khẩu không đúng']);
            return response()->json([$errors], 422);
        }
       
    }

    function _validatePassword($request) {
        $validator = Validator::make($request->all(), [
                    'newPassword' => 'required',
                        ], [
                    'newPassword.required' => 'Mật khẩu không được bỏ trống',
                        ]
        );
        return $validator;
    }
    
    public function showLoginRequestPassword(Request $request){
        
        return view('user.showLoginRequestPassword');
    }
    
    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
        $this->guard()->logout();

        $request->session()->flush();

        $request->session()->regenerate();
        return redirect()->route('login');
    }
}
