<?php

use Illuminate\Http\Request;

Route::group(["middleware" => "guest:api"], function () {
    Route::post("/login", "ApiController@login");
});

Route::group(["middleware" => "auth:api"], function () {
    Route::get("/me", "ApiController@me");
});
