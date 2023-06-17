import { Box, Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductType } from "../types";
import { getProduct } from "../utils/apis";

type ParamsType = {
    productId: string;
}

const ProductPage = () => {
    const params = useParams<ParamsType>();
    const [product, setProduct] = useState<ProductType | null>(null);

    const handleFetchProduct = async () => {
        if (params.productId) {
            const { data } = await getProduct(params.productId);
            setProduct(data.product);
        }
    }

    useEffect(() => {
        handleFetchProduct();
    }, []);

    if (!params.productId) {
        return <>잘못된 페이지 ㅅㄱ</>
    }

    return (
        <Container maxWidth="sm">
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            {product?.thumbnail && (
                <img 
                    src={product?.thumbnail} 
                    alt={product?.name} 
                    style={{ width: '100%', maxWidth: 400 }} 
                />
            )}
            </Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                {product?.name}
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: 4 }}>
                {product?.price}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 4 }}>
                {product?.explanation}
            </Typography>

            <Button 
                variant="contained" 
                fullWidth
            >
                구매하기
            </Button>
        </Container>
    )
};

export default ProductPage;
