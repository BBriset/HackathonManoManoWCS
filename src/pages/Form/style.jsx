import styled from 'styled-components';

export const SForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 1000px) {
  }
`;
export const STitle = styled.div`
  display: flex;
  justify-content: center;
  img {
    margin-right: 10px;
    width: 80px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
    :hover {
      box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.1);
      transition: box-shadow 0.3s ease;
    }
  }
  @media only screen and (max-width: 1000px) {
    h1 {
      text-align: center;
    }
    img {
      border-radius: 5px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
      :hover {
        box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.3s ease;
      }
    }
  }
`;
export const SCoordinate = styled.div`
  h2 {
    text-align: center;
  }
  hr {
    border: 1px solid var(--color--primary);
    width: 80vw;
    margin-top: 30px;
  }
  input {
    margin: 2px;
    width: 300px;
    height: 30px;
    font-size: 16px;
    margin-top: 10px;
    border-radius: 5px;
    border: solid 1px var(--color--primary);
  }
  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;

    hr {
      border: 1px solid var(--color--primary);
      width: 80vw;
      margin-top: 30px;
    }
  }
`;
export const ListImput = styled.div`
  @media only screen and (max-width: 1000px) {
    input {
      align-items: center;
      height: 30px;
      font-size: 16px;
      margin-top: 10px;
      border-radius: 5px;
      border: solid 1px var(--color--primary);
    }
    display: flex;
    flex-direction: column;
  }

  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
`;
export const SLivraison = styled.div`
  hr {
    margin-top: 30px;
    margin-bottom: 30px;
    border: 1px solid var(--color--primary);
    width: 80vw;
  }

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;

    hr {
      margin-top: 30px;
      margin-bottom: 30px;
      border: 1px solid var(--color--primary);
      width: 80vw;
    }
    h2 {
      margin: 0;
    }
    h3 {
      margin: 0;
    }
  }
`;
export const PointRelaisA = styled.div`
  @media only screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 5px;
    label {
      margin: 3px;
    }
    input {
      margin-right: 10px;
    }
  }
`;
export const SButton = styled.div`
  margin: 20px;
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
  @media only screen and (max-width: 1000px) {
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
      margin: 10px 0 30px 0;
      cursor: pointer;
    }
    button:hover {
      background-color: #25a59a;
    }
    button:active {
      background-color: #25a59a;
    }
  }
`;
