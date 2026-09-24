import Image from 'next/image';
import Link from 'next/link';

import logo from "@/assets/logo.png";

const Footer = () => {
    return (
        <div>
             <footer className="bg-black px-6 py-5">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <Link href="/" className="flex items-center gap-2">
         <Image src={logo} width={15} height={15} alt='footer'></Image>
          <span className="text-white font-bold text-sm tracking-wide">
            FITLOG
          </span>
        </Link>

        <p className="text-gray-500 text-xs">
          ©  FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
        </div>
    );
};

export default Footer;