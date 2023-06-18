import { useState } from "react";
import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from "@mui/material";
import { ThumbnailUploader } from "../components/create";
import { createProduct, modifyThumbnail } from "../utils/apis";
import { useNavigate } from "react-router-dom";


const ProductCreatePage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [explanation, setExplanation] = useState("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createdProductId, setCreatedProductId] = useState("");

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event: any) => {
    setPrice(event.target.value);
  };

  const handleExplanationChange = (event: any) => {
    setExplanation(event.target.value);
  };

  const handleClearThumbnail = () => {
    setThumbnail(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate(`/product/${createdProductId}`);
  }

  const handleCreateProduct = async (event: React.FormEvent) => {
    event.preventDefault();
    const { data: { product } } = await createProduct({
      name,
      explanation,
      price,
    })

    if (thumbnail) {
      await modifyThumbnail(product.id, thumbnail);
    }

    setCreatedProductId(product.id);
    setIsModalOpen(true);
  };

  return (
    <>
        <Container maxWidth="sm">
        <Typography 
            variant="h4" 
            align="center" 
            gutterBottom
        >
            상품 생성
        </Typography>
        <form onSubmit={handleCreateProduct}>
            <TextField
                label="상품 이름"
                fullWidth
                value={name}
                onChange={handleNameChange}
                margin="normal"
            />
            <TextField
                label="가격"
                type="number"
                fullWidth
                value={price}
                onChange={handlePriceChange}
                margin="normal"
            />
            <TextField
                label="상품 설명"
                fullWidth
                multiline
                rows={4}
                value={explanation}
                onChange={handleExplanationChange}
                margin="normal"
            />
            <ThumbnailUploader 
                value={thumbnail}
                onChange={(file) => setThumbnail(file)}
                onClickThumbnail={handleClearThumbnail}
                onUpload={() => console.log("성공")}
                onError={() => console.error("에러")}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
            >
                생성
            </Button>
        </form>
        </Container>

        <Dialog
          open={isModalOpen}
          onClose={handleCloseModal}
        >
          <DialogTitle>
              상품을 성공적으로 추가하였습니다.
          </DialogTitle>
          <DialogContent>
              <DialogContentText>
                  상품 페이지로 이동합니다.
              </DialogContentText>
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
