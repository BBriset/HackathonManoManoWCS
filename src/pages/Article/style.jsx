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
    width: 100%;
    height: auto;
    margin-top: 50px;
  }
  h1 {
    display: flex;
    text-align: center;
    margin-left: 15px;
    margin-right: 15px;
  }
`;

const Star1 = styled.div`
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
    color: red;
    cursor: pointer;
  }
  .rating2 {
    direction: rtl;
  }
  .rating2 a {
    float: none;
  }
`;

const AddQt = styled.div`
  display: flex;
  align-content: center;
  text-align: center;
  input {
    height: 40px;
    width: 50%;
  }
  button {
    height: 40px;
    width: 40px;
  }
`;
const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;

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
  }
  .buttonLink:hover {
    background-color: #12ccb4;
    transition: background-color 0.3s ease-in;
  }
`;
export { Star1, AddQt, Globale, Button };
