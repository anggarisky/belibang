
import Navigation from '@/Components/Navigation';
import { Head, Link } from '@inertiajs/react';

export default function HomeRun({}) {
    return (
        <div>

            <Head>
                <title>Home Run</title>
                <meta name="description" content="Explore our wide range of products." />
                <meta name="keywords" content="products, shopping, deals" />
                <meta property="og:title" content="Discover Products" />
                <meta property="og:description" content="Explore our wide range of products." />
                <meta property="og:url" content="http://example.com/page" />
                <meta property="og:type" content="website" />
            </Head>
            <Navigation/>

            <div className="py-28">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 text-center">
                    <div className="flex flex-col gap-y-5 items-center">
                        <h1 className="text-7xl text-indigo-950 font-bold">
                            Create. Sell. Repeat.
                        </h1>
                        <p className="text-lg text-slate-600 leading-loose">
                            Website terpercaya untuk menjual dan membeli <br/> produk digital original seperti ebook, course, template, dsb.
                        </p>
                        <Link href={route('front.discover')} className='w-fit py-4 text-lg px-10 bg-indigo-700 text-white font-bold rounded-full'>
                            Explore files
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}