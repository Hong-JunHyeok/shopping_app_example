import { Button, CardMedia, Grid, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useMemo } from "react";

type ThumbnailUploaderProps = {
  value: File | null;
  onChange: (file: File | null) => void;
  onClickThumbnail: () => void;
  onUpload: () => void;
  onError: () => void;
};

const ThumbnailUploader = ({
  value,
  onChange,
  onClickThumbnail,
  onUpload,
  onError,
}: ThumbnailUploaderProps) => {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    onChange(file || null);
  };

  const tempImageURL = useMemo(() => {
    if (value) {
      return URL.createObjectURL(value)
    }
  }, [value]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">이미지 업로더</Typography>
      </Grid>
      <Grid item xs={12}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          id="thumbnail-upload-input"
          style={{ display: "none" }}
        />
        <label htmlFor="thumbnail-upload-input">
          <Button
            variant="contained"
            component="span"
            startIcon={<CloudUploadIcon />}
          >
            이미지 선택
          </Button>
        </label>
      </Grid>
      <Grid item xs={12}>
        {value && (
          <CardMedia 
            sx={{
              width: '200px',
              height: '200px'
            }}
            image={tempImageURL}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default ThumbnailUploader;
