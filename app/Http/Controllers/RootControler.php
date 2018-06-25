<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RootControler extends Controller
{
    public function index() {
        return view('backend.index');
    }
}
