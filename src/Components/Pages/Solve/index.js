import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Document, Page,pdfjs } from 'react-pdf';
import SectionTitle from '../../SectionTitle';

// Dialog Imports
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles(theme => ({
    root: {
        height:'100vh',
        overflow:'auto',
    },
    buttonLeft: {
        margin: theme.spacing(0),
        position:'fixed',
        bottom:'1.5%',
        left:'12.5%',
    },
    buttonRight:{
        position:'fixed',
        bottom:'1.5%',
        left:'21.5%',
    },
    submitBtn: {
        margin:theme.spacing(1),
        position:'fixed',
        top:'1%',
        left:'90%',
    },
    leftColumn: {
        padding:theme.spacing(1),
        textAlign:'center',
        alignItems:'center',
    },
    table: {
        maxHeight:'100vh',
    },
    numpages: {
        position:'fixed',
        bottom:'2.5%',
    },
}));


function Solve(props) {
    const classes=useStyles();
    const [numPages,setNumPages] = React.useState(null);
    const [page,setPage] = React.useState(1);
    const [mathAnswerHolder,setMathAnswerHolder] = React.useState({});
    const [physicsAnswerHolder,setPhysicsAnswerHolder] = React.useState({});
    const [chemAnswerHolder,setChemAnswerHolder] = React.useState({});
    const [openDialog,setOpenDialog] = React.useState(false);
    const [redirect,setRedirect]=React.useState(false);
    
    const noOfQuestions = 30;
    const options = {
        A:'A',
        B:'B',
        C:'C',
        D:'D',
    };
    let optionsArr = [];
    for(let i=0;i<noOfQuestions;++i) {
        optionsArr.push(options);
    }

    const handleMathChange = (e) => {
        let temp=mathAnswerHolder;
        temp[e.target.name]= e.target.value;
        setMathAnswerHolder(temp);
    };
    const handlePhysicsChange=(e) => {
        let temp=physicsAnswerHolder;
        temp[e.target.name] = e.target.value;
        setPhysicsAnswerHolder(temp);
    };
    const handleChemChange = (e) => {
        let temp = chemAnswerHolder;
        temp[e.target.name] = e.target.value;
        setChemAnswerHolder(temp);
    };
    if(redirect) {
        return <Redirect to='/practice'/>;
    }
    return(
        <React.Fragment>
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={12} sm={12} md={6} className={classes.leftColumn}>
                    <SectionTitle>Question Paper</SectionTitle>
                    <Document
                        file={props.homeworkUrl || localStorage.getItem('homeworkUrl')}
                        onLoadSuccess={({ numPages }) => {
                            setNumPages(numPages);
                        }}
                    >
                        <Page pageNumber={page} />
                    </Document>

                    <Typography className={classes.numpages} component="h2" variant="body1">Page:{page} of {numPages}</Typography>
                    {page!== 1 ?<Button className={classes.buttonLeft} variant="contained" color="primary" onClick={() => setPage(page-1)}>Previous page</Button>:null}
                    {page!==numPages ? <Button className={classes.buttonRight} variant="contained" color="primary" onClick={() => setPage(page+1)}>Next Page</Button> : null}

                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Paper>
                        <SectionTitle>Choose the appropriate Answers</SectionTitle>
                        <Button className={classes.submitBtn} variant="contained" color="primary" onClick={() => setOpenDialog(true)}>Submit</Button>
                        <Table className={classes.table} size='small'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Maths</TableCell>
                                    <TableCell>Physics</TableCell>
                                    <TableCell>Chemistry</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {optionsArr.map((item,index) => {
                                    return(
                                        <TableRow key={index}>
                                            <TableCell>
                                                <FormControl component="fieldset">
                                                    <FormLabel component="legend">{index+1}</FormLabel>
                                                    <RadioGroup aria-label="position" name={index+1} value={mathAnswerHolder[index+1] ? mathAnswerHolder[index+1] : null} onChange={(e) => handleMathChange(e)} row>
                                                        <FormControlLabel
                                                            name={index+1}
                                                            value={item.A}
                                                            label="A"
                                                            labelPlacement="start"
                                                            control={<Radio color="primary" />}
                                                        />
                                                        <FormControlLabel
                                                            name={index+1}
                                                            value={item.B}
                                                            label="B"
                                                            labelPlacement="start"
                                                            control={<Radio color="primary" />}
                                                        />
                                                        <FormControlLabel
                                                            name={index+1}
                                                            value={item.C}
                                                            label="C"
                                                            labelPlacement="start"
                                                            control={<Radio color="primary" />}
                                                        />
                                                        <FormControlLabel
                                                            name={index+1}
                                                            value={item.D}
                                                            label="D"
                                                            labelPlacement="start"
                                                            control={<Radio color="primary" />}
                                                        />
                                                    </RadioGroup>
                                                </FormControl>
                                            </TableCell>
                                            <TableCell>
                                                <FormControl component="fieldset">
                                                    <FormLabel component="legend">{index+1}</FormLabel>
                                                    <RadioGroup aria-label="position" name={index+1} value={physicsAnswerHolder[index+1] ? physicsAnswerHolder[index+1] : null} onChange={(e) => handlePhysicsChange(e)} row>
                                                        <FormControlLabel
                                                            name={index+1}
                                                            value={item.A}
                                                            label="A"
                                                            labelPlacement="start"
                                                            control={<Radio color="primary" />}
                                                        />
                                                        <FormControlLabel
                                                            name={index+1}
                                                            value={item.B}
                                                            label="B"
                                                            labelPlacement="start"
                                                            control={<Radio color="primary" />}
                                                        />
                                                        <FormControlLabel
                                                            name={index+1}
                                                            value={item.C}
                                                            label="C"
                                                            labelPlacement="start"
                                                            control={<Radio color="primary" />}
                                                        />
                                                        <FormControlLabel
                                                            name={index+1}
                                                            value={item.D}
                                                            label="D"
                                                            labelPlacement="start"
                                                            control={<Radio color="primary" />}
                                                        />
                                                    </RadioGroup>
                                                </FormControl>
                                            </TableCell>
                                            <TableCell>
                                                <FormControl component="fieldset">
                                                    <FormLabel component="legend">{index+1}</FormLabel>
                                                    <RadioGroup aria-label="position" name={index+1} value={chemAnswerHolder[index+1] ? chemAnswerHolder[index+1] : null} onChange={(e) => handleChemChange(e)} row>
                                                        <FormControlLabel
                                                            name={index+1}
                                                            value={item.A}
                                                            label="A"
                                                            labelPlacement="start"
                                                            control={<Radio color="primary" />}
                                                        />
                                                        <FormControlLabel
                                                            name={index+1}
                                                            value={item.B}
                                                            label="B"
                                                            labelPlacement="start"
                                                            control={<Radio color="primary" />}
                                                        />
                                                        <FormControlLabel
                                                            name={index+1}
                                                            value={item.C}
                                                            label="C"
                                                            labelPlacement="start"
                                                            control={<Radio color="primary" />}
                                                        />
                                                        <FormControlLabel
                                                            name={index+1}
                                                            value={item.D}
                                                            label="D"
                                                            labelPlacement="start"
                                                            control={<Radio color="primary" />}
                                                        />
                                                    </RadioGroup>
                                                </FormControl>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                        
                    </Paper>
                </Grid>
            </Grid>
            <Dialog
                open={openDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Confirm Submission</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Would you like to submit and quit?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)} color="primary">Cancel</Button>
                    <Button onClick={() => {
                        setOpenDialog(false);
                        setRedirect(true);                        
                    }} color="secondary">Yes</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
const mapStateToProps=(state) => {
    const { homeworkUrl } = state.data;
    return {
        homeworkUrl,
    };
};
export default connect(mapStateToProps)(Solve);