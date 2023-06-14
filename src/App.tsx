import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
 return (
   <Routes>
     <Route index element={<MainPage />} />
   </Routes>
 );
}

export default App;
