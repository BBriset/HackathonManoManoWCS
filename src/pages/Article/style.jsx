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
  flex-direction:column;
  align-items:center;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;

  button {
    border-top: 1px solid #96d1f8;
    background: #65a9d7;
    );
    background: -webkit-linear-gradient(top, #3e779d, #65a9d7);
    background: -moz-linear-gradient(top, #3e779d, #65a9d7);
    background: -ms-linear-gradient(top, #3e779d, #65a9d7);
    background: -o-linear-gradient(top, #3e779d, #65a9d7);
    padding: 11.5px 23px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    -webkit-box-shadow: rgba(0, 0, 0, 1) 0 1px 0;
    -moz-box-shadow: rgba(0, 0, 0, 1) 0 1px 0;
    box-shadow: rgba(0, 0, 0, 1) 0 1px 0;
    text-shadow: rgba(0, 0, 0, 0.4) 0 1px 0;
    color: white;
    font-size: 20px;
    font-family: Georgia, serif;
    text-decoration: none;
    vertical-align: middle;
    width:70%;
    height:50px;
    margin: 0.5em;
  
    
  }
  button:hover {
    border-top-color: #28597a;
    background: #28597a;
    color: #ccc;
  }
  button:active {
    border-top-color: #1b435e;
    background: #1b435e;
  }
`;
export { Star1, AddQt, Globale, Button };
