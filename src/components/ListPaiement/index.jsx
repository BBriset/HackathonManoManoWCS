import IconCB from 'assets/IconCB.png';
import IconPp from 'assets/IconPaypal.png';
import IconCoinBase from 'assets/Coinbase.png';
import { SButtonCB, SButtonPaypal, SButtonCoinBase, SContainer } from './style';

export default function Paiement() {
  return (
    <SContainer>
      <>
        <p>
          Tronçonneuse thermique 62 cm3, guide 50 cm, 2 chaines + housse de
          transport
        </p>
        <p>Total 116€90</p>
      </>

      <SButtonCB>
        <img src={IconCB} alt="Logo Carte bleu" />
      </SButtonCB>
      <SButtonPaypal>
        <img src={IconPp} alt="Logo Paypal" />
      </SButtonPaypal>

      <SButtonCoinBase>
        <a href="https://commerce.coinbase.com/checkout/fa79f7dd-cbfe-423b-bb1d-a5674546a386">
          <img src={IconCoinBase} alt="Logo CoinBase" />
        </a>
        <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807" />
      </SButtonCoinBase>
    </SContainer>
  );
}
