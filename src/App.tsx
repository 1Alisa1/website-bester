import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/homePage/homePage';
import { NotFoundPage } from './pages/notFoundPage/notFoundPage';
import { ServicesPage } from './pages/servicesPage/servicesPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
