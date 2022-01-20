import { Container, Section, Row } from './style';
import Homes from '../../assets/home.png';
import CardItem from '../../components/CardItem';

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
          <CardItem />
        </Section>
      </Container>
    </div>
  );
}
