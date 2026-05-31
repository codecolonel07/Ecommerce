import type { Product } from "../../types/product.type";
import { useNavigate } from "react-router-dom";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="rounded-2xl overflow-hidden border hover:shadow-2xl hover:-translate-y-1 transition duration-300 bg-white">

      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
      />

      <h2 className="text-xl font-bold mt-4">
        {product.title}
      </h2>

      <p className="text-gray-600 mt-2">
        {product.description}
      </p>

      <p className="text-lg font-semibold mt-3">
        ₹ {product.price}
      </p>

      <button onClick={() => navigate(`/products/${product.id}`)}
      className="bg-black text-white px-4 py-2 rounded-lg">
        View
        </button>

    </div>
  );
};

export default ProductCard;