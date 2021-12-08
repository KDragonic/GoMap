<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class UserController extends Controller
{
    // function login(Request $request){
        
    // }

    // function register(Request $request){
    //     $validation = Validator::make($req->all(), [
    //         "name" => "required|unique:users",
    //         "email" => "required|email|unique:users",
    //         "password" => "required|min:5",
    //         're_password' => 'required|min:5|same:password',
    //         "gender" => "required",
    //     ]);

    //     // if ($validation->fails()) {
    //     //     return redirect(route('register.index'))->withErrors($validation)->withInput();
    //     // } 

    //     if(User::where('email', $validation['email']->exists()))
    //     {
    //         return redirect(route('registet.index'))->withInput([
    //             "email" => "Такая почта уже существет",
    //         ]);
    //     }

    //     $user = new User();

    //     $user->name = $req->input('name');
    //     $user->email = $req->input("email");
    //     $user->password = bcrypt($req->input("password"));
    //     // $user->gender = $req->input("gender");

    //     $user->save();

    //     // Auth::login($user);

    //     return redirect(route("login.index")); 
    // }
}
