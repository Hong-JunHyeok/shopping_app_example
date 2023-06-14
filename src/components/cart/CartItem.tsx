import { Card, CardContent, CardMedia, Typography } from "@mui/material";

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

export default CartItem;
