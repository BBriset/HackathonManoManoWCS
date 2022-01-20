import styled from 'styled-components';

const Globale = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  button {
    height: 35px;
    width: 35px;
  }
  img {
    width: 375px;
    height: 300px;
    margin-top: 1px;
    z-index: 3;
    @media (min-width: 1020px) {
      display: flex;
      justify-content: center;
      margin-right: auto;
      margin-left: auto;
    }
  }
  h1 {
    display: flex;
    text-align: center;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 0;
    font-size: 20px;
    color: #0c193a;
  }
`;

const Star1 = styled.div`
  height: 62px;
  margin-bottom: 10px;
  a {
    color: #aaa;
    text-decoration: none;
  }
  a:hover,
  a:focus {
    text-decoration: underline;
  }

  a[href*='intent'] {
    display: inline-block;
  }

  .rating {
    width: 100%;
    margin: 0 auto 1em;
    font-size: 45px;
    overflow: hidden;
  }
  .rating a {
    float: right;
    color: #aaa;
    text-decoration: none;
    -webkit-transition: color 0.4s;
    -moz-transition: color 0.4s;
    -o-transition: color 0.4s;
    transition: color 0.4s;
  }
  .rating a:hover,
  .rating a:hover ~ a,
  .rating a:focus,
  .rating a:focus ~ a {
    color: orange;
    cursor: pointer;
  }
  .rating2 {
    direction: rtl;
  }
  .rating2 a {
    float: none;
  }
`;
const Div = styled.div`
  width: 343px;
  height: 302px;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
  padding: 16px;
  :hover {
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }
  img {
    height: 100px;
    width: 300px;
  }
`;

const AddQt = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  height: 45px;
  flex-direction: row;
  font-size: 18px;
  input {
    height: 30px;
    width: 34px;
    border: none;
    font-size: 18px;
    font-weight: bold;
    padding-left: 10px;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
  button {
    height: 40px;
    width: 40px;
    background: none;
    color: #0c193a;
    border: none;
    padding-bottom: 10px;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
  h2 {
    width: 20px;
    font-weight: bold;
  }
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  margin-left: 65px;
  margin-right: 20px;
  width: 110px;
  p:nth-child(1) {
    font-size: 10px;
    height: 25px;
    margin-top: 23px;
    min-width: 35px;
  }
  p {
    font-size: 18px;
    color: #0c193a;
    margin-right: 10px;
  }
  h1 {
    font-size: 10px;
    height: 25px;
    margin-top: 23px;
    min-width: 35px;
    margin-right: 0;
  }
`;

const Count = styled.div`
  border: solid 1px #d1d1d1;
  border-radius: 3px;
  height: 42px;
  width: 125px;
  font-size: 25px;
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  margin-bottom: 10px;

  button {
    border: none;
    background-color: #29b9ad;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 5px;
    color: #0c193a;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    vertical-align: middle;
    width: 310px;
    height: 48px;
    margin: 10px 0 0 0;
    cursor: pointer;
  }
  button:hover {
    background-color: #25a59a;
  }
  button:active {
    background-color: #25a59a;
  }
`;
export { Star1, AddQt, Globale, Button, Div, Count, Div2 };
