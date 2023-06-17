import { Box, Button, ButtonGroup, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../hooks";
import { ProductType } from "../types";
import { getProduct } from "../utils/apis";
import createImageURL from "../utils/createImageURL";

type ParamsType = {
    productId: string;
}

const ProductPage = () => {
    const params = useParams<ParamsType>();
    const navigate = useNavigate();
    const { addCarts } = useCart();
    
    const [product, setProduct] = useState<ProductType | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => setIsModalOpen(false);
    const handleOpenModal = () => setIsModalOpen(true);

    const handleFetchProduct = async () => {
        if (params.productId) {
            const { data } = await getProduct(params.productId);
            setProduct(data.product);
        }
    }

    const handleAddCard = () => {
        if (params.productId) {
            addCarts(params.productId);
            handleOpenModal();
        }
    }

    const handlePushPurchasePage = () => {
        if (params.productId) {
            navigate(`/purchase/${params.productId}`)
        }
    }

    const handlePushCartPage = () => {
        navigate(`/cart`)
    }

    useEffect(() => {
        handleFetchProduct();
    }, []);

    if (!params.productId) {
        return <>잘못된 페이지 ㅅㄱ</>
    }

    return (
        <>
            <Container maxWidth="sm">
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                {product?.thumbnail && (
                    <img 
                        src={createImageURL(product?.thumbnail)}
                        alt={product?.name} 
                        style={{ width: '100%', maxWidth: 400 }} 
                    />
                )}
                </Box>
                <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
                    {product?.name}
                </Typography>
                <Typography variant="h6" sx={{ marginBottom: 4 }}>
                    {product?.price.toLocaleString('KO-kr')}원
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
                open={isModalOpen}
                onClose={handleCloseModal}
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
                    <Button onClick={handleCloseModal}>
                        아니요
                    </Button>
                    <Button onClick={handlePushCartPage} autoFocus>
                        네
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
};

export default ProductPage;
