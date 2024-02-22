
import Navigation from '@/Components/Navigation';
import { Head, Link } from '@inertiajs/react';

export default function DiscoverProducts({ products }) {
    return (
        <div>

            <Head>
                <title>Discover Products</title>
                <meta name="description" content="Explore our wide range of products." />
                <meta name="keywords" content="products, shopping, deals" />
                <meta property="og:title" content="Discover Products" />
                <meta property="og:description" content="Explore our wide range of products." />
                <meta property="og:url" content="http://example.com/page" />
                <meta property="og:type" content="website" />
            </Head>

            <Navigation/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <h1 className="text-4xl text-indigo-950 font-bold mb-10">
                        Discover Products
                    </h1>
                    <div className="grid grid-cols-4 gap-10">
                        {products.length > 0  ? (
                            products.map((product, index) => (            
                                <div key={index} className="item-product flex flex-col gap-y-4">
                                    <Link href={route('front.details', `${product.slug}`)}>
                                        <img src={`${product.path_cover}`} alt={product.name} className="object-cover rounded-lg w-full h-[200px]"/>
                                    </Link>
                                    <div>
                                        <h3 className="text-indigo-950 text-lg font-bold">
                                            {product.name}
                                        </h3>
                                        <p className="text-base text-slate-500">
                                            {product.category}
                                        </p>
                                    </div>
                                </div>
                        ))
                        ) : (
                            <p>No products found.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}