import { Grid } from "@mui/material";
import { ProductItem } from "../components/home";


const HomePage = () => {
    return (
        <>
        <Grid container spacing={3}>
            {Array(20).fill(null).map((_, index) => (
                <ProductItem key={index} />
            ))}
        </Grid>
        </>
    )
}

export default HomePage;
  
