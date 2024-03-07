import styled from 'styled-components';

interface ListProps {
  columns?: number;
}

export const Container = styled.section`
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
  margin-bottom: 15px;
`;

export const List = styled.ul<ListProps>`
  ${({ columns }) => {
    if (columns) {
      return `
        display: grid;
        grid-template-columns: repeat(${columns}, 1fr);
        gap: 10px;
      `;
    }
  }}
`;
