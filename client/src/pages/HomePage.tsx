import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

import { ProductItem } from "../components/home";
import { ProductType } from "../types";
import { getProducts } from "../utils/apis";


const HomePage = () => {
    const [products, setProducts] = useState<ProductType[]>([]);

    const handleFetchProducts = async () => {
        const { data } = await getProducts();
        setProducts(data.products)
    }

    useEffect(() => {
        handleFetchProducts();
    }, []);

    return (
        <>
            <Grid container spacing={3}>
                {products.map((product) => (
                    <ProductItem 
                        key={product.id} 
                        product={product}
                    />
                ))}
            </Grid>
        </>
    )
}

export default HomePage;
  
