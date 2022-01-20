import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Footer from 'components/Footer';
import Article from './pages/Article';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Article" element={<Article />} />
      </Routes>
      <Footer />
    </>
  );
}
