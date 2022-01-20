import styled from 'styled-components';

const SCart = styled.section`
  .reassuranceSection {
    max-width: 1192px;
    margin-left: auto;
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
    h3{
      margin-top: 8px;
  margin-bottom: 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: #0c193a;
      }
    p{
      margin-top: 0;
      margin-bottom: 8px;
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      color: #0c193a;}
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
