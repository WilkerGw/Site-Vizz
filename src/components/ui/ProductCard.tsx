"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// 1. ATUALIZAMOS A INTERFACE DE PROPRIEDADES
// Adicionamos as novas propriedades opcionais para o cartão de destaque
export interface ProductCardProps {
  name: string;
  price: string;
  imageUrl?: string;      // Para a página de produtos
  mainImage?: string;     // Para a página inicial
  promoPrice?: string;    // Preço promocional (opcional)
  onCardClick?: () => void; // Função de clique (opcional)
}

export function ProductCard({ 
  name, 
  price, 
  promoPrice,
  imageUrl, 
  mainImage,
  onCardClick 
}: ProductCardProps) {
  // 2. O cartão agora decide qual imagem usar: mainImage ou imageUrl
  const displayImage = mainImage || imageUrl || "/images/placeholder.png"; // Usa uma imagem de fallback se nenhuma for fornecida

  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white cursor-pointer"
      whileHover={{ y: -5 }}
      onClick={onCardClick} // Adiciona a função de clique ao cartão
    >
      <div className="relative w-full h-48 md:h-56">
        <Image
          src={displayImage}
          alt={`Imagem do produto ${name}`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-md font-semibold text-gray-800 truncate">{name}</h3>
        <div className="flex items-baseline gap-2 mt-2">
          {/* 3. Lógica para mostrar o preço promocional */}
          {promoPrice ? (
            <>
              <p className="text-lg font-bold text-red-600">R$ {promoPrice}</p>
              <p className="text-sm font-medium text-gray-500 line-through">R$ {price}</p>
            </>
          ) : (
            <p className="text-lg font-bold text-yellow-600">R$ {price}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}