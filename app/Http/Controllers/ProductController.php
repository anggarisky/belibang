<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str; 
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $my_products = Product::whereUserId(Auth::id())->orderBy('id', 'DESC')->get();

        return Inertia::render('MyProducts', [
            'my_products' => $my_products
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('CreateProduct');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'sometimes|string|unique:products,slug', // Ensure the slug is unique in the 'products' table
            'category' => 'required|string|in:Ebook,Course,Template',
            'price' => 'required|numeric',
            'path_cover' => 'required|file|mimes:png',
            'path_file' => 'required|file|mimes:zip',
            // other validation rules...
        ]);
        
        $slug = Str::slug($request->name);
        $user_id = Auth::user()->id;

        $product = new Product([
            'name' => $request->name,
            'category' => $request->category,
            'price' => $request->price,
            'slug' => $slug,
            'user_id' => $user_id
        ]);

        if($request->hasFile('path_cover')){
            $pathCover = $request->file('path_cover')->store('cover_products', 'public');
            $product->path_cover = $pathCover;
        }

        if($request->hasFile('path_file')){
            $pathFile = $request->file('path_file')->store('file_products', 'public');
            $product->path_file = $pathFile;
        }

        $product->save();
        
        session()->flash('message', 'Product saved successfully!');
        return Inertia::location(route('products.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
