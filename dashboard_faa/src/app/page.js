"use client";

import NavBar from "@/components/navBar/navbar";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();

  const handleNavigation = (route) => {
    router.push(route);
  };

  return (
    <div className="space-y-2">
      <NavBar />
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen bg-purple-dark text-white">
        <div className="text-center px-6 md:px-12 lg:px-24">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">FAA</h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
            Te ayudamos a escalar tu Marca <strong>en redes</strong> para expresar tu verdadero potencial.<br /> ¿Listo para escalar sin límites?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="px-8 py-3 bg-text-white text-purple-dark font-semibold rounded-lg shadow hover:shadow-xl transition"
            >
              Descubre Nuestros servicios
            </a>
            <button
              onClick={() => handleNavigation('/contact')}
              className="px-8 py-3 bg-turquoise text-text-white font-semibold rounded-lg shadow hover:bg-opacity-90 transition"
            >
              Inicia tu Revolución Digital
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div id="services" className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-6 py-12 bg-neutral-bg">
        {[
          {
            title: "Visualiza tu Futuro Gratis",
            text: "Te ofrecemos un prototipo 100% gratuito de tu idea. Así, puedes ver y sentir cómo será tu proyecto antes de comprometerte. ¡Tu visión, nuestra pasión!",
          },
          {
            title: "Diseño Web distintivo",
            text: "Creamos páginas web que no solo funcionan, sino que cautivan. Desde la estética hasta la usabilidad, tu sitio será una obra de arte digital que convertirá visitantes en clientes leales.",
          },
          {
            title: "Marketing que impacta",
            text: "Desarrollamos campañas de marketing digital que no solo se ven, sino que se sienten. Desde SEO hasta redes sociales, llevamos tu marca al siguiente nivel con estrategias que generan impacto real.",
          },
          {
            title: "Soluciones a Medida para tu Negocio",
            text: "¿Tienes una idea única? La convertimos en realidad con sistemas adaptados a tus necesidades. Desde aplicaciones hasta plataformas complejas, creamos herramientas que impulsan tu éxito.",
          },
          {
            title: "Lanzamiento Sin Costos Extra",
            text: "Una vez que cerremos el trato, te regalamos de 2 a 4 años de alojamiento y dominio. Empieza a brillar en internet sin preocuparte por los detalles técnicos.",
          },
          {
            title: "Tu Idea, Nuestra Misión",
            text: "Amamos las ideas audaces. Por eso, te ofrecemos una consulta gratuita para escuchar tu visión y trazar el camino hacia su realización. Juntos, haremos que tu marca despegue.",
          },
        ].map((service, idx) => (
          <div key={idx} className="p-6 bg-textWhite rounded-lg shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-bold text-purpleDark mb-4 text-center">
              {service.title}
            </h2>
            <p className="text-gray-700 text-center">
              {service.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
