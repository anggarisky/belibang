
import Navigation from '@/Components/Navigation';
import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function DetailsProduct({ product }) {

    const { flash } = usePage().props;
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        if(flash?.error){
            setShowMessage(true);

            const timer = setTimeout(() => {
                setShowMessage(false); // Hide the message
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [flash?.error]);

    return (
        <div>

            <Head>
                <title>Details Products</title>
                <meta name="description" content="Explore our wide range of products." />
                <meta name="keywords" content="products, shopping, deals" />
                <meta property="og:title" content="Discover Products" />
                <meta property="og:description" content="Explore our wide range of products." />
                <meta property="og:url" content="http://example.com/page" />
                <meta property="og:type" content="website" />
            </Head>

            <Navigation />

            {showMessage && (
                <div className="alert alert-danger bg-red-700 p-5 text-center">
                    <p className="text-lg font-bold text-white">
                        {flash.error}
                    </p>
                </div>
            )}

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex flex-row p-5 gap-x-10">
                        <img src={`/${product.path_cover}`} alt={product.name} className="object-cover rounded-3xl w-[600px] h-auto bg-red-300"/>
                        <div className="flex flex-col gap-y-4">
                            <h1 className='text-indigo-950 font-bold text-5xl'>
                                {product.name}
                            </h1>
                            <p>
                                {product.category}
                            </p>
                            <p>
                                {product.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}
                            </p>
                            <Link href={route('front.checkout', `${product.slug}`)} className='w-fit py-4 text-lg px-10 bg-indigo-700 text-white font-bold rounded-full'>
                                Download Now
                            </Link>
                        </div>
                    </div>     
                </div>
            </div>
        </div>
    );
}