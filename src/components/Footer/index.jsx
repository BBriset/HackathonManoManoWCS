import { useState } from 'react';
import {
  Footer1,
  Footer2,
  Main,
  Col,
  Col2,
  Col3,
  Title,
  Title2,
  Title3,
  Title4,
  TitleF,
  SubTitle,
  Row,
  Row2,
  Row3,
  Row4,
  Row5,
} from './style';

import android from '../../assets/android.svg';
import apple from '../../assets/apple.svg';
import de from '../../assets/de.svg';
import es from '../../assets/es.svg';
import gb from '../../assets/gb.svg';
import it from '../../assets/it.svg';
import Master from '../../assets/Mastercard.svg';
import Oney from '../../assets/Oney.svg';
import Paypal from '../../assets/Paypal.svg';
import Virement from '../../assets/Virement.svg';
import Visa from '../../assets/Visa.svg';
import Btc from '../../assets/btc..png';
import lock from '../../assets/lock.png';
import twiter from '../../assets/Twiter.png';
import twiter2 from '../../assets/Twiter2.png';
import facebook from '../../assets/facebook.png';
import facebook2 from '../../assets/facebook2.png';
import pinterest from '../../assets/pinterest.png';
import pinterest2 from '../../assets/pinterest2.png';
import instagram from '../../assets/Insta.png';
import instagram2 from '../../assets/Insta2.png';
import blog from '../../assets/blog.png';
import blog2 from '../../assets/blog2.png';

export default function Footer() {
  const [isShow, setIsShow] = useState(true);
  const [isShow2, setIsShow2] = useState(true);
  const [isShow3, setIsShow3] = useState(true);
  const [isShow4, setIsShow4] = useState(true);
  const [isShow5, setIsShow5] = useState(true);

  function Fill() {
    setIsShow(false);
  }

  function Empty() {
    setIsShow(true);
  }

  function Fill2() {
    setIsShow2(false);
  }

  function Empty2() {
    setIsShow2(true);
  }
  function Fill3() {
    setIsShow3(false);
  }

  function Empty3() {
    setIsShow3(true);
  }
  function Fill4() {
    setIsShow4(false);
  }

  function Empty4() {
    setIsShow4(true);
  }
  function Fill5() {
    setIsShow5(false);
  }

  function Empty5() {
    setIsShow5(true);
  }

  return (
    <>
      <Footer1>
        <Main>
          <Col>
            <Title>
              <h3>ManoMano infos</h3>
              <h4>Coin renseignements</h4>
            </Title>
            <p>Foire aux questions</p>
            <p>Suivi de commande</p>
            <p>Qui sommes-nous ?</p>
            <p>Devenir marchand</p>
            <p>Contact Presse</p>
            <p>Nous rejoindre</p>
            <p>Programme d’Affiliation</p>
          </Col>
          <Col2>
            <Title2>
              <h3>Conseils, produits, prix</h3>
              <h4>Vous allez tout savoir par ici</h4>
            </Title2>
            <p>Nos bons conseils</p>
            <p>Nos top catégories de produits</p>
            <p>Nos comparatifs</p>
            <p>Nos marques</p>
            <SubTitle>
              <h3>International</h3>
              <h4>Et bientôt présents sur la Blockchain !</h4>
            </SubTitle>
            <Row>
              <img src={it} alt="italian" />
              <img src={gb} alt="english" />
              <img src={de} alt="dutch" />
              <img src={es} alt="divich" />
            </Row>
          </Col2>
          <Col3>
            <Title3>
              <h3>Découvrez l&apos;application ManoMano</h3>
              <h4>+ 6 millions de produits dans votre poche</h4>
            </Title3>
            <Row2>
              <img src={apple} alt="apple store" />
              <img src={android} alt="apple store" />
            </Row2>
            <Row3>
              <img src={lock} alt="virement" />
              <p>Paiement sécurisé</p>
            </Row3>
            <Row4>
              <img src={Btc} alt="cb" />
              <img src={Visa} alt="visa" />
              <img src={Master} alt="master" />
              <img src={Paypal} alt="paypal" />
              <img src={Oney} alt="oney" />
              <img src={Virement} alt="virement" />
            </Row4>
            <Title4>
              <h3>Rejoignez-nous</h3>
              <h4>La magie de l’internet mondial !</h4>
            </Title4>
            <Row5>
              <div
                onMouseOver={() => Fill()}
                onMouseOut={() => Empty()}
                onFocus={() => Fill()}
                onBlur={() => Empty()}
              >
                <img src={isShow ? twiter : twiter2} alt="twiter" />
              </div>
              <div
                onMouseOver={() => Fill2(true)}
                onMouseOut={() => Empty2(false)}
                onFocus={() => Fill2(true)}
                onBlur={() => Empty2(false)}
              >
                <img src={isShow2 ? facebook : facebook2} alt="twiter" />
              </div>
              <div
                onMouseOver={() => Fill3(true)}
                onMouseOut={() => Empty3(false)}
                onFocus={() => Fill3(true)}
                onBlur={() => Empty3(false)}
              >
                <img src={isShow3 ? pinterest : pinterest2} alt="twiter" />
              </div>
              <div
                onMouseOver={() => Fill4(true)}
                onMouseOut={() => Empty4(false)}
                onFocus={() => Fill4(true)}
                onBlur={() => Empty4(false)}
              >
                <img src={isShow4 ? instagram : instagram2} alt="twiter" />
              </div>
              <div
                onMouseOver={() => Fill5(true)}
                onMouseOut={() => Empty5(false)}
                onFocus={() => Fill5(true)}
                onBlur={() => Empty5(false)}
              >
                <img src={isShow5 ? blog : blog2} alt="twiter" />
              </div>
            </Row5>
          </Col3>
        </Main>
      </Footer1>
      <Footer2>
        <p>©2022 ManoMano</p>
        <TitleF>
          <p>Paramétrer mes cookies </p>|<p>Plan du site </p>|
          <p>Mentions légales </p>|<p>Protection des données </p>|
          <p>Conditions générales d&apos;utilisation </p>|
          <p>Infos consommateurs </p>
        </TitleF>
      </Footer2>
    </>
  );
}
