import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/shared';

import { CartPage, PurchasePage, HomePage } from './pages';
import NotFoundPage from './pages/NotFoundPage';
import ProductPage from './pages/ProductPage';

function App() {
 return (
   <Layout>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="product/:productId" element={<ProductPage />}/>
      <Route path="purchase/:productId" element={<PurchasePage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
   </Layout>
 );
}

export default App;
