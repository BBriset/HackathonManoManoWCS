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
import SCart from './style';

export default function Cart() {
  const BlackAl = styled(AngleLeft)`
    color: black;
    width: 14px !important;
  `;
  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <SCart>
      <TabContext value={value}>
        <Box>
          <div>
            <Tabs
              variant="fullWidth"
              onChange={handleChange}
              aria-label="ConnectionChoice"
              textColor="black"
              centered
              TabIndicatorProps={{
                style: {
                  height: '3px',
                  backgroundColor: 'black',
                  width: '27vw',
                },
              }}
            >
              <Tab label="Panier" value="1" />
              <Tab label="Mis de côté" value="2" />
            </Tabs>
          </div>
        </Box>
        <TabPanel value="1" />
        <TabPanel value="2" />
      </TabContext>

      <div className="layoutPagecontainer">
        <div className="layoutLayout">
          <article className="layoutLeftColumn">
            <div className="cartContent">
              <nav>
                <Link to="/">
                  <BlackAl />
                  Continuer mes achats
                </Link>
              </nav>
            </div>
          </article>
        </div>
      </div>

      <div>tab</div>
      <div className="reassuranceSection">
        <h2 className="reassuranceTitle">
          Le plus grand magasin en ligne d`&lsquo;`Europe de brico, maison &
          jardin
        </h2>
        <ul className="reassuranceList">
          <li className="reassuranceItem">
            <img src={hammer} alt="hammer" />
            <div className="reassuranceDescription">
              <h3>Des millions de produits</h3>
              <p>62 fois plus qu`&lsquo;`en magasin, ça en fait du choix</p>
            </div>
          </li>
          <li className="reassuranceItem">
            <img src={wall} alt="wall" />
            <div className="reassuranceDescription">
              <h3>Livraison chez vous ou en point relais</h3>
              <p>Ça, c`&lsquo;`est vous qui voyez</p>
            </div>
          </li>
          <li className="reassuranceItem">
            <img src={paint} alt="hammer" />
            <div className="reassuranceDescription">
              <h3>Des centaines d`&lsquo;`experts en ligne</h3>
              <p>Aussi experts que Macgyver, plus dispos que votre ophtalmo</p>
            </div>
          </li>
        </ul>
      </div>
    </SCart>
  );
}
