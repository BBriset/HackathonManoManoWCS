import styled from 'styled-components';

export const SContainer = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin: 10px;
`;

export const SButtonCB = styled.div`
  @media only screen and (max-width: 1000px) {
    img {
      margin: 3px;
      height: 50px;
      width: 30%;
    }
    display: flex;
    justify-content: center;
    margin-top: 5px;
    height: 100%;
    width: 100%;
    background-color: var(--color--thirdary);
    border-radius: 10px;
    box-shadow: 5px 5px 5px var(--color-primary);
  }
`;
export const SButtonPaypal = styled.div`
  @media only screen and (max-width: 1000px) {
    img {
      height: 50px;
      width: 70%;
    }
    display: flex;
    justify-content: center;
    margin-top: 5px;
    height: 100%;
    width: 100%;
    background-color: var(--color--thirdary);
    border-radius: 10px;
    box-shadow: 5px 5px 5px var(--color-primary);
  }
`;

export const SButtonCoinBase = styled.div`
  @media only screen and (max-width: 1000px) {
    img {
      height: 50px;
      width: 20%;
    }
    display: flex;
    justify-content: center;
    margin-top: 5px;
    height: 100%;
    width: 100%;
    background-color: var(--color--thirdary);
    border-radius: 10px;
    box-shadow: 5px 5px 5px var(--color-primary);
  }
`;
