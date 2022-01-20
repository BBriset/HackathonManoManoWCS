import { Card, Div, Div2, Div3 } from './style';
import VroumVroum from '../../assets/tronconneuse.jpg';
import Star from '../../assets/starr.png';

export default function CardItem() {
  return (
    <div>
      <Card>
        <img src={VroumVroum} alt="BrrBrrrbbbbbb" />
        <Div>
          <h1>Tronçonneuse thermique </h1>
          <p> 62 cm3, guide 50 cm, 2 chaines + housse de transport</p>
        </Div>
        <Div2>
          <img src={Star} alt="Star" />
        </Div2>
        <Div3>
          <p>116.9€</p>
        </Div3>
      </Card>
    </div>
  );
}
