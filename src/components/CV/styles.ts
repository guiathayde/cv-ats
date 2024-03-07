import styled from 'styled-components';

export const Container = styled.div`
  width: 21cm;
  min-height: 29.7cm;
  padding: 2cm;
  margin: 1cm auto;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  /* Media query for mobile devices */
  @media (max-width: 768px) {
    width: auto;
    padding: 20px;
    margin: 20px auto;
  }
`;
