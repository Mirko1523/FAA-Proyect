"use client";

function Footer() {
    return (
        <footer className="rounded-lg bg-gray-200 shadow-md relative">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <hr className="my-6 border-blue-600 font-bold sm:mx-auto lg:my-8" />
                <div className="flex flex-col items-center sm:flex-row sm:justify-between">

                    <span className="block text-sm text-blue-600 font-bold sm:text-center mb-4 sm:mb-0">
                        © 2025 <a href="/" className="hover:underline">FMA Scalable</a>. All Rights Reserved.
                    </span>

                    <div className="flex flex-col items-center mb-4 sm:mb-0">
                        <p className="text-sm text-blue-600 font-bold mb-2">¡Síguenos en Instagram!</p>
                        <a
                            href="https://www.instagram.com/fma.scalable?igsh=MW1xaWpvaWFpbGlwbw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visitar perfil de Mkm Agency en Instagram"
                            className="inline-block"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 256 256"
                                fill="#2563eb"
                            >
                                <g transform="scale(5.12)">
                                    <path d="M16,3c-7.17,0 -13,5.83 -13,13v18c0,7.17 5.83,13 13,13h18c7.17,0 13,-5.83 13,-13v-18c0,-7.17 -5.83,-13 -13,-13zM16,5h18c6.09,0 11,4.91 11,11v18c0,6.09 -4.91,11 -11,11h-18c-6.09,0 -11,-4.91 -11,-11v-18c0,-6.09 4.91,-11 11,-11zM37,11c-1.1,0 -2,0.9 -2,2s0.9,2 2,2 2,-0.9 2,-2 -0.9,-2 -2,-2zM25,14c-6.06,0 -11,4.94 -11,11s4.94,11 11,11 11,-4.94 11,-11 -4.94,-11 -11,-11zM25,16c4.98,0 9,4.02 9,9s-4.02,9 -9,9 -9,-4.02 -9,-9 4.02,-9 9,-9z" />
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
