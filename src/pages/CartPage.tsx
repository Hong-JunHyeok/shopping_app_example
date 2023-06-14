import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import { CartItem } from "../components/cart";


const CartPage = () => {
    return (
        <Container fixed>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              <Typography 
                variant="h4" 
                sx={{ marginBottom: 2 }}
              >
                장바구니
              </Typography>
              {Array(20).fill(null).map((_, index) => (
                <CartItem key={index} />
              ))}
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant="h4" sx={{ marginBottom: 2 }}>
                결제 정보
              </Typography>
              <Box sx={{ position: 'sticky', top: 20 }}>
                <Card sx={{ padding: 2 }}>
                    <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
                    총 상품 가격: $100
                    </Typography>
                    <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
                    배송비: $10
                    </Typography>
                    <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    총 결제 금액: $110
                    </Typography>
                    <Button variant="contained" fullWidth>
                    결제하기
                    </Button>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
    )
}

export default CartPage;
