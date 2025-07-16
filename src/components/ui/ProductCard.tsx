"use client";

import Image from "next/image";
import { motion } from "framer-motion";


export interface ProductCardProps {
  name: string;
  price: string;
  imageUrl: string; 
}

export function ProductCard({ name, price, imageUrl }: ProductCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
      whileHover={{ y: -5 }}
    >
      <div className="relative w-full h-48 md:h-56">
        {/* 2. Usamos a propriedade 'imageUrl' para carregar a imagem */}
        <Image
          src={imageUrl}
          alt={`Imagem do produto ${name}`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-md font-semibold text-gray-800 truncate">{name}</h3>
        <p className="mt-2 text-lg font-bold text-yellow-600">R$ {price}</p>
      </div>
    </motion.div>
  );
}