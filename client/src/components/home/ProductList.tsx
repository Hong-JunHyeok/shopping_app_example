// ProductList.tsx
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { ProductItem } from ".";
import { ProductType } from "../../types";

const ProductList = () => {
 const [products, setProducts] = useState<ProductType[]>([]);
 const [isLoading, setIsLoading] = useState(false);

 const handleDelete = (id: string) => {
   fetch(`/product/${id}`, {
     method: "DELETE",
   }).then((response) => {
     if (response.ok) {
       setProducts(products.filter((product) => product.id !== id));
     }
   });
 };

 const handleUpdate = (updateProduct: ProductType) => {
   fetch(`/product/${updateProduct.id}`, {
     method: "PATCH",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(updateProduct),
   }).then((response) => {
     if (response.ok) {
       setProducts(
         products.map((product) =>
           product.id === updateProduct.id ? updateProduct : product
         )
       );
     }
   });
 };

 useEffect(() => {
  setIsLoading(true);

  fetch("/product")
    .then((response) => response.json())
    .then((data) => setProducts(data.products))
    .finally(() => setIsLoading(false))
 }, []);

 if (isLoading) return <CircularProgress />;

 return (
   <ul>
     {products.map((product) => (
       <ProductItem
         product={product}
         onDelete={handleDelete}
         onUpdate={handleUpdate}
       />
     ))}
   </ul>
 );
};

export default ProductList;
