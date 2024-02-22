
import Navigation from '@/Components/Navigation';
import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function CheckoutProduct({ product }) {

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
                <title>CheckoutProduct</title>
                <meta name="description" content="Explore our wide range of products." />
                <meta name="keywords" content="products, shopping, deals" />
                <meta property="og:title" content="Discover Products" />
                <meta property="og:description" content="Explore our wide range of products." />
                <meta property="og:url" content="http://example.com/page" />
                <meta property="og:type" content="website" />
            </Head>

            <Navigation/>

            {showMessage && (
                <div className="alert alert-danger bg-red-700 p-5 text-center">
                    <p className="text-lg font-bold text-white">
                        {flash.error}
                    </p>
                </div>
            )}

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl text-indigo-950 font-bold mb-10">
                        Success Checkout!
                    </h1>
                    <div className="flex flex-col p-5 gap-y-10 items-center">
                        <img src={`/${product.path_cover}`} alt={product.name} className="object-cover rounded-3xl w-[600px] h-auto bg-red-300"/>
                        <div>
                            <h3 className='text-indigo-950 font-bold text-2xl'>
                                {product.name}
                            </h3>
                        </div>
                        <a href={route('transactions.index')} className='w-fit py-4 text-lg px-10 bg-indigo-700 text-white font-bold rounded-full'>
                            My Purchases
                        </a>
                    </div>     
                </div>
            </div>
        </div>
    );
}