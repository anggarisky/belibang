<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class FrontController extends Controller
{
    //

    public function index(){
        return Inertia::render('HomeRun');
    }

    public function benefits(){
        return Inertia::render('Benefits');
    }

    public function discover(){
        $products = Product::orderBy('id', 'DESC')->get();

        return Inertia::render('DiscoverProducts', [
            'products' => $products
        ]);
    }

    public function details(Product $product){

        return Inertia::render('DetailsProduct', [
            'product' => $product
        ]);
    }

    public function checkout(Product $product){
        
        $user_id = Auth::user()->id;

        if($product->user_id === $user_id){

            session()->flash('error', 'Stop downloading your own product');
            return redirect()->back();
            
        }

        $order = Order::firstOrCreate(
            [
                'buyer_id' => $user_id,
                'product_id' => $product->id
            ],
            [
                'creator_id' => $product->user->id,
                'total_price' => $product->price,
                'is_paid' => 0,
            ]
        );

        $order->save();

        $transaction = Transaction::firstOrCreate(
            [
                'user_id' => $user_id,
                'product_id' => $product->id
            ],
            [
                'total_price' => $product->price,
                'is_paid' => 0,
            ]
        );

        $transaction->save();
        
        return Inertia::render('CheckoutProduct', [
            'product' => $product
        ]);

    }

    public function download(Product $product){
        $user_id = Auth::user()->id;

        $paidTransactionExists = Transaction::where('user_id', $user_id)
            ->where('product_id', $product->id)
            ->where('is_paid', 1)
            ->exists();
        
        if (!$paidTransactionExists) {
            session()->flash('error', 'You must purchase the product before download');
            return redirect()->back();
        }

        $filePath = $product->path_file;

        // Check if file exists
        if (!Storage::disk('public')->exists($filePath)) {
            abort(404); // or handle the error as you prefer
        }

        // Return the file as a download
        return Storage::disk('public')->download($filePath);
        
    }

    public function cart(){
        return Inertia::render('MyCart');
    }
}
