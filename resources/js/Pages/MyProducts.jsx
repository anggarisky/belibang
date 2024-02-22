import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth, my_products }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">My Producst</h2>}
        >
            <Head title="My Products" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        <div className="flex flex-col p-5">
                            <Link href={route('products.create')} className="mb-10 py-3 px-10 bg-indigo-700 text-white w-fit font-bold">Add New Product</Link>
                            <table>
                                <thead>
                                    <tr>
                                        <td>
                                            Screenshot
                                        </td>
                                        <td>
                                            Name
                                        </td>
                                        <td>
                                            Category
                                        </td>
                                        <td>
                                            Price
                                        </td>
                                        <td>
                                            Actions
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {my_products.length > 0  ? (
                                        my_products.map((product, index) => (
                                            <tr key={index}>
                                                <td className="pb-5">
                                                    <img src={`${product.path_cover}`} alt={product.name} className="object-cover rounded-lg w-[120px] h-[80px] bg-red-300"/>
                                                </td>
                                                <td>
                                                    {product.name}
                                                </td>
                                                <td>
                                                    {product.category}
                                                </td>
                                                <td>
                                                    {product.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}
                                                </td>
                                                <td>
                                                    <div className="flex flex-row gap-x-3">
                                                        <a href="#" className="py-3 px-10 bg-indigo-700 text-white w-fit font-bold">Manage</a>
                                                        <a className="py-3 px-10 bg-red-700 text-white w-fit font-bold">Delete</a>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <p>No products found.</p>
                                    )}
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}