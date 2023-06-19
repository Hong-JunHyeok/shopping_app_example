import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import products, { deleteById, getById, ProductType } from "../model/products";

const getProductIndexById = (productId: string): number => {
  return products.findIndex((product) => product.id === productId);
};

const raedProductsController = (req: Request, res: Response) =>
  res.json({
    products,
    code: 200,
    message: "상품 조회 성공"
  });

const raedProductController = (req: Request, res: Response) => {
  const { productId } = req.params;
  const existProduct = getById(productId);

  if (!existProduct) {
    return res.json({
      message: "존재하지 않는 상품입니다."
    });
  }

  res.json({
    product: existProduct,
    code: 200,
    message: "상품 조회에 성공하였습니다."
  });
};

const createProductController = async (req: Request, res: Response) => {
  const productMeta = req.body as ProductType;
  const generatedId = uuidv4();

  const newProduct: ProductType = {
    ...productMeta,
    id: generatedId,
  };

  await new Promise<void>((resolve) => setTimeout(resolve, 1000));

  products.push(newProduct);

  return res.json({
    code: 200,
    message: "상품 등록에 성공하였습니다.",
    location: `/product?id=${generatedId}`,
    product: newProduct
  });
};

const updateProductController = (req: Request, res: Response) => {
  const { productId } = req.params;
  const updateProductData = req.body;

  const productIndex = getProductIndexById(productId);

  if (productIndex === -1) {
    return res.json({
      message: "존재하지 않는 상품입니다."
    });
  }

  products[productIndex] = {
    ...products[productIndex],
    ...updateProductData
  };

  return res.json({
    message: "상품 업데이트에 성공하였습니다.",
    location: `/product?id=${productId}`
  });
};

const deleteProductController = async (req: Request, res: Response) => {
  const { productId } = req.params;

  await new Promise<void>((resolve) => setTimeout(resolve, 1000));

  deleteById(productId);

  return res.json({
    code: 200,
    message: "상품이 삭제되었습니다."
  });
};

const updateThumbnailController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { productId } = req.params;

  const productIndex = getProductIndexById(productId);

  if (productIndex === -1) {
    return res.json({
      message: "존재하지 않는 상품입니다."
    });
  }

  products[productIndex] = {
    ...products[productIndex],
    thumbnail: `${req?.file?.path}`
  };

  return res.json({
    code: 201,
    message: "상품 썹네일 업로드 성공",
    product: products[productIndex]
  });
};

export default {
  raedProductsController,
  raedProductController,
  createProductController,
  updateProductController,
  deleteProductController,
  updateThumbnailController
};
