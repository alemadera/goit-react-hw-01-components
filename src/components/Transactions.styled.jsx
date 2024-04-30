import styled from 'styled-components';

export const TransactionsContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  min-width: 279px; 
  margin: 0px auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
`;

export const TableHeader = styled.thead`
  background-color: #f2f2f2;
  text-align: center;
`;

export const TableRow = styled.tr`
  background-color: ${props => props.even ? '#f9f9f9' : '#ffffff'};
  text-align: center;
  transition: background-color 0.3s ease; 
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const TableData = styled.td`
  padding: 10px;
  font-size: 12px;
  border: 1px solid #ddd;
`;

export const TableHeaderCell = styled.th`
  padding: 10px;
  order: 1px solid #ddd;
`;