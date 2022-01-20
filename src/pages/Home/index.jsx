import { Container, Section, Row, Row2 } from './style';
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
    img: 'https://i.ibb.co/qDcQvbW/tronconneuse.jpg',
    title: 'Tronçonneuse thermique',
    subtitle: '62 cm3, guide 50 cm, 2 chaines + housse de transport',
    img2: 'https://i.ibb.co/mby3SJt/starr.png',
    price: '116.9',
  },
  {
    img: 'https://i.ibb.co/qDcQvbW/tronconneuse.jpg',
    title: 'Tronçonneuse thermique',
    subtitle: '62 cm3, guide 50 cm, 2 chaines + housse de transport',
    img2: 'https://i.ibb.co/mby3SJt/starr.png',
    price: '116.9',
  },
  {
    img: 'https://i.ibb.co/qDcQvbW/tronconneuse.jpg',
    title: 'Tronçonneuse thermique',
    subtitle: '62 cm3, guide 50 cm, 2 chaines + housse de transport',
    img2: 'https://i.ibb.co/mby3SJt/starr.png',
    price: '116.9',
  },
  {
    img: 'https://i.ibb.co/qDcQvbW/tronconneuse.jpg',
    title: 'Tronçonneuse thermique',
    subtitle: '62 cm3, guide 50 cm, 2 chaines + housse de transport',
    img2: 'https://i.ibb.co/mby3SJt/starr.png',
    price: '116.9',
  },
];

export default function Home() {
  return (
    <div>
      <Container>
        <img src={Homes} alt="home" />
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
