import styled from 'styled-components';

const SFromInscript = styled.form`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-top: 100px;
  }
  h2 {
    font-size: medium;
  }
  .div1,
  .div2 {
    font-size: small;
    display: flex;
    flex-direction: row;
    width: 85%;
    justify-content: space-between;
    align-items: center;
  }
  input {
    border-radius: 25px;
    height: 75%;
    border: none;
  }
  .buttonLink {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6vh;
    width: 90vw;
    background: #53baad;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    text-decoration: none;
    margin-bottom: 4vh;
    color: black;
  }
`;

export default SFromInscript;
