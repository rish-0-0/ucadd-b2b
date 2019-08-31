import React from 'react';
import { connect } from 'react-redux';
import AppLayout from '../../Layout/AppLayout';
import HomeworkTable from './homeworkTable';
import SectionTitle from '../../SectionTitle';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  container: {
    padding:theme.spacing(1),
    margin:theme.spacing(1),
  },
}));
function PracticeSection(props) {
  const classes = useStyles();
  return(
    <AppLayout title="Practice">
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={1}>
          <Grid item md={8}>
            <Paper>
              <HomeworkTable />
            </Paper>
          </Grid>
          <Grid item md={4}>
            <Paper>
              <SectionTitle>Accuracy</SectionTitle>
              <Typography>64%</Typography>
            </Paper>
            <Paper>
              <SectionTitle>No. of videos watched</SectionTitle>
              <Typography>12</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </AppLayout>
  );
}
const mapStateToProps = (state) => {
  const { line } = state.data;
  console.log(line);
  return {
    line,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {

  };
};
export default connect(mapStateToProps,mapDispatchToProps)(PracticeSection);