import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { PurchaseForm } from "../components/purchase";

import type { ProductType } from "../types";
import { getProduct } from "../utils/api";
import { API_SERVER_DOMAIN } from "../constants";

type ParamsType = {
  productId: string;
};

const PurchasePage = () => {
  const { productId } = useParams<ParamsType>();
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    if (productId) {
      getProduct(productId).then((response) =>
        setProduct(response.data.product)
      );
    }
  }, [productId]);

  if (!product) {
    return <h1>찾으시는 상품이 없습니다.</h1>;
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={{ marginBottom: 4 }}>
        구매하기
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ display: "flex", marginBottom: 2 }}>
            {product?.thumbnail && (
              <CardMedia
                sx={{ width: 100, height: 100, marginRight: 2 }}
                image={`${API_SERVER_DOMAIN}/${product?.thumbnail}`}
                title="Product"
              />
            )}
            <CardContent>
              <Typography variant="h6">{product?.name}</Typography>
            </CardContent>
          </Card>
          <PurchaseForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PurchasePage;
