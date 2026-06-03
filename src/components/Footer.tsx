import { FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="w-full bg-primary text-white py-8 flex flex-col items-center justify-center gap-4 mt-auto">
        <div className="flex gap-6">
            <FaInstagram className="w-6 h-6 cursor-pointer hover:text-white/80 transition-opacity" />
            <FaTwitter className="w-6 h-6 cursor-pointer hover:text-white/80 transition-opacity" />
            <FaWhatsapp className="w-6 h-6 cursor-pointer hover:text-white/80 transition-opacity" /> 
        </div>
        <p className="text-sm font-medium mt-2">
            Made with Love by Aliya
        </p>
        </footer>
    );
}