import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/layout';
import { HomePage } from './pages/homePage/homePage';
import { NotFoundPage } from './pages/notFoundPage/notFoundPage';
import { ServicesPage } from './pages/servicesPage/servicesPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
