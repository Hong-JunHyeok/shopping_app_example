import { Button, Grid, TextField } from "@mui/material";

const PurchaseForm = () => {
    return (
      <form>
        <Grid container spacing={2}>
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
            <Button type="submit" variant="contained" fullWidth>
              구매 완료
            </Button>
          </Grid>
        </Grid>
      </form>
    );
};

export default PurchaseForm;
