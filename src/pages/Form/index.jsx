import tronconneuse from './tronconneuse.jpg';
import { SForm, SLivraison } from './style';

export default function Form() {
  return (
    <>
      <SForm>
        <article>
          <div className="direct">
            <h1>Achat Direct</h1>
            <p>Tronçonneuse Thermique</p>
            <img src={tronconneuse} alt="tronçonneuse" />
          </div>
        </article>
        <article>
          <div className="form">
            <div className="title">
              <h1>Coordonnées</h1>
            </div>
            <h2>Nom</h2>
            <input type="text" id="first-name" />
            <h2>Prénom</h2>
            <input type="text" name="prénom" />
            <h2>Adresse</h2>
            <input type="textarea" name="adresse" />
            <h2>Code Postal</h2>
            <input type="text" name="code Postal" />
            <h2>Ville </h2>
            <input type="text" name="ville" />
            <h2> E-mail</h2>
            <input type="email" id="email" name="email" />
          </div>
        </article>
        <SLivraison>
          <div className="chooseDelivery" />
          <div className="title">
            <h1>Choix de la Livraison</h1>
          </div>
          <div className="address">
            <h2>Adresse</h2>
          </div>
          <div className="relay">
            <h2>Points Relais autour de chez vous</h2>
            <p>Point Relais</p>
            <p>Point Relais</p>
            <p>Point Relais</p>
          </div>
        </SLivraison>
        <button type="button" className="paymentBtn">
          Payer
        </button>
      </SForm>
    </>
  );
}
