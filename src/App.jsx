import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
// import Footer from 'components/Footer';
import Form from './pages/Form';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}
