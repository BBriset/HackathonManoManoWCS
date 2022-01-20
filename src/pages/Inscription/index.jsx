import React from 'react';
import SFromInscript from './style';

export default function inscription() {
  return (
    <SFromInscript>
      <h1>Inscription</h1>
      <div className="div1">
        <h2>Nom</h2>
        <input type="text" placeholder="Username" />
      </div>
      <div className="div2">
        <h2>Prénom</h2>
        <input type="text" placeholder="Prénom" />
      </div>
      <div className="div2">
        <h2>Adresse</h2>
        <input type="text" placeholder="Adresse" />
      </div>
      <div className="div2">
        <h2>Ville</h2>
        <input type="text" placeholder="Ville" />
      </div>
      <div className="div2">
        <h2>Code postal</h2>
        <input type="text" placeholder="Code-postal" />
      </div>
      <div className="div2">
        <h2>Ville</h2>
        <input type="text" placeholder="Ville" />
      </div>

      <button type="button" className="buttonLink">
        Inscription
      </button>
    </SFromInscript>
  );
}
