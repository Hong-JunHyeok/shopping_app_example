import { Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { PurchaseForm } from "../components/purchase";

const PurchasePage = () => {
    return (
        <Container maxWidth="sm">
        <Typography variant="h4" sx={{ marginBottom: 4 }}>
          구매하기
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card sx={{ display: 'flex', marginBottom: 2 }}>
                <CardMedia
                    sx={{ width: 100, height: 100, marginRight: 2 }}
                    image="https://www.nintendo.co.kr/hardware/img/01-hero/local-hero__pic_oled.png"
                    title="Product"
                />
                <CardContent>
                <Typography variant="h6">닌텐도 스위치</Typography>
                </CardContent>
            </Card>
          </Grid>
          
          <PurchaseForm />          
        </Grid>
      </Container>
    )
}

export default PurchasePage;
