<?php

/*use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/
/** Route */
Route::apiResource('/questions', 'QuestionController');

Route::apiResource('/categories', 'CategoryController');

Route::apiResource('/questions/{question}/replies', 'ReplyController');

Route::post('like/{reply}', 'LikeController@likeIt');
Route::delete('like/{reply}', 'LikeController@unLikeIt');
