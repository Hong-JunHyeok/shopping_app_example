// src/pages/NotFoundPage.tsx
import { Box, Typography } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      flexDirection="column"
    >
      <Typography variant="h4" marginBottom={2}>
        페이지를 찾을 수 없습니다.
      </Typography>
    </Box>
  );
};

export default NotFoundPage;
