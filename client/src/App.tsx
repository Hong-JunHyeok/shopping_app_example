import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/shared';

//NOTE: 동적 import 관련한 설명하기
const ProductPage = React.lazy(() => import('./pages/ProductPage'));
const CartPage = React.lazy(() => import('./pages/CartPage'));
const PurchasePage = React.lazy(() => import('./pages/PurchasePage'));
const HomePage = React.lazy(() => import('./pages/HomePage'));
const ProductCreatePage = React.lazy(() => import('./pages/ProductCreatePage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<React.Suspense fallback={<div>Loading...</div>}><HomePage /></React.Suspense>} />
        <Route path="product/:productId" element={<React.Suspense fallback={<div>Loading...</div>}><ProductPage /></React.Suspense>} />
        <Route path="purchase/:productId" element={<React.Suspense fallback={<div>Loading...</div>}><PurchasePage /></React.Suspense>} />
        <Route path="create" element={<React.Suspense fallback={<div>Loading...</div>}><ProductCreatePage /></React.Suspense>} />
        <Route path="cart" element={<React.Suspense fallback={<div>Loading...</div>}><CartPage /></React.Suspense>} />
        <Route path="*" element={<React.Suspense fallback={<div>Loading...</div>}><NotFoundPage /></React.Suspense>} />
      </Routes>
    </Layout>
  );
}

export default App;
