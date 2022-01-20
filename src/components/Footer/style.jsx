import styled from 'styled-components';

const Footer1 = styled.div`
  height: 361px;
  background-color: #505971;
  color: white;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1013px) {
    height: 658px;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding: 24px 16px;
  width: 1060px;
  @media (max-width: 1013px) {
    flex-direction: column;
  }
  p {
    width: 150px;
  }
  p:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Footer2 = styled.div`
  height: 79px;
  background-color: #0c193a;
  padding: 16px;
  display: flex;
  flex-direction: column;
  text-align: center;
  p {
    height: 19px;
    color: white;
    font-size: 15px;
    margin: 0 0 10px 0;
  }
  div {
    height: 19px;
    color: white;
    font-size: 15px;
    flex-direction: row;
    text-align: none;
  }
  @media (max-width: 1013px) {
    flex-direction: column;
    height: 99px;
    padding-left: 10%;
    padding-right: 10%;
    text-align: center;
  }
  @media (max-width: 614px) {
    flex-direction: column;
    height: 130px;
  }
`;

const Col = styled.div`
  width: 332px;
  max-width: 332px;
  height: 313px;
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 17px;
    margin: 0;
    font-weight: bold;
  }
  h4 {
    font-size: 14px;
    margin: 0;
    font-weight: 550;
  }
  p {
    font-size: 12px;
    padding-top: 4px;
    padding-bottom: 4px;
    margin: 0;
    @media (max-width: 1013px) {
      display: none;
    }
  }
  @media (max-width: 1013px) {
    height: 65px;
  }
`;

const Col2 = styled.div`
  width: 332px;
  max-width: 332px;
  height: 313px;
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 16px;
    margin: 0;
    font-weight: bold;
  }
  h4 {
    font-size: 14px;
    margin: 0;
    font-weight: 600;
  }
  p {
    font-size: 12px;
    padding-top: 4px;
    padding-bottom: 4px;
    margin: 0;
    @media (max-width: 1013px) {
      display: none;
    }
  }
  @media (max-width: 1013px) {
    height: 170px;
    justify-content: space-around;
  }
`;

const Col3 = styled.div`
  width: 332px;
  max-width: 332px;
  height: 313px;
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 16px;
    margin: 0;
    font-weight: bold;
  }
  h4 {
    font-size: 14px;
    margin: 0;
    font-weight: 600;
  }
  p {
    font-size: 12px;
    padding-top: 4px;
    padding-bottom: 4px;
    margin: 0;
  }
  @media (max-width: 1013px) {
    order: 1;
  }
`;

const TitleF = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  p {
    padding-right: 3px;
    padding-left: 3px;
    white-space: nowrap;
  }
  p:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  @media (max-width: 1013px) {
    flex-wrap: wrap;
    height: auto;
  }
`;

const Title = styled.div`
  height: 52px;
  h4 {
    font-weight: 550;
  }
  /* @media (max-width: 1013px) {
    order: 5;
  } */
`;

const Title2 = styled.div`
  height: 52px;
  h4 {
    font-weight: 550;
  }
  /* @media (max-width: 1013px) {
    order: 6;
  } */
`;

const Title3 = styled.div`
  height: 52px;
  h4 {
    font-weight: 550;
  }
  @media (max-width: 1013px) {
    height: 65px;
  }
`;

const Title4 = styled.div`
  height: 52px;
  margin-top: 8px;
  h4 {
    font-weight: 550;
  }
  @media (max-width: 1013px) {
    order: 3;
    h4 {
      padding-bottom: 10px;
    }
  }
`;

const SubTitle = styled.div`
  height: 52px;
  padding-top: 24px;
  /* @media (max-width: 1013px) {
    order: 7;
  } */
`;

const Row = styled.div`
  height: 32px;
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  img {
    height: 32px;
    cursor: pointer;
  }
  @media (max-width: 1013px) {
    margin-bottom: 20px;
  }
`;

const Row2 = styled.div`
  height: 41px;
  padding-top: 8px;
  width: 180px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  img {
    height: 37px;
    width: 116px;
  }
  img:nth-child(2) {
    margin-left: 8px;
  }
  /* @media (max-width: 1013px) {
    order: 2;
  } */
`;

const Row3 = styled.div`
  height: 24px;
  width: 180px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-top: 30px;
  img {
    width: 16px;
    height: 22px;
    margin-top: 3px;
  }
  p {
    font-size: 16px;
    margin-left: 10px;
    font-weight: 900;
  }
`;

const Row4 = styled.div`
  height: 32px;
  width: 328px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 22px;
  img:nth-child(1) {
    height: 32px;
    width: 48px;
  }
`;

const Row5 = styled.div`
  height: 42px;
  width: 255px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  div {
    width: 32px;
    height: 32px;
  }
  img {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
  @media (max-width: 1013px) {
    order: 4;
  }
`;

export {
  Footer1,
  Footer2,
  Main,
  Col,
  Col2,
  Col3,
  Title,
  Title2,
  Title3,
  Title4,
  TitleF,
  SubTitle,
  Row,
  Row2,
  Row3,
  Row4,
  Row5,
};
