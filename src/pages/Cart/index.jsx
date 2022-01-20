import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AngleLeft } from '@styled-icons/fa-solid/AngleLeft';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import hammer from 'assets/hammer.png';
import paint from 'assets/paint.png';
import wall from 'assets/wall.png';
import monPanier from 'assets/monPanier.png';
import tronconneuse from 'assets/tronconneuse.jpg';
import tv from 'assets/tv.jpg';
import SCart from './style';

export default function Cart() {
  const BlackAl = styled(AngleLeft)`
    color: black;
    width: 14px !important;
    margin-right: 10px;
  `;

  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const price1 = 116.9;
  const price2 = 89.99;
  const total = price1 + price2;

  return (
    <SCart>
      <TabContext value={value}>
        <Box>
          <div>
            <Link className="link" to="/">
              <BlackAl />
              Continuer mes achats
            </Link>
            <Tabs
              variant="fullWidth"
              onChange={handleChange}
              aria-label="CartChoise"
              textColor="black"
              centered
              TabIndicatorProps={{
                style: {
                  height: '5px',
                  backgroundColor: 'black',
                },
              }}
            >
              <Tab label="Panier" value="1" />
              <Tab label="Mis de côté" value="2" />
            </Tabs>
          </div>
        </Box>
        <TabPanel value="1">
          <h2>Total {total} €</h2>
          <article className="item">
            <img src={tronconneuse} alt="meuble tv" />
            <div className="description">
              <p className="itemDetails">
                Tronçonneuse thermique 62 cm3, guide 50 cm, 2 chaines + housse
                de transport
              </p>
              {price1}€
            </div>
          </article>
          <article className="item">
            <img src={tv} alt="meuble tv" />
            <div className="description">
              <p className="itemDetails">
                Selsey BIANKO - Meuble TV / Banc TV (chêne lancaster, 140 cm,
                sans LED)
              </p>
              {price2} €
            </div>
          </article>
          <h2>Total {total} €</h2>
          <Link className="buttonLink" to="/">
            Continuer mes achats
          </Link>
          <Link className="buttonLink" to="/buy">
            Acheter ces articles
          </Link>
          <Link className="buttonLink" to="/connexion">
            Connexion/Inscription
          </Link>
        </TabPanel>
        <TabPanel value="2">
          <h1>Ça alors. Vous n’avez rien mis de côté.</h1>
          <p>On a vérifié partout.</p>
          <img src={monPanier} alt="Mon panier" />
        </TabPanel>
      </TabContext>

      <div className="reassuranceSection">
        <h2 className="reassuranceTitle">
          Le plus grand magasin en ligne d’Europe de brico, maison & jardin
        </h2>
        <ul className="reassuranceList">
          <li className="reassuranceItem">
            <img src={hammer} alt="hammer" />
            <div className="reassuranceDescription">
              <h3>Des millions de produits</h3>
              <p>62 fois plus qu’en magasin, ça en fait du choix</p>
            </div>
          </li>
          <li className="reassuranceItem">
            <img src={wall} alt="wall" />
            <div className="reassuranceDescription">
              <h3>Livraison chez vous ou en point relais</h3>
              <p>Ça, c’est vous qui voyez</p>
            </div>
          </li>
          <li className="reassuranceItem">
            <img src={paint} alt="hammer" />
            <div className="reassuranceDescription">
              <h3>Des centaines d’experts en ligne</h3>
              <p>Aussi experts que Macgyver, plus dispos que votre ophtalmo</p>
            </div>
          </li>
        </ul>
      </div>
    </SCart>
  );
}
