<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
	return $request->user();
});


Route::get('/user', 'Rest\UserCtrl@listUser');
Route::get('/user/{id}', "Rest\UserCtrl@getRecordUser");
Route::post('/user', "Rest\UserCtrl@insertUser");
Route::post('/user/{id}', "Rest\UserCtrl@updateUser");
Route::post('/userSelf', "Rest\UserCtrl@updateUserSelf");
Route::delete('/user/{id}', "Rest\UserCtrl@deleteUser");
