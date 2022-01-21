import styled from 'styled-components';

export const SContainer = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin: 0 10px 10px 10px;
  img {
    height: 50px;
    width: 50px;
    border-radius: 5px;
    margin: auto;
  }
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
  height: 60px;
  background-color: none;
  border-radius: 5px;
  p {
    font-size: 14px;
    margin: 0;
    width: 500px;
  }
  @media only screen and (max-width: 1000px) {
    margin: 0;
    padding: 0;
  }
`;
export const Div = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Container = styled.div`
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  p {
    font-size: 14px;
    margin-top: 25px;
  }
  p:nth-child(2) {
    margin-top: 12px;
  }
  @media only screen and (max-width: 1000px) {
    margin: 0;
    padding: 0;
  }
`;

export const SButtonCB = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 350px;
  display: flex;
  justify-content: center;
  margin-top: 5px;
  height: 55px;
  width: 100%;
  background-color: var(--color--thirdary);
  border-radius: 10px;
  box-shadow: 5px 5px 5px var(--color-primary);
  img {
    height: 45px;
    width: 70px;
    margin-top: 5px;
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
    display: flex;
    justify-content: center;
    margin-top: 5px;
    height: 55px;
    width: 100%;
    background-color: var(--color--thirdary);
    border-radius: 10px;
    box-shadow: 5px 5px 5px var(--color-primary);
    img {
      height: 45px;
      width: 70px;
      margin-top: 5px;
      margin-bottom: 2px;
    }
  }
`;
export const SButtonPaypal = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 350px;
  display: flex;
  justify-content: center;
  margin-top: 5px;
  height: 55px;
  width: 100%;
  background-color: var(--color--thirdary);
  border-radius: 10px;
  box-shadow: 5px 5px 5px var(--color-primary);
  img {
    height: 50px;
    width: 180px;
    margin-top: 3px;
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
    display: flex;
    justify-content: center;
    margin-top: 5px;
    height: 55px;
    width: 100%;
    background-color: var(--color--thirdary);
    border-radius: 10px;
    box-shadow: 5px 5px 5px var(--color-primary);
    img {
      height: 50px;
      width: 180px;
    }
  }
`;

export const SButtonCoinBase = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 350px;
  display: flex;
  justify-content: center;
  margin-top: 5px;
  height: 55px;
  width: 100%;
  background-color: var(--color--thirdary);
  border-radius: 10px;
  box-shadow: 5px 5px 5px var(--color-primary);
  img {
    padding: 5px;
    height: 55px;
    width: 110px;
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
    display: flex;
    justify-content: center;
    margin-top: 5px;
    height: 55px;
    width: 100%;
    background-color: var(--color--thirdary);
    border-radius: 10px;
    box-shadow: 5px 5px 5px var(--color-primary);
    img {
      padding: 5px;
      height: 55px;
      width: 110px;
    }
  }
`;
