import styled from 'styled-components';

export const SForm = styled.div`
  @media only screen and (max-width: 1000px) {
    height: 300px;
    width: 100%;
    h1 {
      font-weight: bold;
      font-size: 14px;
    }

    h2 {
      font-weight: bold;
      font-size: 10px;
    }
    p {
      font-size: 9px;
    }
    article {
      padding: 10px;
      display: flex;
      justify-content: center;
    }
    .paymentBtn {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 8vh;
      width: 90vw;
      background: #53baad;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      text-decoration: none;
      margin-bottom: 4vh;
      color: black;
    }
  }
`;

export const SLivraison = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  text-align: center;

  h1 {
    font-weight: bold;
    font-size: 14px;
    h2 {
      font-weight: bold;
      font-size: 10px;
    }
    p {
      font-size: 9px;
    }
  }
`;
