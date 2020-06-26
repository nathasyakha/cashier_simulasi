<?php

use Illuminate\Support\Facades\Route;

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

Auth::routes();

Route::group(['middleware' => 'auth'], function () {
    Route::get('/home', 'HomeController@index')->name('home');

    //Category
    Route::get('category', 'CategoryController@index')->name('category.index');
    Route::post('category', 'CategoryController@store')->name('category.store');
    Route::get('category/edit/{id}', 'CategoryController@edit')->name('category.edit');
    Route::put('category/update/{id}', 'CategoryController@update')->name('category.update');
    Route::delete('category/delete/{id}', 'CategoryController@delete')->name('category.delete');

    //Ingredient
    Route::get('ingredient', 'IngredientController@index')->name('ingredient.index');
    Route::post('ingredient', 'IngredientController@store')->name('ingredient.store');
    Route::get('ingredient/edit/{id}', 'IngredientController@edit')->name('ingredient.edit');
    Route::put('ingredient/update/{id}', 'IngredientController@update')->name('ingredient.update');
    Route::delete('ingredient/delete/{id}', 'IngredientController@delete')->name('ingredient.delete');
});
