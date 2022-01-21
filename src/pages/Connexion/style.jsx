import styled from 'styled-components';

const SFromInscript = styled.form`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 1013px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  .conn{
    display: flex;
    align-items: center;
  flex-direction: column;
  @media (min-width: 1013px) {
    width: 25vw;
    font-size:25px;
    height: 60vh;
  }
  }
  .ins{
    display: flex;
    align-items: center;
  flex-direction: column;
  @media (min-width: 1013px) {
    width: 25vw;
    height: 60vh;
    font-size:25px
  }
  }
  }
  h1 {
    margin-top: 50px;
  }
  h2 {
    font-size: medium;
    @media (min-width: 1013px) {   
    font-size:25px
  }
  }
  .div1,
  .div2 {
    font-size: small;
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: space-between;
    align-items: center;
  }
  input {
    border-radius: 25px;
    height: 75%;
    border: none;
    @media (min-width: 1013px) {   
    font-size:25px
  }
  }
  .buttonLink {
    margin-top: 50px;
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
      height: 120px;
      font-size: 24px;
    }
  }
  .buttonLink:hover {
    background-color: #25a59a;
  }
  .buttonLink:active {
    background-color: #25a59a;
  }
  .inscription {
    margin-top:50px;
    margin-bottom:216px;
    display:flex;
    align-items: center;
    justify-content: center;
  }
`;

export default SFromInscript;
