import { Card, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import { Add, Delete, Remove } from "@mui/icons-material";

import type { ProductType } from "../../types";


type Props = {
  cart: ProductType & { count: number }
}

const CartItem = ({ cart }: Props) => {
  return (
    <Card sx={{ display: 'flex', marginBottom: 2 }}>
      {cart.thumbnail && (
        <CardMedia
          sx={{ width: 100 }}
          image={cart.thumbnail}
          title={cart.name}
        />
      )}
      <CardContent sx={{ width: '100%' }}>
        <Typography variant="h6">{cart.name}</Typography>
        <Grid 
          container
          justifyContent='space-between'
        >
          <Grid item>
            <IconButton>
              <Remove />
            </IconButton>
            {cart.count}
            <IconButton>
              <Add />
            </IconButton>
          </Grid>

          <Grid item>
            <IconButton>
              <Delete />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default CartItem;
