// ProductList.tsx
import { CircularProgress, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { ProductItem } from ".";
import { ProductType } from "../../types";

const ProductList = () => {
 const [products, setProducts] = useState<ProductType[]>([]);
 const [isLoading, setIsLoading] = useState(false);

 useEffect(() => {
  setIsLoading(true);

  fetch("/product")
    .then((response) => response.json())
    .then((data) => setProducts(data.products))
    .finally(() => setIsLoading(false))
 }, []);

 if (isLoading) return <CircularProgress />;

 return (
    <Grid container spacing={3}>
      {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
          />
      ))}
    </Grid>
 );
};

export default ProductList;
