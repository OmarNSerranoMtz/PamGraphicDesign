import React from "react";
import Link from "next/link";

type Props = {};

function Footer({}: Props) {
  return (
    <div>
      <footer className="w-full py-12 md:py-24 lg:py-32">
        <div className="container flex flex-col items-center gap-4 px-4 text-center md:flex-row md:justify-between md:gap-10 md:px-6">
          <div className="flex items-center space-x-2 text-sm tracking-wide md:order-1 md:space-x-4">
            <span className="opacity-50">© 2023 Acme Studios Inc.</span>
            <Link
              className="underline opacity-70 hover:opacity-100 dark:opacity-70 dark:hover:opacity-100"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="underline opacity-70 hover:opacity-100 dark:opacity-70 dark:hover:opacity-100"
              href="#"
            >
              Terms & Conditions
            </Link>
          </div>
          <nav className="flex items-center justify-center gap-4 md:order-0 md:gap-8">
            <Link
              className="inline-flex items-center rounded-md bg-gray-900 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
