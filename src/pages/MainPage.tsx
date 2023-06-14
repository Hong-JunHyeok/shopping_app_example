import { 
AppBar, 
Box, 
Button, 
ButtonGroup, 
Card, 
CardContent, 
CardMedia, 
Container, 
Grid, 
Toolbar, 
Typography 
} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CssBaseline from '@mui/material/CssBaseline';

const ProductItem = () => {
    return (
        <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 345, padding: 3 }}>
            <CardMedia
            sx={{ height: 140 }}
            image="https://www.nintendo.co.kr/hardware/img/01-hero/local-hero__pic_oled.png"
            title="green iguana"
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
                <Button size="small">구매하기</Button>
                <Button size="small" variant="outlined">장바구니</Button>
            </ButtonGroup>
            </Box>
        </Card>
        </Grid>
    )
}

const MainPage = () => {
    return (
        <>
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{mb: 4}}>
            <Toolbar>
                <Typography variant="h1" sx={{ flexGrow: 1, fontSize: 26, fontWeight: 'bold' }}>
                온라인 쇼핑몰
                </Typography>
                <Button color="inherit">
                <ShoppingCartIcon />
                </Button>
            </Toolbar>
            </AppBar>

            <Container fixed>
            <Grid container spacing={3}>
                {Array(20).fill(null).map((_, index) => (
                    <ProductItem key={index} />
                ))}
            </Grid>
            </Container>
        </Box>
        </>
    )
}

export default MainPage;
  
  
  