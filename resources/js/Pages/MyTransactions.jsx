import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function MyTransactions({ auth, my_transactions }) {

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
                                            Creator
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
                                    {my_transactions.length > 0  ? (
                                        my_transactions.map((transaction, index) => (
                                            <tr key={index}>
                                                <td className="pb-5">
                                                    <img src={`${transaction.product.path_cover}`} alt={transaction.product.name} className="object-cover rounded-lg w-[120px] h-[80px] bg-red-300"/>
                                                </td>
                                                <td>
                                                    {transaction.product.name}
                                                    <br />
                                                    {transaction.product.category}
                                                </td>
                                                <td>
                                                    {transaction.product.user.email}
                                                </td>
                                                <td>
                                                    {transaction.product.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}
                                                </td>
                                                <td>
                                                    {transaction.is_paid === 1 ? 'Paid ': 'Pending'}
                                                </td>
                                                <td>
                                                    <div className="flex flex-row gap-x-3">
                                                        <a href={route('front.download', `${transaction.product.slug}`)} className="py-3 px-10 bg-indigo-700 text-white w-fit font-bold">Download</a>
                                                    </div>
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