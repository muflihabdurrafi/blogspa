import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <nav className="bg-white border-gray-200">
            <div className="2xl:px-96 px-10 w-[100%] mx-auto border py-4">
                <div className="flex justify-between">
                    <div>
                        <Link href="/">
                            <Image className="mx-auto" src="/logo.png" alt="404 Not Found" width={128} height={128} />
                        </Link>
                    </div>
                    <div className="hidden md:flex gap-10 py-2 text-lg">
                        <div>
                            <Link href="/blog" className="hover:text-[#1884b3]">
                                Blog
                            </Link>
                        </div>
                        <div className="px-0">
                            <Link href="/users" className="hover:text-[#1884b3]">
                                Users
                            </Link>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center mobile-menu-btn">
                        <button
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`mobile-menu ${isOpen ? "hidden md:hidden" : ""}`}>
                <Link href="/blog" className="block py-2 px-4 text-xl text-center bg-gray-200">
                    Blog
                </Link>
                <Link href="/users" className="block py-2 px-4 text-xl text-center bg-gray-200">
                    Users
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
