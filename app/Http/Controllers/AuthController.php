<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\LoginHistory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class AuthController extends Controller
{
    public function showLoginForm()
    {
        return view('auth.login');
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            // Log login history
            LoginHistory::create([
                'user_id' => Auth::id(),
                'ip_address' => $request->ip(),
                'location' => $this->getLocation($request->ip()),
                'logged_in_at' => now(),
            ]);

            return redirect()->intended('dashboard');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/login');
    }

    public function dashboard()
    {
        $loginHistories = LoginHistory::where('user_id', Auth::id())->get();
        return view('dashboard', compact('loginHistories'));
    }

    private function getLocation($ip)
    {
        // Mock location for now
        return 'Unknown Location';
    }
}
