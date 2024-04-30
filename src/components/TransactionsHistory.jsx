import React from 'react';
import {
  TransactionsContainer,
  Table,
  TableHeader,
  TableRow,
  TableData,
  TableHeaderCell
} from './Transactions.styled';

const TransactionHistory = ({ items }) => {
  return (
    <TransactionsContainer>
      <Table>
        <TableHeader>
          <tr>
            <TableHeaderCell>Type</TableHeaderCell>
            <TableHeaderCell>Amount</TableHeaderCell>
            <TableHeaderCell>Currency</TableHeaderCell>
          </tr>
        </TableHeader>
        <tbody>
          {items.map((item, index) => (
            <TableRow key={item.id} even={index % 2 === 0}>
              <TableData>{item.type}</TableData>
              <TableData>{item.amount}</TableData>
              <TableData>{item.currency}</TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TransactionsContainer>
  );
};

export default TransactionHistory;
