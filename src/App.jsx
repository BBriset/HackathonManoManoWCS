import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Cart from 'pages/Cart';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Article from './pages/Article';
import Choix from './pages/ChoixPaiement';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Paiement" element={<Choix />} />
      </Routes>
      <Footer />
    </>
  );
}
