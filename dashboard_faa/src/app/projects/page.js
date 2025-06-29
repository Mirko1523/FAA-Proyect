"use client"

import NavBar from "@/components/navBar/navbar"
import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function Projects() {

    const proyectos = [
        { name: "Vaca Retá", url: "https://www.instagram.com/vacaretaveterinaria?igsh=MWhmZ25rZW9kbHpyOA==", preview: "/previews/vacareta.png" },
        { name: "Carniceria El Vasco", url: "https://www.instagram.com/elvasco_carniceria?igsh=MTFrZ2UxdmducjVyZw==", preview: "/previews/elvasco.png" },
        { name: "ModernFitMethod", url: "https://www.instagram.com/modernfitmethod?igsh=MjN0eTQ0NXVqbGV6", preview: "/previews/modernfit.png" },
    ]

    return (
        <div className="min-h-screen bg-neutral-100">
            <NavBar />
            <main className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-dark to-indigo-900">
                    Perfiles de Instagram
                </h2>
                <p className="mb-8 text-purple-dark">
                    Estos son perfiles de personas que han trabajado con nosotros, mostrando su confianza en nuestros servicios y proyectos.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {proyectos.map((p, i) => (
                        <Link
                            key={i}
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block overflow-hidden rounded-2xl shadow-md bg-white transform transition hover:scale-105 hover:shadow-xl"
                        >
                            <div className="relative w-full h-48">
                                <Image
                                    src={p.preview}
                                    alt={`Preview de ${p.name}`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-purple-dark group-hover:text-purple-500 transition-colors">
                                    {p.name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>


            </main>
        </div>
    )
}
