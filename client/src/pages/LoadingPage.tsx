import { CircularProgress, Typography } from "@mui/material";

function LoadingPage() {
  return (
    <div>
      <CircularProgress />
      <Typography variant="body1" color="text.secondary">
        Loading...
      </Typography>
    </div>
  );
}

export default LoadingPage;
