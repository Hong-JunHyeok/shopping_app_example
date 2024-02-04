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
    id: "de8a0304-ea0a-42f5-b908-986869a49e6d",
    name: "스타벅스 기프티콘",
    explanation:
      "교환유효기간은 93일 입니다. (시즌성 상품, 기업경품(B2B), 할인상품의 경우 유효기간이 상이 할 수 있습니다.)",
    price: 10000,
    thumbnail: "thumbnails/1687084981889-56574460.jpeg",
  },
  {
    id: "0200a6e6-4ee8-4463-a7a4-91539a9834e2",
    name: "젤다의 전설",
    explanation:
      "교환/반품 안내\nㆍ교환/반품에 관한 일반적인 사항은 판매자가 제시사항보다 관계법령이 우선합니다.",
    price: 74800,
    thumbnail: "thumbnails/1687085300556-748499999.jpeg",
  },
  {
    id: "83a7e17f-637c-447b-a89b-cb0c8edc932a",
    name: "Nintendo 닌텐도 스위치 OLED",
    explanation: "풍부한 OLED 색감과 커진 화면으로 휴대시 향상된 게임 환경",
    price: 373500,
    thumbnail: "thumbnails/1687085429089-174930884.jpeg",
  },
  {
    id: "032a8cfb-05f2-421d-a418-ed6e2b0d0522",
    name: "PS5 디지털 에디션 ",
    explanation:
      "PS5 / 본체 / 지원해상도: 4K / 기본 저장용량: 825GB / GPU:10.28 TFLOPS, AMD 라데온 / GDDR6(16G) / 825GB NVME 커스텀 SSD / 4K UHD 블루레이 / 듀얼센스 패드포함 / ※ 22년 8월 25일부로 권장 소비자 가격 인상 628,000원→688,000원 / 출시가: 628,000원",
    price: 529540,
    thumbnail: "thumbnails/1687085655921-835615668.jpeg",
  },
  {
    id: "a404f88f-f7be-4000-911e-23ffcad7ffb5",
    name: "Good Luck To You, Girl Scout!",
    explanation:
      "안녕하세요 대한민국, 검정치마가 선사하는...\n‘Good Luck To You, Girl Scout!’\n",
    price: 11900,
    thumbnail: "thumbnails/1687085809154-566548873.jpeg",
  },
  {
    id: "c1a5f6e5-1e3f-4d7c-aef8-ac47bc82b2ff",
    name: "난 자꾸 말을 더듬고 잠드는 법도 잊었네 ",
    explanation: "Cat.No HRC1060\nDisc 1장\n250g",
    price: 14900,
    thumbnail: "thumbnails/1687085973557-720290342.jpeg",
  },
  {
    id: "f4bf010c-1310-4f2c-87b2-ce3a1b08f067",
    name: "201 Special Edition [재발매]",
    explanation: "YGK0672 (Cat.No)Disc : 1장250g",
    price: 13100,
    thumbnail: "thumbnails/1687086050951-583445112.jpeg",
  },
  {
    id: "8a8a1b2b-200a-44cb-9c60-9375d82dd8bb",
    name: "Unlock My World",
    explanation: "fromis_9 1st Full Album 'Unlock My World'",
    price: 19300,
    thumbnail: "thumbnails/1687086233462-768920531.jpeg",
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
