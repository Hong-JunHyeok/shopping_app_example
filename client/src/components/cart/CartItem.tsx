// src/components/cart/CartItem.tsx
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Add, Delete, Remove } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

import type { ProductType } from "../../types";
import { API_SERVER_DOMAIN } from "../../constants";

type Props = {
  cart: ProductType;
};

const CartItem = ({ cart }: Props) => {
  return (
    <Card sx={{ display: "flex", marginBottom: 2 }}>
      {cart.thumbnail && (
        <CardMedia
          sx={{ width: 100 }}
          image={`${API_SERVER_DOMAIN}/${cart.thumbnail}`}
          title={cart.name}
        />
      )}
      <CardContent sx={{ width: "100%" }}>
        <Typography variant="h6">{cart.name}</Typography>

        <Typography variant="h6" fontSize={14} color={grey[600]}>
          {cart.price.toLocaleString("KR-ko")}원
        </Typography>

        <Grid container justifyContent="space-between">
          <Grid item>
            <IconButton>
              <Remove />
            </IconButton>
            {0}
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
