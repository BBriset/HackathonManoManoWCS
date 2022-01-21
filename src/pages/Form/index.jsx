import VroumVroum from 'assets/tronconneuse1.jpg';
import {
  SForm,
  STitle,
  SCoordinate,
  SLivraison,
  SButton,
  PointRelaisA,
  ListImput,
} from './style';

export default function Form() {
  return (
    <>
      <SForm>
        <h1>Achat Direct</h1>
        <STitle>
          <img src={VroumVroum} alt="tronçonneuse" />
          <p>Tronçonneuse Thermique</p>
        </STitle>
        <SCoordinate>
          <hr />
          <div className="title">
            <h2>Coordonnées</h2>
          </div>
          <ListImput>
            <input type="text" id="first-name" placeholder="Nom" />
            <input type="text" name="prénom" placeholder="Prénom" />
            <input type="textarea" name="adresse" placeholder="Adresse" />
            <input type="text" name="code Postal" placeholder="Code Postal" />
            <input type="text" name="ville" placeholder="Ville" />
            <input type="email" id="email" name="email" placeholder="Email" />
          </ListImput>
        </SCoordinate>
        <SLivraison>
          <hr />
          <h2>Choix de la Livraison</h2>
          <h3>Adresse</h3>
          <p>4 Av. des Saules bâtiment Le Doge, 59160 Lille</p>
          <h3>Points Relais autour de chez vous</h3>
          <PointRelaisA>
            <label htmlFor="Point relais 1">
              <input type="radio" id="point relais 1" name="point relais 1" />
              Point relais 1
            </label>
            <label htmlFor="Point relais 2">
              <input type="radio" id="point relais 2" name="point relais 2" />
              Point relais 2
            </label>
            <label htmlFor="Point relais 3">
              <input type="radio" id="point relais 3" name="point relais 3" />
              Point relais 3
            </label>
          </PointRelaisA>
        </SLivraison>
        <SButton>
          <button type="button">Payer</button>
        </SButton>
      </SForm>
    </>
  );
}
