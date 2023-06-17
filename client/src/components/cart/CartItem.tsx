import { Card, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import { Add, Delete, Remove } from "@mui/icons-material";

import type { ProductType } from "../../types";
import { useCart } from "../../hooks";


type Props = {
  cart: ProductType & { count: number }
}

const CartItem = ({ cart }: Props) => {
  const { changeCount } = useCart();
  const handleIncreaseCount = () => changeCount(cart.id, 'increase');
  const handleDecreaseCount = () => changeCount(cart.id, 'decrease');

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
            <IconButton onClick={handleDecreaseCount}>
              <Remove/>
            </IconButton>
            {cart.count}
            <IconButton onClick={handleIncreaseCount}>
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
