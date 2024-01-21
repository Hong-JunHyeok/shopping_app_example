// ProductCreateForm.tsx
import { useState } from "react";
import { ProductType } from "../../types";

const ProductCreateForm = () => {
  const [name, setName] = useState("");
  const [explanation, setExplanation] = useState("");
  const [price, setPrice] = useState(0);

  const handleCreate = (newProduct: Omit<ProductType, "id">) => {
    fetch("/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleCreate({
          name,
          explanation,
          price,
        });
      }}
    >
      <input
        onChange={(event) => setName(event.target.value)}
        type="text"
        placeholder="상품의 이름"
      />
      <input
        onChange={(event) => setExplanation(event.target.value)}
        type="text"
        placeholder="상품 설명"
      />
      <input
        onChange={(event) => setPrice(parseInt(event.target.value, 10))}
        type="number"
        placeholder="상품 가격"
      />
      <input type="submit" value="상품 만들기" />
    </form>
  );
};

export default ProductCreateForm;
