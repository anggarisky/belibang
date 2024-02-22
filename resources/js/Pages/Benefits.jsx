
import Navigation from '@/Components/Navigation';
import { Head } from '@inertiajs/react';

export default function Benefits({}) {
    return (
        <div>

            <Head>
                <title>Benefits</title>
                <meta name="description" content="Explore our wide range of products." />
                <meta name="keywords" content="products, shopping, deals" />
                <meta property="og:title" content="Discover Products" />
                <meta property="og:description" content="Explore our wide range of products." />
                <meta property="og:url" content="http://example.com/page" />
                <meta property="og:type" content="website" />
            </Head>

            <Navigation/>
        </div>
    );
}