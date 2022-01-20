import IconCB from 'Assets/IconCB.png';
import IconPp from 'Assets/IconPaypal.png';
import IconCoinBase from 'Assets/IconCoinBase.png';
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
        <img src={IconCoinBase} alt="Logo Paypal" />
      </SButtonCoinBase>
    </SContainer>
  );
}
