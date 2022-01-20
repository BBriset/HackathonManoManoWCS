import styled from 'styled-components';

const SCart = styled.section`
  .link {
    display: flex;
    text-decoration: none;
    color: black;
    align-items: center;
    margin-left: 10px;
    margin-top: 2vh;
    font-weight: bolder;
  }
  .buttonLink {
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
    transition: background-color 0.3s ease-in;
  }
  .buttonLink:hover {
    background-color: #12ccb4;
  }
  .item {
    display: flex;
    height: 15vh;
    width: 90vw;
    margin-bottom: 4vh;
    background: #505971;
    box-shadow: 0px 4px 4px #53baad;
    border-radius: 10px;
    padding: 10px;
    color: white;
    justify-content: space-around;
    font-weight: bold;
    font-size: 12px;
    img {
      width: 33vw;
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
  }
  .MuiTabPanel-root {
    display: flex;
    width: 100vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: none;
  }

  .reassuranceSection {
    max-width: 1192px;
    margin-left: 2vw;
    margin-right: auto;
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
    }
    p {
      margin-top: 0;
      margin-bottom: 8px;
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      color: #0c193a;
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
  }
`;
export default SCart;
