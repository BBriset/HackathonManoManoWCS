import React from 'react';

import { Star1, AddQt, Globale, Button, Div, Count, Div2 } from './style';
import tron from '../../assets/tronconneuse.jpg';
import payer from '../../assets/payer.png';

export default function Articles() {
  return (
    <Globale>
      <div>
        <img classNamme="tronçoneuse" src={tron} alt="" />
        <h1 className="title">
          Tronçonneuse thermique 62 cm3, guide 50 cm, 2 chaines + housse de
          transport
        </h1>
      </div>
      <Star1>
        <div className="rating">
          <a href="#5" title="Donner 5 étoiles">
            ★
          </a>
          <a href="#4" title="Donner 4 étoiles">
            ★
          </a>
          <a href="#3" title="Donner 3 étoiles">
            ★
          </a>
          <a href="#2" title="Donner 2 étoiles">
            ★
          </a>
          <a href="#1" title="Donner 1 étoile">
            ★
          </a>
        </div>
      </Star1>
      <Div>
        <AddQt>
          <Count>
            <button
              className="qty-count qty-count--minus"
              data-action="minus"
              type="button"
            >
              -
            </button>
            <input type="number" min="0" max="10" value="1" />
            <button
              className="qty-count qty-count--add"
              data-action="add"
              type="button"
            >
              +
            </button>
          </Count>
          <Div2>
            <h1>TOTAL</h1>
            <p>116.90€</p>
          </Div2>
        </AddQt>
        <Button>
          <button type="button">Ajouter au panier</button>
          <button type="button">Achat direct</button>
        </Button>
        <img src={payer} alt="payer" />
      </Div>
    </Globale>
  );
}
