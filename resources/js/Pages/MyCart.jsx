import Navigation from '@/Components/Navigation';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function MyCart({ auth }) {
    return (
        <div>
            <Head title="My Carts" />

            <Navigation/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <h1 className="text-4xl text-indigo-950 font-bold mb-10">
                        My Carts
                    </h1>
                    <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        <div className="flex flex-col p-5">
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

                                    <tr>
                                        <td className="pb-5">
                                            <img src="" className="object-cover rounded-lg w-[120px] h-[80px] bg-slate-300"/>
                                        </td>
                                        <td>
                                            asdasd
                                        </td>
                                        <td>
                                            asdasdd
                                        </td>
                                        <td>
                                            Rp 123123
                                        </td>
                                        <td>
                                            <div className="flex flex-row gap-x-3">
                                                <a className="py-3 px-10 bg-red-700 text-white w-fit font-bold">Delete</a>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="pb-5">
                                            <img src="" className="object-cover rounded-lg w-[120px] h-[80px] bg-slate-300"/>
                                        </td>
                                        <td>
                                            asdasd
                                        </td>
                                        <td>
                                            asdasdd
                                        </td>
                                        <td>
                                            Rp 123123
                                        </td>
                                        <td>
                                            <div className="flex flex-row gap-x-3">
                                                <a className="py-3 px-10 bg-red-700 text-white w-fit font-bold">Delete</a>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="pb-5">
                                            <img src="" className="object-cover rounded-lg w-[120px] h-[80px] bg-slate-300"/>
                                        </td>
                                        <td>
                                            asdasd
                                        </td>
                                        <td>
                                            asdasdd
                                        </td>
                                        <td>
                                            Rp 123123
                                        </td>
                                        <td>
                                            <div className="flex flex-row gap-x-3">
                                                <a className="py-3 px-10 bg-red-700 text-white w-fit font-bold">Delete</a>
                                            </div>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <td className="pb-5">
                                            <img src="" className="object-cover rounded-lg w-[120px] h-[80px] bg-slate-300"/>
                                        </td>
                                        <td>
                                            asdasd
                                        </td>
                                        <td>
                                            asdasdd
                                        </td>
                                        <td>
                                            Rp 123123
                                        </td>
                                        <td>
                                            <div className="flex flex-row gap-x-3">
                                                <a className="py-3 px-10 bg-red-700 text-white w-fit font-bold">Delete</a>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="pb-5">
                                            <img src="" className="object-cover rounded-lg w-[120px] h-[80px] bg-slate-300"/>
                                        </td>
                                        <td>
                                            asdasd
                                        </td>
                                        <td>
                                            asdasdd
                                        </td>
                                        <td>
                                            Rp 123123
                                        </td>
                                        <td>
                                            <div className="flex flex-row gap-x-3">
                                                <a className="py-3 px-10 bg-red-700 text-white w-fit font-bold">Delete</a>
                                            </div>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}