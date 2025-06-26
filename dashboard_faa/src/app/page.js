"use client";

import NavBar from "@/components/navBar/navbar";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const handleNavigation = (route) => {
    router.push(route);
  };

  const services = [
    {
      title: "Trabajamos a fondo en tu misión",
      imgSrc: "/previews/cohete1.webp",
      imgAlt: "Cohete despegando",
    },
    {
      title: "Escalamos tu marca, comunicación y negocio",
      imgSrc: "/previews/cohete2.png",
      imgAlt: "Gráficos de crecimiento",
    },
    {
      title: "Revelamos el valor oculto de tu marca",
      imgSrc: "/previews/cohete3.webp",
      imgAlt: "Lupa sobre logo",
    },
  ];

  return (
    <div className="space-y-2">
      <NavBar />
      <style>{`html { scroll-behavior: smooth; }`}</style>

      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen bg-purple-dark text-white">
        <div className="text-center px-6 md:px-12 lg:px-24">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">FAA</h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
            Te ayudamos a escalar tu Marca <strong>en redes</strong> para expresar tu verdadero potencial.
            <br /> ¿Listo para escalar sin límites?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="px-8 py-3 bg-text-white text-purple-dark font-semibold rounded-lg shadow hover:shadow-xl transition"
            >
              Descubre Nuestros servicios
            </a>
            <button
              onClick={() => handleNavigation("/contact")}
              className="px-8 py-3 bg-turquoise text-white font-semibold rounded-lg shadow hover:bg-opacity-90 transition"
            >
              Inicia tu Revolución Digital
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div id="services" className="grid gap-9 md:grid-cols-2 lg:grid-cols-3 px-10 py-12 bg-neutral-bg">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="group flex flex-col bg-purple-light rounded-2xl shadow-lg transform transition hover:scale-105 overflow-hidden"
          >
            <div className="relative h-48 w-full">
              <Image
                src={service.imgSrc}
                alt={service.imgAlt}
                fill
                className="object-contain bg-white"
              />
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
              <h2 className="text-xl font-bold text-purple-dark mb-2 text-center">
                {service.title}
              </h2>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
