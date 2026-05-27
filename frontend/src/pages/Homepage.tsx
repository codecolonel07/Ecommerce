import { useEffect, useState } from "react";
import ProductCard from "../components/common/ProductCard";
import { getAllProducts } from "../service/ProductService";
import type { Product } from "../types/product.type.ts";

const HomePage = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] =useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">

      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default HomePage;