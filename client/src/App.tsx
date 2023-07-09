// App.tsx
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/shared";
import { HomePage, ProductCreatePage, ProductPage } from "./pages";

function App() {
  return (
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="create" element={<ProductCreatePage />} />
          <Route path="product/:productId" element={<ProductPage />} />
        </Routes>
      </Layout>
  );
}

export default App;
