import styled from 'styled-components';

const Container = styled.div`
  width: 1192px;
  display: flex;
  margin: auto;
  flex-direction: column;
  img {
    display: flex;
    margin: auto;
    margin-top: 20px;
    border-radius: 10px;
    padding-bottom: 32px;
  }
`;

const Div = styled.section`
  @media (max-width: 1013px) {
    width: 100%;
  }
  img:nth-child(1) {
    @media (max-width: 1013px) {
      padding-bottom: 10px;
      margin: 0;
      width: 100vw;
      min-height: 225px;
    }
  }
`;

const Section = styled.section`
  height: 394px;
  margin-left: 25px;
  @media (max-width: 1013px) {
    margin-left: 0;
  }
`;

const Row = styled.section`
  height: 56px;
  margin-bottom: 10px;
  div:nth-child(1) {
    height: 28px;
    margin: 0;
    font-size: 20px;
    line-height: 28px;
    font-weight: bold;
    color: #0c193a;
    @media (max-width: 1013px) {
      margin-left: 20px;
    }
  }
  div:nth-child(2) {
    height: 20px;
    @media (max-width: 1013px) {
      margin-left: 20px;
    }
  }
  img {
    @media (max-width: 1013px) {
      padding-bottom: 10px;
      margin: 0;
      width: 100vw;
      min-height: 150px;
    }
  }
`;

const Row2 = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  margin-right: 10px;
  width: 1192px;
  @media (max-width: 376px) {
    width: 375px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin-right: 0;
  }
`;

export { Container, Section, Row, Row2, Div };
