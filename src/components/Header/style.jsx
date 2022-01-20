import styled from 'styled-components';

const SFromHeader = styled.header`
  border: dashed red;
  height: 132px;
  width: 100%;

  img {
    height: 36px;
    width: 110px;
  }
  .first {
    border: dashed yellow;
    height: 44px;
    display: flex;
    justify-content: space-between;
  }
  .second {
    padding-top: 0;
    border: dashed green;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .button-burger {
    display: flex;
    flex-direction: column;
  }
  span {
    background-color: black;
    width: 30px;
    height: 7px;
    margin-top: 1px;

    border-radius: 50%;
  }

  .first-input {
    height: 26px;
    -webkit-border-radius: 14px 14px 14px 14px;
    -moz-border-radius: 14px 14px 14px 14px;
    border-radius: 14px 14px 14px 14px;
  }
  .second input {
    width: 80%;
    height: 90%;
    -webkit-border-radius: 14px 14px 14px 14px;
    -moz-border-radius: 14px 14px 14px 14px;
    border-radius: 14px 14px 14px 14px;
  }
  .third {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    color: blue;
    width: auto;

    overflow-x: scroll;
  }
  li {
    margin-left: 50px;
    display: flex;
  }
`;

export default SFromHeader;
