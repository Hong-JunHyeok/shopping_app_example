import { 
Box, 
Button, 
ButtonGroup, 
Card, 
CardContent, 
CardMedia, 
Grid, 
Typography 
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductItem = () => {
    const navigate = useNavigate();

    const handlePushCartPage = () => navigate('/cart');
    const handlePushPurchasePage = () => navigate('/purchase')

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, padding: 3 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="https://www.nintendo.co.kr/hardware/img/01-hero/local-hero__pic_oled.png"
                    title="닌텐도 스위치"
                />
                <CardContent sx={{ padding: 0 }}>
                <Typography gutterBottom variant="h5" component="div">
                    닌텐도 스위치
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    구매한 상품의 취소/반품은 마이쿠팡 구매내역에서 신청 가능합니다.
                </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 3 }}>
                <ButtonGroup variant="contained">
                    <Button size="small" onClick={handlePushPurchasePage}>구매하기</Button>
                    <Button size="small" onClick={handlePushCartPage} variant="outlined">장바구니</Button>
                </ButtonGroup>
                </Box>
            </Card>
        </Grid>
    )
}

const HomePage = () => {
    return (
        <>
        <Grid container spacing={3}>
            {Array(20).fill(null).map((_, index) => (
                <ProductItem key={index} />
            ))}
        </Grid>
        </>
    )
}

export default HomePage;
  
  
  