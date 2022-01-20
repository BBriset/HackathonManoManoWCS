import propTypes from 'prop-types';
import { Card, Div, Div2, Div3 } from './style';
// import VroumVroum from '../../assets/tronconneuse.jpg';
// import Star from '../../assets/starr.png';

export default function CardItem({ img, title, subtitle, img2, price }) {
  return (
    <div>
      <Card>
        <img src={img} alt="BrrBrrrbbbbbb" />
        <Div>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </Div>
        <Div2>
          <img src={img2} alt="Star" />
        </Div2>
        <Div3>
          <p>{price}€</p>
        </Div3>
      </Card>
    </div>
  );
}

CardItem.propTypes = {
  img: propTypes.string,
  title: propTypes.string,
  subtitle: propTypes.string,
  img2: propTypes.string,
  price: propTypes.string,
};
CardItem.defaultProps = {
  img: propTypes.string,
  title: propTypes.string,
  subtitle: propTypes.string,
  img2: propTypes.string,
  price: propTypes.string,
};
