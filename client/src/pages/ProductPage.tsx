// ProductPage.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type ProductType = {
  id: string;
  name: string;
  explanation: string;
  price: number;
};

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    fetch(`/product/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data.product));
  }, [productId]);

  if (!product) {
    return <h1>존재하지 않는 상품입니다.</h1>;
  }

  return (
    <div>
      <h1>{product?.name}</h1>
      <span>{product?.price}</span>
      <p>{product?.explanation}</p>
    </div>
  );
};

export default ProductPage;
