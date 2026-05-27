import type { Product } from "../../types/product.type";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {

  return (
    <div className="shadow-lg rounded-xl p-4">

      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-52 object-cover rounded-lg"
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

    </div>
  );
};

export default ProductCard;