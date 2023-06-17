import { useNavigate } from "react-router-dom";
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material"

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CssBaseline from '@mui/material/CssBaseline';

type Props = {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    const navigate = useNavigate();

    const handlePushMainPage = () => navigate('/');
    const handlePushCartPage = () => navigate('/cart');

    return (
        <>
            <CssBaseline />
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{mb: 4}}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography 
                        variant="h1" sx={{ fontSize: 26, fontWeight: 'bold', cursor: 'pointer' }}
                        onClick={handlePushMainPage}
                    >
                        온라인 쇼핑몰
                    </Typography>
                    <Button color="inherit" onClick={handlePushCartPage}>
                        <ShoppingCartIcon />
                    </Button>
                </Toolbar>
                </AppBar>

                <Container fixed>
                    {children}
                </Container>
            </Box>
        </>
    )
}

export default Layout;
