import { v4 as uuidv4 } from 'uuid';

export interface ProductType {
    id: string;
    name: string;
    thumbnail: string;
    explanation: string;
    price: number;
    discount?: number;
}

const products: ProductType[] = [
  {
    id: "9e31dbd9-b871-43ef-ad5d-80411c4eaa48",
    name: 'Iphone 13 Max',
    explanation: `디스플레이는 6.1인치 19.5:9 비율의 2532×1170 
    해상도를 지원하며 패널 형식은 AMOLED 방식의 Super Retina XDR 디스플레이이다. 
    인치당 픽셀 수는 460 ppi이다. 120Hz의 터치 샘플링 레이트를 제공하고 명암비는 2,000,000:1이다`,
    price: 1230000,
    thumbnail: 'https://img.etnews.com/news/article/2021/08/30/cms_temp_article_30102128407144.jpg',
  },
];

export const getById = (id: string) => {
  const productIndex = products.findIndex((product) => product.id === id);

  if (products[productIndex]) {
    return products[productIndex];
  }

  return null;
};

export const deleteById = (id: string) => {
  const productIndex = products.findIndex((product) => product.id === id);

  products.splice(productIndex, 1);
};

export default products;
