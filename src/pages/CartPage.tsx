import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";

const CartItem = () => {
    return (
      <Card sx={{ display: 'flex', marginBottom: 2 }}>
        <CardMedia
          sx={{ width: 100, height: 100, marginRight: 2 }}
          image="https://www.nintendo.co.kr/hardware/img/01-hero/local-hero__pic_oled.png"
          title="Product"
        />
        <CardContent>
          <Typography variant="h6">닌텐도 스위치</Typography>
          <Typography variant="body2" color="text.secondary">
            구매한 상품의 취소/반품은 마이쿠팡 구매내역에서 신청 가능합니다.
          </Typography>
        </CardContent>
      </Card>
    );
};

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
