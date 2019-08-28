import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

function SimpleTable(props) {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    {props.columns.map((item,index) => {
                        return(                       
                            <TableCell key={index}>{item}</TableCell>                        
                        );
                    })}
                </TableRow>
            </TableHead>
            <TableBody>
                {/* <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                </TableRow> */}
                {props.rows.map((item,index) => {
                    return(
                        <TableRow key={index}>
                            {props.rows[index].map((cellElement,i) => {
                                return(
                                    <TableCell key={index+i*i+index+index*(i+1)}>
                                        {cellElement}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
        </Paper>
    );
}
const mapStateToProps = (state) => {
    const { email, name, emailVerified } = state.user;
    return {
        email,
        name,
        emailVerified,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {

    };
};
export default connect(mapStateToProps,mapDispatchToProps)(SimpleTable);
