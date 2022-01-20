import React from 'react';
import { Link } from 'react-router-dom';
import SFromInscript from './style';

export default function Conne() {
  return (
    <SFromInscript>
      <h1>Connexion</h1>
      <div className="div1">
        <h2>Mail</h2>
        <input type="text" className="Mail" placeholder="Username" />
      </div>
      <div className="div2">
        <h2>Mot de passe</h2>

        <input type="text" className="m-d-p" placeholder="Password" />
      </div>
      <Link type="button" className="buttonLink" to="/Connexion">
        Connexion
      </Link>
      <div className="div3">
        <div>
          <input type="checkbox" className="remember" /> Remember ME
        </div>
        <div>
          <a href="/">Forgot your password</a>
        </div>
      </div>
      <div>
        <h1 className="inscription"> pas de compte ?</h1>
        <Link type="button" className="buttonLink" to="/Inscription">
          Inscrivez-vous
        </Link>
      </div>
    </SFromInscript>
  );
}
