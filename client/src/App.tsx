import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/shared';
import { LoadingPage } from './pages';

// 동적 임포트
const ProductPage = React.lazy(() => import('./pages/ProductPage'));
const CartPage = React.lazy(() => import('./pages/CartPage'));
const PurchasePage = React.lazy(() => import('./pages/PurchasePage'));
const HomePage = React.lazy(() => import('./pages/HomePage'));
const ProductCreatePage = React.lazy(() => import('./pages/ProductCreatePage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingPage/>}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="product/:productId" element={<ProductPage />} />
          <Route path="purchase/:productId" element={<PurchasePage />} />
          <Route path="create" element={<ProductCreatePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
