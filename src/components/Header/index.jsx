import logo from 'assets/logo.png';
import { Link } from 'react-router-dom';
import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart';
import styled from 'styled-components';
import { SFromHeader, Container } from './style';

const Shopping = styled(ShoppingCart)`
  color: #838383;
  height: 25px;
  width: 40px;
  margin-bottom: 4px;
  margin-left: 10px;
  margin-right: 10px;
  :hover {
    cursor: pointer;
    background-color: #f0f0f0;
    color: #1e3c87;
    border-radius: 10px;
    height: 38px;
    padding: 6px;
    max-width: 40px;
  }
`;

export default function Header() {
  return (
    <SFromHeader>
      <Container>
        <div className="first">
          <div>
            <a href="/">
              <img src={logo} alt="mano mano" />
            </a>
          </div>
          <div>
            <input
              className="first-input"
              type="button"
              value="identifiez-vous"
            />
            <a href="/shop">
              <Link to="/cart">
                <Shopping />
              </Link>
            </a>
          </div>
        </div>
        <div>
          <div className="second">
            <div className="button-burger">
              <span />
              <span />
              <span />
            </div>
            <input
              className="second-input"
              type="text"
              placeholder="Rechercher un produit, une marque ou un conseil"
            />
          </div>
        </div>
        <div className="third">
          <li>Soldes</li>
          <li>Bons plans</li>
          <li>Meilleurs ventes</li>
          <li>Perçeuse, visseuse...</li>
          <li>Aménagement d&#39;atelier</li>
          <li>Radiateur électrique</li>
          <li>Bibliothèque et étagère</li>
          <li>Suspension, lustre et accessoires</li>
          <li>Made in italy</li>
        </div>
      </Container>
    </SFromHeader>
  );
}
