<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $my_orders = Order::with('product', 'buyer')->where('creator_id', Auth::id())->orderBy('id', 'DESC')->get();

        return Inertia::render('MyOrders', [
            'my_orders' => $my_orders
        ]);
    }

    public function approve(Order $order){
        // Update the order status to "paid"
        $order->update(['is_paid' => 1]);

        Transaction::where('user_id', $order->buyer_id)->where('product_id', $order->product_id)->update([
            'is_paid' => 1
        ]);

        // Redirect the user back or to another page with a success message
        return redirect()->back()->with('message', 'Order approved successfully.');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }
}
