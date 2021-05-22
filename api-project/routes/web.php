<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('players', 'App\Http\Controllers\ApiController@getPlayers');
Route::get('players/{id}', 'App\Http\Controllers\ApiController@getPlayer');
Route::post('players', 'App\Http\Controllers\ApiController@createPlayer');
Route::put('players/{id}', 'App\Http\Controllers\ApiController@updatePlayer');
Route::delete('players/{id}','App\Http\Controllers\ApiController@deletePlayer');