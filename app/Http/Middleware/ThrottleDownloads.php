<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Redirect;
use Symfony\Component\HttpFoundation\Response;

class ThrottleDownloads
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        $key = $this->resolveRequestSignature($request);

        if (RateLimiter::tooManyAttempts($key, 2)) { // Adjust the limits as needed
            // Flash a message to the session
            $request->session()->flash('error', 'Too many downloads, wait 60 seconds.');

            // Redirect the user back to the previous page
            return Redirect::back();
        }

        RateLimiter::hit($key, 60); // 60 seconds cooldown

        return $next($request);
    }

    protected function resolveRequestSignature(Request $request)
    {
        return sha1(
            $request->method() .
            '|' . $request->server('SERVER_NAME') .
            '|' . $request->path() .
            '|' . $request->ip()
        );
    }

}
