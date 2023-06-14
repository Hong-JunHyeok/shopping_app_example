import { Button, Card, CardContent, CardMedia, Container, Grid, TextField, Typography } from "@mui/material";

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
          <Grid item xs={12}>
            <TextField label="이름" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="이메일" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="배송 주소" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="결제 정보" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" fullWidth>
              구매 완료
            </Button>
          </Grid>
        </Grid>
      </Container>
    )
}

export default PurchasePage;
