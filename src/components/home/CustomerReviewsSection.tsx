"use client";

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

type Review = {
  id: number; name: string; comment: string; rating: number; initials: string;
};

const reviews: Review[] = [
    { id: 1, name: 'Wilker Martins', comment: 'Melhor atendimento da cidade! Produtos de ótimas qualidade e modernos. Loja aconchegante e bonita!', rating: 5, initials: 'WM' },
    { id: 2, name: 'Debora Ap Ferreira', comment: 'Trabalho de excelência. Atendimento, pontualidade, preço justo e produtos de excelente qualidade. Super recomendo.', rating: 5, initials: 'DF' },
    { id: 3, name: 'Barbara Caroline', comment: 'Amei a ótica, com ampla variedade. Parabéns pelo atendimento e paciência em cada detalhe. Qualidade muito boa, recomendo.', rating: 5, initials: 'BC' },
    { id: 4, name: 'Yan Rocha', comment: 'Comprei meus óculos, ficaram prontos super rápido e atendimento excelente! Recomendo 💙', rating: 5, initials: 'YR' },
    { id: 5, name: 'Bruna Santos', comment: 'Super indico a Óticas Vizz, atendimento sensacional. Adquiri dois óculos, e estou amando a qualidade.', rating: 5, initials: 'BS' },
    { id: 6, name: 'Elem Fiuza', comment: 'Melhor atendimento que eu poderia receber. Óculos super em conta e os funcionários são uns gatos 😍', rating: 5, initials: 'EF' },
    { id: 7, name: 'Rafael Santos', comment: 'Super indico, os meninos me explicaram tudo sobre as lentes do meu óculos. As Armações são lindas, e muito acessível!', rating: 5, initials: 'RS' },
    { id: 8, name: 'Rodrigo Santos', comment: 'Atendimento nota 10. Fui pra comprar um óculos acabei saindo com dois kkkkk Eu amei ❤️', rating: 5, initials: 'RS' },
    { id: 9, name: 'Reginaldo Pereira', comment: 'Excelente atendimento, preço justo, e pontualidade na entrega. No meu caso foi entregue dois dias antes do prazo. Recomendo!', rating: 5, initials: 'RP' },
    { id: 10, name: 'Paulo Brandão', comment: 'A loja tem produtos excelentes e o atendimento é ótimo!! Recomendo dmais!!', rating: 5, initials: 'PB' },
];

export function CustomerReviewsSection() {
  const reviewsContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = useCallback(() => {
    const container = reviewsContainerRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const tolerance = 2;
    setCanScrollLeft(scrollLeft > tolerance);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - tolerance);
  }, []);

  useEffect(() => {
    const container = reviewsContainerRef.current;
    if (!container) return;
    container.addEventListener('scroll', checkScrollButtons, { passive: true });
    window.addEventListener('resize', checkScrollButtons);
    checkScrollButtons();
    return () => {
      container.removeEventListener('scroll', checkScrollButtons);
      window.removeEventListener('resize', checkScrollButtons);
    };
  }, [checkScrollButtons]);

  const scroll = (direction: 'left' | 'right') => {
    const container = reviewsContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
      setTimeout(checkScrollButtons, 500);
    }
  };

  return (
    <section className="bg-white py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
        O que nossos <span className="text-yellow-500">clientes dizem</span>
      </h2>
      <div className="relative max-w-6xl mx-auto">
        {/* --- INÍCIO DA CORREÇÃO --- */}
        {/* O padding foi movido para este container pai */}
        <div className="px-8 md:px-0">
          <div
            ref={reviewsContainerRef}
            // A classe 'px-8' foi removida daqui
            className="flex overflow-x-auto snap-x snap-mandatory scroll-p-8 gap-8 py-8 no-scrollbar fade-mask-x"
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="relative flex flex-col text-left p-8 bg-gray-50 border border-gray-100 rounded-xl w-[90vw] max-w-[350px] md:w-[350px] flex-shrink-0 snap-start shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <Quote className="absolute top-4 left-4 text-gray-200" size={48} />
                <div className="relative z-10 flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" />)}
                </div>
                <p className="relative z-10 text-gray-600 italic line-clamp-4 flex-grow mb-6">
                  "{review.comment}"
                </p>
                <div className="relative z-10 flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-yellow-400 text-gray-800 flex items-center justify-center font-bold">
                    {review.initials}
                  </div>
                  <span className="font-semibold text-gray-800">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* --- FIM DA CORREÇÃO --- */}

        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          aria-label="Anterior"
          className="absolute top-1/2 -translate-y-1/2 left-0 z-20 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 transition-all duration-300 hover:bg-yellow-400 hover:text-gray-800 disabled:opacity-30 disabled:cursor-not-allowed hidden md:flex"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          aria-label="Próximo"
          className="absolute top-1/2 -translate-y-1/2 right-0 z-20 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 transition-all duration-300 hover:bg-yellow-400 hover:text-gray-800 disabled:opacity-30 disabled:cursor-not-allowed hidden md:flex"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}