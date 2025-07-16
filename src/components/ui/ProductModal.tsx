"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Product } from "../../types";

export function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const [mainImage, setMainImage] = useState(product?.mainImage);

  // Efeito para resetar a imagem principal quando o modal abre
  useState(() => {
    if (product) {
      setMainImage(product.mainImage);
    }
  });

  if (!product) return null;

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Fechar modal"
            >
              <X size={20} className="text-gray-700" />
            </button>
            <div className="w-full md:w-1/2 p-4">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                <Image
                  src={mainImage || product.mainImage}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.extraImages.map((img, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-md overflow-hidden cursor-pointer border-2 hover:border-yellow-400 transition-all"
                    onClick={() => setMainImage(img)}
                  >
                    <Image
                      src={img}
                      alt={`Imagem extra ${index + 1}`}
                      fill
                      sizes="10vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {product.name}
              </h2>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-xl text-gray-500 line-through">
                  {product.price}
                </span>
                <span className="text-3xl font-extrabold text-yellow-500">
                  {product.promoPrice}
                </span>
              </div>
              <p className="text-gray-600 mb-8">
                Armação de alta qualidade com design moderno. Leve, resistente e
                confortável para uso diário.
              </p>
              <a
                href="https://oticasvizz.lojavirtualnuvem.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-3 px-6 bg-yellow-400 text-gray-900 font-bold rounded-lg shadow-md hover:bg-yellow-500 transition-all duration-300 hover:scale-105"
              >
                <ShoppingCart size={20} />
                Comprar na Loja Virtual
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
