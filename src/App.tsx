import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/shared';

import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';

function App() {
 return (
   <Layout>
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/:productId" element={<ProductPage />} />
    </Routes>
   </Layout>
 );
}

export default App;
