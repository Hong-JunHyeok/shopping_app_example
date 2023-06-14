import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/shared';

import { CartPage, ProductPage, HomePage } from './pages';

function App() {
 return (
   <Layout>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/:productId" element={<ProductPage />} />
      <Route path="cart" element={<CartPage />} />
    </Routes>
   </Layout>
 );
}

export default App;
