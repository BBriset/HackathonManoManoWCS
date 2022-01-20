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
  p {
  }
`;

const Section = styled.section`
  height: 394px;
  margin-left: 25px;
`;

const Row = styled.section`
  height: 56px;
  div:nth-child(1) {
    height: 28px;
    margin: 0;
    font-size: 20px;
    line-height: 28px;
    font-weight: bold;
    color: #0c193a;
  }
  div:nth-child(2) {
    height: 20px;
  }
`;

export { Container, Section, Row };
