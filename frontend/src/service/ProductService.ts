import axiosInstance from "../api/axios";

import type { Product } from "../types/product.type";

export const getAllProducts = async () => {
  const res = await axiosInstance.get<Product[]>("/products");
  return res.data;
};

export const getProductById = async (id: number) => {
  const res = await axiosInstance.get<Product>(`/products/${id}`);
  return res.data;
};