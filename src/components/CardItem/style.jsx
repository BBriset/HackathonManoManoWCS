import styled from 'styled-components';

const Card = styled.div`
  height: 290px;
  width: 210px;
  padding: 8px 16px 8px 16px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
  border-radius: 3px;
  img {
    height: 150px;
    width: 150px;
    margin: 0 auto 0 auto;
    padding: 0;
  }
  :hover {
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }
  @media (max-width: 1013px) {
    min-height: 290px;
  }
`;
const Div = styled.div`
  height: 36px;
  display: flex;
  flex-direction: column;
  width: 200px;
  h1 {
    font-size: 14px;
    margin: 0;
  }
  p {
    height: 18px;
    width: auto;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 200px;
    margin: 0 8px 0 0;
  }
`;

const Div2 = styled.div`
  padding-top: 5px;
  img {
    height: 16px;
    width: 105px;
    margin-left: 0;
  }
`;

const Div3 = styled.div`
  p {
    font-size: 24px;
    font-weight: bold;
    margin-top: 12px;
  }
`;

export { Card, Div, Div2, Div3 };
