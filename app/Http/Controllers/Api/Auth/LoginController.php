<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $user = $request->validate([
            'email' => ['required', 'string', 'email', 'max:255'],
            'password' => ['required'],
        ]);

        if (!Auth::attempt($user)) {
            return response()->json([
                'message' => 'is invalid'
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $accessToken = Auth::user()->createToken('access_token')->accessToken;

        return response()->json([
            'message' => 'success',
            'data' => Auth::user(),
            'meta' => [
                'token' => $accessToken
            ]
        ], Response::HTTP_OK);
    }

    public function logout()
    {
        Auth::user()->token()->revoke();
        return response()->json([
            'message' => 'log out success',
        ], Response::HTTP_OK);
    }
}
