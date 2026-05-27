import axiosInstance from "../api/axios";

import type { Product } from "../types/product.type";

export const getAllProducts = async () => {
    console.error("Came in getAllProducts");
  const response = await axiosInstance.get<Product[]>("/products");

  return response.data;
};