import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Outline from '../Components/outline/Outline';
import Copyright from '../Components/outline/Copyright';
import useStyles from '../css/useStyles';
import SearchContainer from '../containers/category/SearchContainer';

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Outline title={'Search'} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <SearchContainer />
          <Grid container spacing={3}>
            {/* 내용 입력 */}
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
