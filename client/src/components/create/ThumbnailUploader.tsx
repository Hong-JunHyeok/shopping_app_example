import { Button, Card, CardMedia } from "@mui/material";
import { ChangeEvent, useRef } from "react";

type Props = {
  value: File | null;
  onChange: (value: File | null) => void;
};

const ThumbnailUploader = ({ value, onChange }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) onChange(event.target.files[0]);
  };

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <>
      <input
        type="file"
        multiple={false}
        onChange={handleChangeInput}
        hidden
        ref={inputRef}
      />
      <Card
        sx={{
          padding: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {value && (
          <CardMedia
            component="img"
            alt={value.name}
            height={200}
            sx={{
              objectFit: "contain",
              marginBottom: 2,
            }}
            src={URL.createObjectURL(value)}
          />
        )}
        <Button variant="contained" onClick={handleButtonClick}>
          썸네일 업로드
        </Button>
      </Card>
    </>
  );
};

export default ThumbnailUploader;
