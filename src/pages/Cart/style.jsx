import styled from 'styled-components';

const SCart = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .panel {
    height: 72vh;
  }
  .context {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media (min-width: 1013px) {
      min-height: 80vh;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 100vw;
    }
  }
  .mainCard {
    @media (min-width: 1013px) {
      width: 50vw;
      height: 70vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 2vw;
      background-color: white;
    }
  }
  .total {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 1013px) {
      width: 30vw;
      padding: 10px;
      background-color: white;
      height: 60vh;
      border-radius: 10px;
    }
  }

  .link {
    text-decoration: none;
    color: black;
    margin-left: -50vw;
    margin-top: 2vh;
    font-weight: bolder;
    @media (min-width: 1013px) {
      margin-left: -70vw;
      margin-top: 5vh;
    }
  }
  .buttonLink {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8vh;
    width: 90vw;
    background: #29b9ad;
    border-radius: 5px;
    text-decoration: none;
    margin-bottom: 4vh;
    color: #0c193a;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s ease-in;
    @media (min-width: 1013px) {
      width: 50vh;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
  .buttonLink:hover {
    background-color: #25a59a;
  }
  .buttonLink:active {
    background-color: #25a59a;
  }
  .item {
    display: flex;
    height: 20vh;
    width: 90vw;
    margin: 2vh 4vh 2vh 4vh;
    background: #505971;
    box-shadow: 0px 4px 4px #53baad;
    border-radius: 10px;
    padding: 10px;
    color: white;
    justify-content: space-around;
    font-weight: bold;
    font-size: 12px;
    @media (min-width: 1013px) {
      margin: 20vh 4vh 2vh 4vh;
    }
    img {
      width: 33vw;
      @media (min-width: 1013px) {
        width: 15vh;
      }
    }
    .description {
      width: 50vw;
      padding: 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .itemDetails {
        margin: 0;
        height: 6vh;
      }
    }
    @media (min-width: 1013px) {
      width: 45vw;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
  .MuiTabPanel-root {
    display: flex;
    width: 100vw;
    min-width: 70vh;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: none;
    @media (min-width: 1013px) {
      width: 50vw;
      h2 {
        display: none;
      }
    }
  }
  .MuiBox-root {
    @media (min-width: 1013px) {
      width: 50vw;
    }
  }

  .reassuranceSection {
    max-width: 100wv;
    margin: 2vh;
    @media (min-width: 1013px) {
      width: 100vw;
      height: 40vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
  }

  .reassuranceTitle {
    margin-bottom: 16px;
    font-size: 20px;
    line-height: 28px;
    font-weight: 700;
    color: #0c193a;
  }
  .reassuranceList {
    margin: 0;
    padding: 0;
    list-style: none;
    @media (min-width: 1013px) {
      width: 100vw;
      height: 30vh;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
  .reassuranceDescription {
    margin-left: 16px;
    h3 {
      margin-top: 8px;
      margin-bottom: 0;
      font-size: 16px;
      line-height: 24px;
      font-weight: 600;
      color: #0c193a;
      @media (min-width: 1013px) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    p {
      margin-top: 0;
      margin-bottom: 8px;
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      color: #0c193a;
      @media (min-width: 1013px) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .reassuranceItem {
    margin-bottom: 12px;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    @media (min-width: 1013px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 30vw;
      justify-content: space-between;
    }
  }
`;
export default SCart;
