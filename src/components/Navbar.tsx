import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="font-bold text-primary text-xl tracking-wider">
            SISTECH CAFE
        </div>
        
        <div className="flex items-center gap-8 font-medium text-gray-700">
            <Link href="/menu" className="hover:text-primary transition-colors">Menu</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
            <Link href="/promo" className="hover:text-primary transition-colors">Promo</Link>
            <Link href="/login" className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors">
            Login
            </Link>
        </div>
        </nav>
    );
}