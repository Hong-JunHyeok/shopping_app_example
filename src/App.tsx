import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/shared';

import { CartPage, PurchasePage, HomePage } from './pages';
import ProductPage from './pages/ProductPage';

function App() {
 return (
   <Layout>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="product" element={<ProductPage />}/>
      <Route path="/:productId" element={<PurchasePage />} />
      <Route path="cart" element={<CartPage />} />
    </Routes>
   </Layout>
 );
}

export default App;
