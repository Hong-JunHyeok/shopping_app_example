// ProductPage.tsx
import { Delete, Edit } from "@mui/icons-material";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import { ProductType } from "../types";


function ProductPage() {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [cookies, setCookies] = useCookies(['shopping_basket']);

  const shoppingBasketItems = cookies.shopping_basket as ProductType[];

  const handlePushPurchasePage = () => {
    if (productId) {
        navigate(`/purchase/${productId}`)
    }
  }

  const handleShoppingBasketAdd = () => {
    const nextValue = shoppingBasketItems ? [...shoppingBasketItems, product] : [product];

    setCookies('shopping_basket', nextValue, { path: '/' });
  }

  useEffect(() => {
    fetch(`/product/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data.product));
  }, [productId]);

  if (!product) {
    return <h1>찾으시는 상품이 없습니다.</h1>;
  }

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
      {product?.thumbnail && (
          <img
              src={product?.thumbnail}
              alt={product?.name}
              style={{ width: '100%', maxWidth: 400 }}
          />
      )}
      </Box>
      <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 2
      }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              {product?.name}
          </Typography>
          <ButtonGroup orientation="horizontal">
              <Button
                  variant="text"
                  onClick={() => null}
                  color="error"
              >
                  <Delete />
              </Button>
              <Button
                  variant="text"
                  onClick={() => null}
                  color="info"
              >
                  <Edit />
              </Button>
          </ButtonGroup>
      </Box>
      <Typography variant="h6" sx={{ marginBottom: 4 }}>
          {product?.price.toLocaleString('KO-kr')}원
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 }}>
          {product?.explanation}
      </Typography>

      <ButtonGroup orientation="vertical" fullWidth>
          <Button variant="outlined" onClick={handleShoppingBasketAdd}>
              장바구니 담기
          </Button>
          <Button variant="contained" onClick={handlePushPurchasePage}>
              구매하기
          </Button>
      </ButtonGroup>
  </>
  );
}

export default ProductPage;
