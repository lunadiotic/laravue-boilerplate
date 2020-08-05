<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{
    public function getUser()
    {
        return response()->json([
            'message' => 'success',
            'data' => request()->user(),
        ], Response::HTTP_OK);
    }
}
