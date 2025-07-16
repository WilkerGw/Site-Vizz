"use client";

import React from 'react';
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

/**
 * Componente ImageCompareSection
 * Exibe um slider de comparação "antes e depois" com legendas sutis sobre a imagem.
 */
export function ImageCompareSection() {
  return (
    <section className="w-full py-20 px-4 bg-white flex justify-center items-center">
      <motion.div
        className="container max-w-4xl w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          A Mágica das Lentes <span className="text-yellow-500">Fotossensíveis</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Arraste a linha e veja como as lentes se adaptam à luz, escurecendo em ambientes externos e clareando nos internos.
        </p>

        {/* --- INÍCIO DA ALTERAÇÃO --- */}
        {/* 1. Adicionado "relative" para servir de referência para as legendas */}
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl mx-auto">
          <ImgComparisonSlider className="w-full h-full group outline-none">
            <img
              slot="first"
              src="/images/antes.png"
              alt="Lente fotossensível em ambiente interno (clara)"
              className="w-full h-full object-cover"
            />
            <img
              slot="second"
              src="/images/depois.png"
              alt="Lente fotossensível em ambiente externo (escura)"
              className="w-full h-full object-cover"
            />
            <div slot="handle" className="w-1 h-full bg-yellow-400 opacity-75 group-hover:opacity-100 transition-opacity duration-300 outline-none">
              <div className="absolute top-1/2 -translate-y-1/2 -ml-5 w-10 h-10 rounded-full bg-yellow-400 shadow-xl flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>
              </div>
            </div>
          </ImgComparisonSlider>

          {/* 2. Legendas adicionadas aqui, sobrepondo o slider */}
          <div className="absolute bottom-4 left-4 z-10 bg-black/50 text-white text-xs px-2 py-1 rounded-md pointer-events-none">
            Ambiente Interno
          </div>
          <div className="absolute bottom-4 right-4 z-10 bg-black/50 text-white text-xs px-2 py-1 rounded-md pointer-events-none">
            Ambiente Externo
          </div>
        </div>
        {/* --- FIM DA ALTERAÇÃO --- */}

        {/* Seção de Call to Action (CTA) */}
        <div className="mt-12 p-6 rounded-lg bg-gray-50">
          <p className="text-xl font-medium text-gray-800 mb-4">
            Gostou do que viu? Transforme sua experiência visual hoje mesmo.
          </p>
          <a
            href="https://wa.me/551123628799"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25d366] text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-green-300"
          >
            <MessageCircle size={20} />
            Faça um Orçamento
          </a>
        </div>
      </motion.div>
    </section>
  );
}