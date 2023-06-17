import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardContent, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ErrorPageProps {
  error: Error;
  resetErrorBoundary: () => void;
}

function ErrorPage({ error, resetErrorBoundary }: ErrorPageProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          죄송합니다! 잠시 서비스에 장애가 발생하였습니다.
        </Typography>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            에러 원인 살펴보기
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {error.message}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Button 
          onClick={resetErrorBoundary}
          variant="contained"
          sx={{ marginTop: 6 }}
        >
          다시 시도하기
        </Button>
      </CardContent>
    </Card>
  );
}

export default ErrorPage;
