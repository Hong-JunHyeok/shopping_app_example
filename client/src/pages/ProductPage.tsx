import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import { useCart } from "../hooks";
import { deleteProduct, getProduct } from "../utils/api";
import useAsync from "../hooks/useAsync";
import { NotFoundPage } from ".";
import { API_SERVER_DOMAIN } from "../constants";

const ProductPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();
  const { addCarts } = useCart();

  const { loading: getProductLoading, data } = useAsync(() =>
    getProduct(productId!)
  );

  const { request: deleteProductRequest, loading: deleteProductLoading } =
    useAsync(() => deleteProduct(productId!), {
      initialRequest: false,
    });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const handleAddCard = () => {
    if (product) {
      addCarts(product.id);
      setIsModalOpen(true);
    }
  };

  const handlePushPurchasePage = () => {
    if (productId) {
      navigate(`/purchase/${productId}`);
    }
  };

  const handlePushHomePage = () => {
    navigate(`/`);
  };

  const handlePushCartPage = () => {
    navigate(`/cart`);
  };

  const handleDeleteProduct = async () => {
    setIsDeleteModal(false);
    await deleteProductRequest();
    handlePushHomePage();
  };

  if (!productId || !data) return <NotFoundPage />;
  if (getProductLoading || deleteProductLoading) return <CircularProgress />;

  const product = data.data.product;

  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          {product?.thumbnail && (
            <img
              src={`${API_SERVER_DOMAIN}/${product.thumbnail}`}
              alt={product?.name}
              style={{ width: "100%", maxWidth: 400 }}
            />
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 2,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {product?.name}
          </Typography>
          <ButtonGroup orientation="horizontal">
            <Button
              variant="text"
              onClick={() => setIsDeleteModal(true)}
              color="error"
            >
              <Delete />
            </Button>
            <Button
              variant="text"
              // onClick={handlePushPurchasePage}
              color="info"
            >
              <Edit />
            </Button>
          </ButtonGroup>
        </Box>
        <Typography variant="h6" sx={{ marginBottom: 4 }}>
          {product?.price.toLocaleString("KO-kr")}원
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 4 }}>
          {product?.explanation}
        </Typography>

        <ButtonGroup orientation="vertical" fullWidth>
          <Button variant="outlined" onClick={handleAddCard}>
            장바구니 담기
          </Button>
          <Button variant="contained" onClick={handlePushPurchasePage}>
            구매하기
          </Button>
        </ButtonGroup>
      </Container>

      <Dialog
        open={isDeleteModal}
        onClose={() => setIsDeleteModal(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          상품을 정말로 삭제하시겠습니까?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>이 작업은 되돌릴 수 없습니다.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDeleteModal(false)}>아니요</Button>
          <Button autoFocus onClick={handleDeleteProduct}>
            네
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          장바구니에 성공적으로 추가하였습니다.
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            장바구니 페이지로 이동하시겠습니까?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsModalOpen(false)}>아니요</Button>
          <Button onClick={handlePushCartPage} autoFocus>
            네
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProductPage;
