"use client";

import { useState } from 'react';
import { ProductCard } from '../ui/ProductCard';
import { ProductModal } from '../ui/ProductModal';
import { Product } from '../../types'; // Importando o tipo que criamos

// Dados dos produtos com tipagem
const productsData: Product[] = [
  { name: 'Vizz Clear', mainImage: '/images/grau/CLEAR/clear2.jpg', extraImages: ['/images/grau/CLEAR/clear1.jpg', '/images/grau/CLEAR/clear2.jpg', '/images/grau/CLEAR/clear3.jpg', '/images/grau/CLEAR/clear4.jpg'], price: 'R$ 129,99', promoPrice: 'R$ 99,99', category: 'grau' },
  { name: 'Vizz Clear Grafite', mainImage: '/images/grau/CLEAR-GRAFITE/clear7.jpg', extraImages: ['/images/grau/CLEAR-GRAFITE/clear6.jpg', '/images/grau/CLEAR-GRAFITE/clear7.jpg', '/images/grau/CLEAR-GRAFITE/clear8.jpg', '/images/grau/CLEAR-GRAFITE/clear9.jpg'], price: 'R$ 129,99', promoPrice: 'R$ 99,99', category: 'grau' },
  { name: 'Vizz Pollo', mainImage: '/images/grau/POLLO/pollo5.jpg', extraImages: ['/images/grau/POLLO/pollo1.jpg', '/images/grau/POLLO/pollo2.jpg', '/images/grau/POLLO/pollo3.jpg', '/images/grau/POLLO/pollo4.jpg'], price: 'R$ 129,99', promoPrice: 'R$ 99,99', category: 'grau' },
  { name: 'Vizz Riley', mainImage: '/images/grau/RILEY/riley4.jpg', extraImages: ['/images/grau/RILEY/riley1.jpg', '/images/grau/RILEY/riley2.jpg', '/images/grau/RILEY/riley3.jpg', '/images/grau/RILEY/riley4.jpg'], price: 'R$ 129,99', promoPrice: 'R$ 99,99', category: 'grau' },
  { name: 'Vizz Winter', mainImage: '/images/solar/WINTER/winter2.jpg', extraImages: ['/images/solar/WINTER/winter1.jpg', '/images/solar/WINTER/winter2.jpg', '/images/solar/WINTER/winter3.jpg', '/images/solar/WINTER/winter4.jpg'], price: 'R$ 199,99', promoPrice: 'R$ 149,99', category: 'solar' },
  { name: 'Vizz Seiva', mainImage: '/images/solar/SEIVA/seiva2.jpg', extraImages: ['/images/solar/SEIVA/seiva1.jpg', '/images/solar/SEIVA/seiva2.jpg', '/images/solar/SEIVA/seiva3.jpg', '/images/solar/SEIVA/seiva4.jpg'], price: 'R$ 199,99', promoPrice: 'R$ 149,99', category: 'solar' },
  { name: 'Vizz Swamp', mainImage: '/images/solar/SWAMP/swamp4.jpg', extraImages: ['/images/solar/SWAMP/swamp1.jpg', '/images/solar/SWAMP/swamp2.jpg', '/images/solar/SWAMP/swamp3.jpg', '/images/solar/SWAMP/swamp4.jpg'], price: 'R$ 199,99', promoPrice: 'R$ 149,99', category: 'solar' },
  { name: 'Vizz Osaka', mainImage: '/images/solar/OSAKA/osaka2.png', extraImages: ['/images/solar/OSAKA/osaka1.png', '/images/solar/OSAKA/osaka2.png', '/images/solar/OSAKA/osaka3.png', '/images/solar/OSAKA/osaka4.png'], price: 'R$ 219,99', promoPrice: 'R$ 169,99', category: 'solar' },
];

type FilterType = 'todos' | 'grau' | 'solar';

/**
 * Seção de Produtos em Destaque
 * Exibe uma galeria de produtos com filtros e um modal para visualização de detalhes.
 */
export function FeaturedProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>('todos');

  const filteredProducts = productsData.filter(product => {
    if (activeFilter === 'todos') return true;
    return product.category === activeFilter;
  });

  const getButtonClass = (filter: FilterType) => {
    const baseClass = "px-6 py-2 rounded-full font-semibold transition-all duration-300";
    if (activeFilter === filter) {
      return `${baseClass} bg-yellow-400 text-gray-800 shadow-md`;
    }
    return `${baseClass} bg-white text-gray-600 border border-gray-300 hover:bg-gray-100`;
  };

  return (
    <section id="destaques" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Nossos Destaques
        </h2>
        
        {/* Filtros */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          <button onClick={() => setActiveFilter('todos')} className={getButtonClass('todos')}>
            Todos
          </button>
          <button onClick={() => setActiveFilter('grau')} className={getButtonClass('grau')}>
            Óculos de Grau
          </button>
          <button onClick={() => setActiveFilter('solar')} className={getButtonClass('solar')}>
            Óculos de Sol
          </button>
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={`${product.name}-${index}`}
              name={product.name}
              mainImage={product.mainImage}
              price={product.price}
              promoPrice={product.promoPrice}
              onCardClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
}