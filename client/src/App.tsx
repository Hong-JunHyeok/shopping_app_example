// App.tsx
import { Route, Routes } from "react-router-dom";
import { HomePage, ProductPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/:productId" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
