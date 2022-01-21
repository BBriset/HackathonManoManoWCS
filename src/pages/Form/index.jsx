import tronconneuse from 'assets/tronconneuse.jpg';
import { SForm, STitle, SCoordinate, SLivraison, SButton } from './style';

export default function Form() {
  return (
    <>
      <SForm>
        <STitle>
          <h1>Achat Direct</h1>
          <p>Tronçonneuse Thermique</p>
          <img src={tronconneuse} alt="tronçonneuse" />
        </STitle>
        <SCoordinate>
          <hr />
          <div className="title">
            <h2>Coordonnées</h2>
          </div>

          <input type="text" id="first-name" placeholder="Nom" />

          <input type="text" name="prénom" placeholder="Prénom" />

          <input type="textarea" name="adresse" placeholder="Adresse" />

          <input type="text" name="code Postal" placeholder="Code Postal" />

          <input type="text" name="ville" placeholder="Ville" />

          <input type="email" id="email" name="email" placeholder="Email" />
        </SCoordinate>
        <SLivraison>
          <hr />
          <h2>Choix de la Livraison</h2>
          <h3>Adresse</h3>

          <div className="relay">
            <h2>Points Relais autour de chez vous</h2>
            <p>Point Relais</p>
            <p>Point Relais</p>
            <p>Point Relais</p>
          </div>
        </SLivraison>
        <SButton>
          <button type="button">Payer</button>
        </SButton>
      </SForm>
    </>
  );
}
