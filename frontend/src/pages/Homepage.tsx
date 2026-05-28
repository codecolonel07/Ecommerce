import { useEffect, useState } from "react";

import ProductCard from "../components/common/ProductCard";

import { getAllProducts } from "../service/ProductService";

import type { Product } from "../types/product.type";

const HomePage = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try { setProducts(await getAllProducts()); }
      catch (e) { console.error(e); }
      finally { setLoading(false); }
    })();
  }, []);

  if (loading)
    return (
      <div className="p-10 text-center text-xl">
        Loading products...
      </div>
    );

  return (
    <div className="bg-gray-50 min-h-screen">
      <h1 className="text-7xl bg-red-500 text-white p-10">
  TAILWIND WORKING
</h1>

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex items-center justify-between mb-8">

          <div>
            <h1 className="text-4xl font-bold">
              Explore Products
            </h1>

            <p className="text-gray-500 mt-2">
              Discover latest collections
            </p>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {
          products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>
    </div>
  );
};

export default HomePage;