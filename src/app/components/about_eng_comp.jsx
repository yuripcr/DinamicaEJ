"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa os estilos do AOS

export default function About_Eng() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação (em milissegundos)
      easing: "ease-in-out", // Tipo de transição
    });
  }, []);

  return (
    <section className="section-container bg-[#F3F4F6] pb-0">
      <div className="content-wrapper">
        <h1 className="section-title text-[#0a1f44] text-center mb-4">
          Engenharia de Computação
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <div className="card-container bg-white shadow-lg rounded-lg overflow-hidden p-6">
            <div className="bg-[#162E50] p-3 flex justify-center">
              <img src="/Eng_branco.png" alt="Logo do Instituto Federal" className="h-16" />
            </div>
            <div className="p-4">
              <p className="text-[#0a1f44] text-lg leading-relaxed text-center">
                O curso de Engenharia de Computação do Instituto Federal forma
                profissionais com sólidos conhecimentos em hardware e software,
                capacitados para desenvolver e integrar sistemas computacionais.
              </p>
            </div>
          </div>

          <div className="card-container bg-white shadow-lg rounded-lg overflow-hidden p-6">
            <div className="bg-[#162E50] p-3 flex justify-center">
              <img src="/EJ.png" alt="Logo EJ Turing" className="h-16" />
            </div>
            <div className="p-4">
              <p className="text-[#0a1f44] text-lg leading-relaxed text-center">
                A EJ Turing agrega muito para o estudante de Engenharia de
                Computação, proporcionando experiência prática, desenvolvimento
                profissional e networking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
