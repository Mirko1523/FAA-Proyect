"use client";

import NavBar from "@/components/navBar/navbar";
import Image from "next/image";
import React from "react";

function AboutUs() {
    return (
        <div>
            <NavBar />
            <section className="flex flex-col items-center text-center py-10 px-5 bg-gray-100">
                <h2 className="text-4xl font-bold text-purple-dark mb-6">Sobre Nosotros</h2>
                <p className="text-lg text-purple-dark max-w-2xl mb-6">
                    Nos presentamos somos <span className="font-semibold">FAA Scalable</span> una Agencia de Marketing
                    digital enfocada en la creación de perfiles para negocios y su desarrollo en el mundo digital. Nos
                    especializamos en la gestión de redes sociales y campañas de marketing digital.
                </p>

                {/* Container for profiles: row layout */}
                <div className="flex flex-row flex-wrap justify-center items-start gap-8">
                    {/* Profile 2 */}
                    <div className="flex flex-col items-center w-40">
                        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-300 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110">
                            <a
                                href="https://www.instagram.com/faascalable.sp/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visitar perfil de Mirko en LinkedIn"
                            >
                                <Image
                                    src="/perfilfran.jpg"
                                    alt="Perfil de Mirko"
                                    className="w-full h-full object-cover"
                                    width={160}
                                    height={160}
                                />
                            </a>
                        </div>
                        <p className="text-lg text-purple-dark mt-4 font-semibold">Founder</p>

                    </div>

                </div>
            </section>
        </div>
    );
}

export default AboutUs;
