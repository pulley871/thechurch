<?php

declare(strict_types=1);

namespace App\Api\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('AppName')->plainTextToken;
            return response()->json(['token' => $token], 200);
        }
        return response()->json(['error' => 'Unauthorized'], 401);
    }
}
