import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function MyORders({ auth, my_orders }) {

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
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">My Producst</h2>}
        >
            <Head title="My Transactions" />
            
            {showMessage && (
                <div className="alert alert-danger bg-red-700 p-5 text-center">
                    <p className="text-lg font-bold text-white">
                        {flash.error}
                    </p>
                </div>
            )}

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        <div className="flex flex-col p-5">
                            <table>
                                <thead>
                                    <tr>
                                        <td>
                                            Cover
                                        </td>
                                        <td>
                                            Product
                                        </td>
                                        <td>
                                            Buyer
                                        </td>
                                        <td>
                                            Price
                                        </td>
                                        <td>
                                            Status
                                        </td>
                                        <td>
                                            Actions
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {my_orders.length > 0  ? (
                                        my_orders.map((order, index) => (
                                            <tr key={index}>
                                                <td className="pb-5">
                                                    <img src={`${order.product.path_cover}`} alt={order.product.name} className="object-cover rounded-lg w-[120px] h-[80px] bg-red-300"/>
                                                </td>
                                                <td>
                                                    {order.product.name}
                                                    <br />
                                                    {order.product.category}
                                                </td>
                                                <td>
                                                    {order.buyer.name}
                                                </td>
                                                <td>
                                                    {order.product.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}
                                                </td>
                                                <td>
                                                    {order.is_paid === 1 ? 'Paid ': 'Pending'}
                                                </td>
                                                <td>
                                                    {order.is_paid === 1 ? 
                                                    <div className="flex flex-row gap-x-3">
                                                            <Link href="#"className="py-3 px-10 bg-slate-200 text-black w-fit font-bold">Approved</Link>
                                                        </div>
                                                    :
                                                    <div className="flex flex-row gap-x-3">
                                                        <Link href={route('orders.approve', {order: order.id} )} method="post" as="button" className="py-3 px-10 bg-indigo-700 text-white w-fit font-bold">Approve</Link>
                                                    </div>
                                                    }
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <p>No transactions found.</p>
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