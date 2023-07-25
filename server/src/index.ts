import express from 'express';
import { config } from 'dotenv';
import fs from 'fs';

import productRouter from './routes/product';
import searchRouter from './routes/search';

config();

const PORT = 3090 as const;

if (!fs.existsSync('thumbnails')) {
  console.log('thumbnails 폴더가 없으므로 만듭니다...');
  fs.mkdirSync('thumbnails');
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/thumbnails', express.static('thumbnails'));

app.get('/', (req, res) => {
  res.send('Shopping App API server');
});
app.use('/product', productRouter);
app.use('/search', searchRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`Server is running at http://localhost:${PORT}`);
});
