"use client";

import { Instagram } from "lucide-react";

function Footer() {
    return (
        <footer className="rounded-lg bg-white shadow-md relative">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <hr className="my-6 text-purple-dark font-bold sm:mx-auto lg:my-8" />
                <div className="flex flex-col items-center sm:flex-row sm:justify-between">

                    <span className="block text-sm text-purple-dark font-bold sm:text-center mb-4 sm:mb-0">
                        © 2025 <a href="/" className="hover:underline">FAA</a>. All Rights Reserved.
                    </span>
                    <p className="text-purple-dark font-semibold">Created by <a className="hover:underline border-gray-700 mt-8 pt-8 text-center text-purple-dark" href="https://www.instagram.com/_mkmagency/">Mkm Agency</a>.</p>

                    <div className="flex flex-col items-center mb-4 sm:mb-0">
                        <p className="text-sm text-purple-dark font-bold mb-2">¡Síguenos en Instagram!</p>
                        <a
                            href="https://www.instagram.com/fma.scalable?igsh=MW1xaWpvaWFpbGlwbw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visitar perfil de Mkm Agency en Instagram"
                            className=" text-purple-dark"
                        >
                            <Instagram size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
