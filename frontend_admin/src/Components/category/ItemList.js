import React from 'react';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../outline/Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return {id, date, name, shipTo, paymentMethod, amount};
}

const rows = [
  createData(
    0,
    '1',
    '2021050312000000',
    '1',
    '1',
  ),
  createData(
    0,
    '1',
    '2021050312000000',
    '1',
    '1',
  ),
  createData(
    0,
    '1',
    '2021050312000000',
    '1',
    '1',
  ),
  createData(
    0,
    '1',
    '2021050312000000',
    '1',
    '1',
  ),
  createData(
    0,
    '1',
    '2021050312000000',
    '1',
    '1',
  ),
  createData(
    0,
    '1',
    '2021050312000000',
    '1',
    '1',
  ),
  
];

const ItemList = () => {
  return (
    <>
      <React.Fragment>
        <Title>검색</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>결제 번호</TableCell>
              <TableCell>구매 날짜</TableCell>
              <TableCell>매장 번호</TableCell>
              <TableCell>고객 번호</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.shipTo}</TableCell>
                <TableCell>{row.paymentMethod}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    </>
  );
};

export default ItemList;
