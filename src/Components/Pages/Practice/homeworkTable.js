import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getHomeworkUrl } from '../../../Actions/userData/getHomework';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    progress: {
        margin: theme.spacing(2),
    },
    button: {
        margin:theme.spacing(1),
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
}));

function HomeworkTable(props) {
    const classes = useStyles();
    const { filename,folder } = props;
    useEffect(() => {
        props.getHomeworkUrl(folder,filename);
    },[filename,folder]);
    return(
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Assignments</TableCell>
                    <TableCell>File</TableCell>
                    <TableCell>Dated</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Go To</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Testing PDF</TableCell>
                    <TableCell>{!props.loading && !props.error ? <Button variant="contained" color="default" className={classes.button}>
                        Open
                        <a href={props.homeworkUrl} rel="noopener noreferrer" target="_blank"><OpenInNewIcon className={classes.rightIcon} /></a>                        
                    </Button> : <CircularProgress className={classes.progress} />}</TableCell>
                    <TableCell>1/09/2019</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell><Link to='/solve'>Solve</Link></TableCell>
                </TableRow>
            </TableBody>
            {props.error ? <TableBody>
                <TableRow>
                    <TableCell>An error ocurred</TableCell>
                </TableRow>
            </TableBody> : null}
        </Table>
    );
}
const mapStateToProps = (state) => {
    const { loading,homeworkUrl,error } = state.data;
    const folder='PDF';
    const filename='pdf_test.pdf';
    return {
        folder,filename,
        loading,homeworkUrl,error,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getHomeworkUrl: (folder,filename) => {dispatch(getHomeworkUrl(folder,filename))},
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(HomeworkTable);