import styled from 'styled-components';

export const SContainer = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin: 10px;
  @media only screen and (max-width: 1000px) {
    img {
      margin: 0px;
      height: 50px;
      width: 50px;
      margin: auto;
      border-radius: 5px;
    }
  }
`;
export const Recap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 95vw;
  height: 60px;
  background-color: none;
  border-radius: 5px;
  padding: 0 5px 0 5px;
  p {
    font-size: 14px;
    margin: 12px 5px 0 15px;
  }
`;
export const Div = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

export const SButtonCB = styled.div`
  margin-left: auto;
  margin-right: auto;
  border: none;
  background-color: #29b9ad;
  border-radius: 10px;
  width: 310px;
  height: 48px;
  img {
    margin: 3px;
    height: 50px;
    width: 30%;
  }
  cursor: pointer;
  :hover {
    background-color: #25a59a;
  }
  :active {
    background-color: #25a59a;
  }
  @media only screen and (max-width: 1000px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 350px;
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
  margin-left: auto;
  margin-right: auto;
  border: none;
  background-color: #29b9ad;
  border-radius: 10px;
  height: 100%;
  max-width: 350px;
  img {
    height: 50px;
    width: 250px;
  }
  cursor: pointer;
  :hover {
    background-color: #25a59a;
  }
  :active {
    background-color: #25a59a;
  }

  @media only screen and (max-width: 1000px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 350px;
    img {
      height: 50px;
      width: 250px;
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
  margin-left: auto;
  margin-right: auto;
  border: none;
  background-color: #29b9ad;
  border-radius: 10px;
  width: 310px;
  height: 48px;
  img {
    padding: 5px;
    height: 50px;
    width: 120px;
  }
  cursor: pointer;
  :hover {
    background-color: #25a59a;
  }
  :active {
    background-color: #25a59a;
  }
  @media only screen and (max-width: 1000px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 350px;
    img {
      padding: 5px;
      height: 50px;
      width: 120px;
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
