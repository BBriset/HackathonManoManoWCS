import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Cart from 'pages/Cart';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Article from './pages/Article';
import Inscription from './pages/Inscription';
import Connexion from './pages/Connexion';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Connexion" element={<Connexion />} />
        <Route path="/Inscription" element={<Inscription />} />
      </Routes>
      <Inscription />
      <Footer />
    </>
  );
}
