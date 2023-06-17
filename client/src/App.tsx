import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/shared';

import { ProductPage, CartPage, PurchasePage, HomePage, ProductCreatePage, NotFoundPage } from './pages';

function App() {
 return (
   <Layout>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="product/:productId" element={<ProductPage />}/>
      <Route path="purchase/:productId" element={<PurchasePage />} />
      <Route path="create" element={<ProductCreatePage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
   </Layout>
 );
}

export default App;
