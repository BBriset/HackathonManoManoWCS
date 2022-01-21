import styled from 'styled-components';

const SFromHeader = styled.header`
  height: 132px;
  width: 100%;
  z-index: 2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.103);
  background-color: white;
  a:nth-child(1) {
    padding-left: 8px;
    padding-top: 4px;
    display: flex;
  }
  img {
    height: 40px;
    width: 126px;
  }
  .first {
    height: 44px;
    display: flex;
    justify-content: space-between;
  }
  .second {
    padding-top: 0;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .button-burger {
    display: flex;
    flex-direction: column;
    margin-bottom: 3px;
    cursor: pointer;
  }
  span {
    background-color: black;
    width: 18px;
    height: 2px;
    margin-top: 3px;
    margin-left: 10px;
    margin-right: 0px;
    @media (max-width: 376px) {
      margin-right: 10px;
    }
  }

  .first input {
    height: 38px;
    width: 120px;
    background-color: white;
    border-width: 1px;
    border-style: none;
    margin-top: 4px;
    font-size: 15px;
    font-weight: 600;
    color: #838383;
    margin-bottom: 10px;
    :hover {
      cursor: pointer;
      background-color: #f0f0f0;
      color: #1e3c87;
      border-radius: 10px;
    }
  }

  .second input {
    width: 92%;
    height: 44px;
    border-radius: 37px;
    background-color: #fafafa;
    border-width: 1px;
    border-color: #e2e2e2;
    border-style: solid;
    padding-left: 12px;
    margin-right: 10px;
    margin-top: 3px;
    font-size: 15px;
    color: #838383;
    :hover {
      background-color: white;
      cursor: pointer;
    }
    @media (max-width: 376px) {
      width: 91%;
    }
  }

  .third {
    margin-right: 20px;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    color: blue;
    width: auto;
    overflow-x: scroll;
    white-space: nowrap;
    overflow-x: hidden;
  }
  li {
    margin-left: 40px;
    display: flex;
    cursor: pointer;
    margin-top: 20px;
    font-size: 12px;
    color: #1e3c87;
    font-weight: 600;
  }
  li:nth-child(1) {
    text-decoration: underline;
    font-weight: 1000;
    :hover {
      text-decoration: none;
    }
  }
`;

const Container = styled.div`
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  input:focus {
    outline: none !important;
  }
  /* .first:nth-child(1) {
    width: 350px;
  } */
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-self: center;
  width: 300px;
  height: 50px;
  /* .first:nth-child(1) {
    width: 350px;
  } */
  a {
    style: none;
  }
`;

export { SFromHeader, Container, Div };
