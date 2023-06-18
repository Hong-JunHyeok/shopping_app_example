import { Button, CardMedia, Grid, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useMemo, useRef } from "react";

type ThumbnailUploaderProps = {
  value: File | null;
  onChange: (file: File | null) => void;
};

const ThumbnailUploader = ({
  value,
  onChange,
}: ThumbnailUploaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    onChange(file || null);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const tempImageURL = useMemo(() => {
    if (value) {
      return URL.createObjectURL(value);
    }
  }, [value]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">상품 이미지</Typography>
      </Grid>
      <Grid item xs={12}>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          id="thumbnail-upload-input"
          style={{ display: "none" }}
        />
        <label htmlFor="thumbnail-upload-input">
          <CardMedia
            sx={{
              height: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#e0e0e0",
              overflow: "hidden",
            }}
            image={tempImageURL}
          >
            {value ? null : (
              <Typography variant="caption" color="text.secondary">
                상품 이미지 없음
              </Typography>
            )}
          </CardMedia>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<CloudUploadIcon />}
            onClick={handleClick}
          >
            이미지 선택
          </Button>
        </label>
      </Grid>
    </Grid>
  );
};

export default ThumbnailUploader;
