
import { Link } from '@inertiajs/react';

export default function Navigation({}) {
    return (
            <nav className="bg-slate-200 px-28 py-5 flex flex-row justify-between">
                <div className="logo">
                    Belibang
                </div>
                <ul className="flex flex-row gap-x-10">
                    <li>
                        <Link href={route('front.index')}>Home</Link>
                    </li>
                    <li>
                        <Link href={route('front.discover')}>Discover</Link>
                    </li>
                    <li>
                        <Link href={route('front.benefits')}>Benefits</Link>
                    </li>
                    <li>
                        <Link href={route('dashboard')}>My Dashboard</Link>
                    </li>
                </ul>
            </nav>
    );
}