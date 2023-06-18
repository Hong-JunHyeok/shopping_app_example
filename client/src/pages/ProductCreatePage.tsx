import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from "@mui/material";

import { ThumbnailUploader } from "../components/create";
import { createProduct, modifyThumbnail } from "../utils/apis";


const ProductCreatePage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [explanation, setExplanation] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createdProductId, setCreatedProductId] = useState("");
  const [nameError, setNameError] = useState("");
  const [explanationError, setExplanationError] = useState("");
  const [priceError, setPriceError] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setNameError("");
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
    setPriceError("");
  };

  const handleExplanationChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setExplanation(event.target.value);
    setExplanationError("");
  };

  const handleClearThumbnail = () => {
    setThumbnail(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate(`/product/${createdProductId}`);
  };

  const handleCreateProduct = async (event: React.FormEvent) => {
    event.preventDefault();

    let isValid = true;

    if (name.length < 2 || name.length > 10) {
      setNameError("상품 이름은 최소 2자 이상, 최대 10자 이하여야 합니다.");
      isValid = false;
    }

    if (explanation.length < 1 || explanation.length > 100) {
      setExplanationError("상품 설명은 최소 1자 이상, 최대 100자까지 입력할 수 있습니다.");
      isValid = false;
    }

    if (price <= 0) {
      setPriceError("가격은 0보다 큰 값이어야 합니다.");
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    const { data: { product } } = await createProduct({
      name,
      explanation,
      price,
    });

    if (thumbnail) {
      await modifyThumbnail(product.id, thumbnail);
    }

    setCreatedProductId(product.id);
    setIsModalOpen(true);
  };

  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          상품 생성
        </Typography>
        <form onSubmit={handleCreateProduct}>
          <TextField
            label="상품 이름"
            fullWidth
            value={name}
            onChange={handleNameChange}
            margin="normal"
            error={!!nameError}
            helperText={nameError}
          />
          <TextField
            label="가격"
            type="number"
            fullWidth
            value={price}
            onChange={handlePriceChange}
            margin="normal"
            error={!!priceError}
            helperText={priceError}
          />
          <TextField
            label="상품 설명"
            fullWidth
            multiline
            rows={4}
            value={explanation}
            onChange={handleExplanationChange}
            margin="normal"
            error={!!explanationError}
            helperText={explanationError}
          />
          <ThumbnailUploader
            value={thumbnail}
            onChange={(file) => setThumbnail(file)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{
            marginTop: 6
          }}>
            생성
          </Button>
        </form>
      </Container>

      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle>상품을 성공적으로 추가하였습니다.</DialogTitle>
        <DialogContent>
          <DialogContentText>상품 페이지로 이동합니다.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} autoFocus>
            네
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProductCreatePage;
