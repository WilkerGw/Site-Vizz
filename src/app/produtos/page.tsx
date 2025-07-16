
import { ProductCard } from "../../components/ui/ProductCard";

const mockProducts = [
  {
    id: 1,
    name: "Óculos de Sol Aviador Clássico",
    price: 299.9,
    imageUrl:
      "https://images.unsplash.com/photo-1577803645773-f12455636f2a?q=80&w=800",
  },
  {
    id: 2,
    name: "Armação de Grau Redonda Retrô",
    price: 349.9,
    imageUrl:
      "https://images.unsplash.com/photo-1614715838557-52a353d94295?q=80&w=800",
  },
  {
    id: 3,
    name: "Óculos de Sol Wayfarer Moderno",
    price: 259.5,
    imageUrl:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800",
  },
  {
    id: 4,
    name: "Armação de Grau Gatinho Elegante",
    price: 420.0,
    imageUrl:
      "https://images.unsplash.com/photo-1620138546344-7b2c347e8f23?q=80&w=800",
  },
  {
    id: 5,
    name: "Óculos Esportivo Performance",
    price: 499.0,
    imageUrl:
      "https://images.unsplash.com/photo-1583195614916-f08a1c97a514?q=80&w=800",
  },
  {
    id: 6,
    name: "Armação Quadrada Intelectual",
    price: 380.75,
    imageUrl:
      "https://images.unsplash.com/photo-1605032519565-d57a62c6486c?q=80&w=800",
  },
];

export default function ProdutosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
        Nossos Produtos
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Explore nossa coleção de armações e óculos de sol.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {mockProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={String(product.price)}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}