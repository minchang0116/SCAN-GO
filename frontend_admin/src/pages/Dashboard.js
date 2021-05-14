import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from '../Components/category/Chart';
import Deposits from '../Components/category/Deposits';
import ItemList from '../Components/category/ItemList';
import Outline from '../Components/outline/Outline';
import Copyright from '../Components/outline/Copyright';
import useStyles from '../css/useStyles';
import * as managingAPI from '../lib/api/managing';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {IconButton} from '@material-ui/core';
import {dateToString} from '../lib/function/dateToString';

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [paymentList, setPaymentList] = useState([]);
  const [curPaymentList, setCurPaymentList] = useState([]);
  const [deposit, setDeposit] = useState(0);
  const [page, setPage] = useState(0);
  const [specificDate, setSpecificDate] = useState(new Date());

  const loadData = async PAGE => {
    console.log('dashboard load');
    let response = await managingAPI.getRecentOrder(
      dateToString(specificDate),
      PAGE,
    );
    setPaymentList(response.data);
  };

  useEffect(() => {
    if (page === 0) {
      setCurPaymentList(paymentList);
    } else {
      setCurPaymentList(curPaymentList.concat(paymentList));
    }

    let sumDeposit = 0;
    for (let i = 0; i < paymentList.length; i++) {
      sumDeposit += paymentList[i].paymentAmount;
    }
    setDeposit(deposit + sumDeposit);
  }, [paymentList]);

  useEffect(() => {
    console.log('dashboard Page 변경');
    loadData(page);
  }, [page]);

  return (
    <div className={classes.root}>
      <Outline title={'Dashboard'} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart paymentList={curPaymentList} />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits totalPrice={deposit} specificDate={specificDate} />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {curPaymentList.length === 0 ? (
                  <>
                    <div className={classes.noPaymentList}>
                      구매 내역이 없습니다.
                    </div>
                  </>
                ) : (
                  <React.Fragment>
                    <ItemList paymentList={curPaymentList} />
                    <div className={classes.morePaymentListArea}>
                      <IconButton
                        aria-label="more"
                        className={classes.morePaymentListBtn}
                        onClick={() => setPage(page + 1)}>
                        <ArrowDropDownIcon />
                      </IconButton>
                    </div>
                  </React.Fragment>
                )}
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
