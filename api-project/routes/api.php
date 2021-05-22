<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;


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

Route::get('players', 'App\Http\Controllers\ApiController@getAllPlayers');
Route::get('players/{id}', 'App\Http\Controllers\ApiController@getPlayer');
Route::post('players', 'App\Http\Controllers\ApiController@createPlayer');
Route::put('players/{id}', 'App\Http\Controllers\ApiController@updatePlayer');
Route::delete('players/{id}','App\Http\Controllers\ApiController@deletePlayer');

