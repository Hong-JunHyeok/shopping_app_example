// ** API를 연동하여서 더이상 사용되지 않는 파일입니다 **
// ProductContext.tsx
import { createContext, useContext, useState } from "react";

interface ProductType {
  id: number;
  name: string;
  explanation: string;
  price: number;
}

type ProductContextType = [
  ProductType[],
  React.Dispatch<React.SetStateAction<ProductType[]>>
];

// Context
const ProductContext = createContext<ProductContextType | null>(null);

const initialValue: ProductType[] = [
  {
    id: 0,
    name: "Iphone 13 Max",
    explanation: `디스플레이는 6.1인치 19.5:9 비율의 2532×1170
       해상도를 지원하며 패널 형식은 AMOLED 방식의 Super Retina XDR 디스플레이이다.
       인치당 픽셀 수는 460 ppi이다. 120Hz의 터치 샘플링 레이트를 제공하고 명암비는 2,000,000:1이다`,
    price: 1230000,
  },
];

// Provider
export function ProductProvider({ children }: { children: React.ReactNode }) {
  const productState = useState<ProductType[]>(initialValue);

  return (
    <ProductContext.Provider value={productState}>
      {children}
    </ProductContext.Provider>
  );
}

// Consumer
export function useProductContext() {
  return useContext(ProductContext) as ProductContextType;
}
