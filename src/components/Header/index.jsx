import logo from 'assets/logo.png';
import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart';
import styled from 'styled-components';
import SFromHeader from './style';

const Shopping = styled(ShoppingCart)`
  color: black;
  height: 36px;
  width: 110px;
`;

export default function Header() {
  return (
    <SFromHeader>
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
            <Shopping />
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
          <input className="second-input" type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="third">
        <li>soldes</li>
        <li>Bon plan</li>
        <li>Meilleurs ventes</li>
        <li>Perçeuse, visseuse...</li>
        <li>Aménagement d&#39;atelier</li>
        <li>Radiateur électrique</li>
        <li>Bibliothèque et étagère</li>
      </div>
    </SFromHeader>
  );
}
