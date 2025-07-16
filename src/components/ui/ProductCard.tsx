"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

type ProductCardProps = {
  name: string; mainImage: string; price: string; promoPrice: string; onCardClick: () => void;
};

export function ProductCard({ name, mainImage, price, promoPrice, onCardClick }: ProductCardProps) {
  return (
    <motion.div
      onClick={onCardClick}
      className="group relative cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      layout
    >
      <div className="relative w-full aspect-square">
        <Image
          src={mainImage}
          alt={`Imagem do produto ${name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-yellow-400 text-gray-800 text-xs font-bold px-2 py-1 rounded-full">
          OFERTA
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="font-semibold text-gray-800 truncate">{name}</h3>
        <div className="mt-2 flex items-center justify-center gap-2">
          <p className="text-sm text-gray-500 line-through">{price}</p>
          <p className="text-lg font-bold text-gray-900">{promoPrice}</p>
        </div>
      </div>
    </motion.div>
  );
}