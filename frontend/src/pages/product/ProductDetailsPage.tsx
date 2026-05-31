import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProductById } from "../../service/ProductService";

import type { Product } from "../../types/product.type";
import { useNavigate } from "react-router-dom";

const ProductDetailsPage = () => {

  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        if (id) setProduct(await getProductById(Number(id)));
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading)
    return <div className="p-10">Loading...</div>;

  if (!product)
    return <div className="p-10">Product not found</div>;

  return (
    <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-2 gap-10">
        <button onClick={() => navigate(-1)} className="mb-6 text-gray-600">
            ← Back
            </button>
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full rounded-2xl shadow-lg"
      />

      <div>

        <h1 className="text-4xl font-bold">
          {product.title}
        </h1>

        <p className="text-gray-500 mt-4 leading-7">
          {product.description}
        </p>

        <p className="text-3xl font-bold mt-6">
          ₹ {product.price}
        </p>

        <button className="mt-8 bg-black text-white px-6 py-3 rounded-xl hover:opacity-90">
          Add To Cart
        </button>

      </div>
    </div>
  );
};

export default ProductDetailsPage;