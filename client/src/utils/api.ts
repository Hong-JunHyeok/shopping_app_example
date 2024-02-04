import axios, { type AxiosResponse } from "axios";

import type { ProductType } from "../types";

type ReturnType<T> = Promise<AxiosResponse<T>>;

export const getProducts = async (): ReturnType<{
  products: ProductType[];
}> => {
  try {
    const response = await axios.get("/product");
    return response;
  } catch (error) {
    throw error;
  }
};

export const getProduct = async (
  id: string
): ReturnType<{ product: ProductType }> => {
  try {
    const response = axios.get(`/product/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const createProduct = async (
  newProduct: Omit<ProductType, "id" | "thumbnail">
): ReturnType<{ product: ProductType }> => {
  try {
    const response = await axios.post("/product", newProduct);
    return response;
  } catch (error) {
    throw error;
  }
};

export const modifyThumbnail = async (
  productId: string,
  thumbnail: File
): ReturnType<{ product: ProductType }> => {
  try {
    const formData = new FormData();
    formData.append("thumbnail", thumbnail);

    const response = axios.patch(`/product/thumbnail/${productId}`, formData);
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const resposne = await axios.delete(`/product/${id}`);
    return resposne;
  } catch (error) {
    throw error;
  }
};

export const modifyProduct = async (updateProduct: ProductType) => {
  try {
    const response = await axios.patch(
      `/product/${updateProduct.id}`,
      updateProduct
    );
    return response;
  } catch (error) {
    throw error;
  }
};
