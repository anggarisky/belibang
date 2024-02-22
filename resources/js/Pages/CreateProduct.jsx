    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
    import { Head, useForm } from '@inertiajs/react';

    export default function Dashboard({ auth }) {

        const {data, setData, post, processing, errors} = useForm({
            name: '',
            price: '',
            category: '',
            path_cover: null,
            path_file: null,
        });

        const handleChange = (e) => {
            const key = e.target.id;
            const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
            setData(data => ({
                ...data,
                [key]: value
            }));
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            post('/products', data, {
                forceFormData: true,
            });
        };


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
                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-col gap-y-4">
                                        <div className="flex flex-col gap-y-2">
                                            <p className="font-semibold text-base text-indigo-950">
                                                Name
                                            </p>
                                            <input onChange={handleChange} value={data.name} required type="text" id="name" className="py-3 pl-5 rounded-full"/>
                                            {errors.name && <div className="text-red-500">{errors.name}</div>}
                                        </div>
                                        <div className="flex flex-col gap-y-2">
                                            <p className="font-semibold text-base text-indigo-950">
                                                Cover Product
                                            </p>
                                            <input onChange={handleChange} required type="file" id="path_cover" className="py-3 pl-5 rounded-full" />
                                            {errors.path_cover && <div className="text-red-500">{errors.path_cover}</div>}
                                        </div>
                                        <div className="flex flex-col gap-y-2">
                                            <p className="font-semibold text-base text-indigo-950">
                                                Category
                                            </p>
                                            <select value={data.category} onChange={handleChange} required id="category" className="py-3 pl-5 rounded-full">
                                                <option value="">Select Category</option>
                                                <option value="Ebook">Ebook</option>
                                                <option value="Course">Course</option>
                                                <option value="Template">Template</option>
                                            </select>
                                            {errors.category && <div className="text-red-500">{errors.category}</div>}
                                        </div>
                                        <div className="flex flex-col gap-y-2">
                                            <p className="font-semibold text-base text-indigo-950">
                                                Price
                                            </p>
                                            <input value={data.price} onChange={handleChange} required type="number"  id="price" className="py-3 pl-5 rounded-full"/>
                                            {errors.price && <div className="text-red-500">{errors.price}</div>}
                                        </div>
                                        <div className="flex flex-col gap-y-2">
                                            <p className="font-semibold text-base text-indigo-950">
                                                Upload File
                                            </p>
                                            <input onChange={handleChange} required type="file" id="path_file" className="py-3 pl-5 rounded-full"/>
                                            {errors.path_file && <div className="text-red-500">{errors.path_file}</div>}
                                        </div>
                                        <button disabled={processing} type="submit" className="py-3 px-10 bg-indigo-700 text-white w-fit font-bold">Save Product</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        );
    }
