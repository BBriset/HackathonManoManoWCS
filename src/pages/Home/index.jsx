import { Container, Section, Row, Row2, Div } from './style';
import Homes from '../../assets/home.png';
import CardItem from '../../components/CardItem';

const datas = [
  {
    img: 'https://i.ibb.co/qDcQvbW/tronconneuse.jpg',
    title: 'Tronçonneuse thermique',
    subtitle: '62 cm3, guide 50 cm, 2 chaines + housse de transport',
    img2: 'https://i.ibb.co/mby3SJt/starr.png',
    price: '116.9',
  },
  {
    img: 'https://cdn.manomano.com/images/images_products/6145579/P/16779123_1.jpg',
    title: 'Jeux de tournevis Facom',
    subtitle: 'Tournevis PROTWIST à cliquer + 15 embouts de vissage',
    img2: 'https://i.ibb.co/mby3SJt/starr.png',
    price: '44.78',
  },
  {
    img: 'https://cdn.manomano.com/images/images_products/152674/L/15128010_1.jpg',
    title: 'Elageuse thermique',
    subtitle:
      'Élagueuse thermique sur perche avec tête orientable, 52 cm3, 3 CV, longueur 4.15 mètres',
    img2: 'https://i.ibb.co/mby3SJt/starr.png',
    price: '169.90',
  },
  {
    img: 'https://www.hellopro.fr/images/produit-2/1/6/6/decoupeur-plasma-cnc-poste-soudure-soudage-380v-85-amperes-igbt-professionnel-stamos-welding-26091661.jpg',
    title: 'Decoupeur Plasma',
    subtitle:
      'Decoupeur Plasma Cnc Poste Soudure Soudage 380V 85 Amperes Igbt Professionnel',
    img2: 'https://i.ibb.co/mby3SJt/starr.png',
    price: '739.00',
  },
  {
    img: 'https://aumagducoin.fr/33-large_default/coffret-dremel-8220-outil-multifonction-65-accessoires.jpg',
    title: 'Pack dremel',
    subtitle:
      'Dremel 8220-5 / 65 Outil multifonctionnel Platinum Edition avec accessoires',
    img2: 'https://i.ibb.co/mby3SJt/starr.png',
    price: '197.85',
  },
];

export default function Home() {
  return (
    <div>
      <Container>
        <Div>
          <img src={Homes} alt="home" />
        </Div>
        <Section>
          <Row>
            <div>Nos top ventes</div>
            <div>plein de produits pour vous réunis ici</div>
          </Row>
          <Row2>
            {datas.map((data) => {
              return (
                <CardItem
                  img={data.img}
                  title={data.title}
                  subtitle={data.subtitle}
                  img2={data.img2}
                  price={data.price}
                />
              );
            })}
          </Row2>
        </Section>
      </Container>
    </div>
  );
}
