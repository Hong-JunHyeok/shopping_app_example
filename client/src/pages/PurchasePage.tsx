import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { PurchaseForm } from "../components/purchase";
import type { ProductType } from '../types';
import { getProduct } from '../utils/apis';
import createImageURL from '../utils/createImageURL';

type ParamsType = {
  productId: string;
}

const PurchasePage = () => {
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
    //NOTE: 해당 라인에 대한 설명 필요
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!params.productId) {
      return <>잘못된 페이지 ㅅㄱ</>
  }


  return (
      <Container maxWidth="sm">
      <Typography variant="h4" sx={{ marginBottom: 4 }}>
        구매하기
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ display: 'flex', marginBottom: 2 }}>
            {product?.thumbnail && (
              <CardMedia
                sx={{ width: 100, height: 100, marginRight: 2 }}
                image={createImageURL(product?.thumbnail)}
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
  )
}

export default PurchasePage;
