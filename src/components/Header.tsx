import React from "react";
import Link from "next/link";
import { FlagIcon } from "lucide-react";

type Props = {};

function Header({}: Props) {
  return (
    <div>
      <header className="w-full py-6 lg:py-8 xl:py-10">
        <div className="container flex flex-col gap-4 px-4 text-center md:gap-8 md:px-6">
          <nav className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 lg:justify-center lg:space-x-10">
            <Link className="flex items-center space-x-2 font-bold" href="#">
              <FlagIcon className="w-6 h-6 rounded-lg" />
              <span className="sr-only">Home</span>
            </Link>
            <Link
              className="inline-flex items-center space-x-2 text-sm font-medium tracking-wide transition-colors hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
            >
              Portafolio
            </Link>
            <Link
              className="inline-flex items-center space-x-2 text-sm font-medium tracking-wide transition-colors hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
            >
              Quién Soy
            </Link>
            <Link
              className="inline-flex items-center space-x-2 text-sm font-medium tracking-wide transition-colors hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
            >
              Contacto
            </Link>
          </nav>
        </div>
      </header>
      {/* <div className="absolute inset-0 z-[-1]">
        <img
          alt="Designer"
          className="filter blur-sm brightness-90"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src="/placeholder.svg"
        />
      </div> */}
    </div>
  );
}

export default Header;
