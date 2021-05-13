import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../outline/Title';
import {Button} from '@material-ui/core';

const onClickedDetail = item => {
  console.log(item);
};

const ItemList = ({paymentList}) => {
  return (
    <>
      <React.Fragment>
        <Title>검색</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>결제 번호</TableCell>
              <TableCell>매장 이름</TableCell>
              <TableCell>구매 날짜</TableCell>
              <TableCell>거래 금액</TableCell>
              <TableCell>지불 방식</TableCell>
              <TableCell>거래 결과</TableCell>
              <TableCell style={{paddingLeft: 31}}>거래 물품</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paymentList.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.storedId}</TableCell>
                <TableCell>{item.txDateTime}</TableCell>
                <TableCell>{item.paymentAmount}</TableCell>
                <TableCell>{item.paymentPlan}</TableCell>
                <TableCell>{item.paymentResult}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    onClick={() => onClickedDetail(item.paymentDetail)}>
                    상세보기
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    </>
  );
};

export default ItemList;
