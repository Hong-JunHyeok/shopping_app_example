import { Box, Button, Container, Typography } from "@mui/material";

const ProductPage = () => {
    return (
        <Container maxWidth="sm">
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <img src="https://www.nintendo.co.kr/hardware/img/01-hero/local-hero__pic_oled.png" alt="상품 이미지" style={{ width: '100%', maxWidth: 400 }} />
            </Box>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
            닌텐도 스위치
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: 4 }}>
            $299
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 4 }}>
            닌텐도 스위치에 대한 상세 설명이 여기에 들어갑니다. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus urna et commodo pellentesque. Sed quis elit tristique, maximus ipsum ac, auctor enim. Nulla facilisi.
            </Typography>
            <Button variant="contained" fullWidth>
            구매하기
            </Button>
        </Container>
    )
};

export default ProductPage;
