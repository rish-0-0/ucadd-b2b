import React from 'react';
import { connect } from 'react-redux';
import { Document, Page,pdfjs } from 'react-pdf';
import SectionTitle from '../../SectionTitle';


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
    button: {
        margin: theme.spacing(0),
        position:'fixed',
        bottom:'2.5%',
    },
    submitBtn: {
        margin:theme.spacing(1),
        position:'fixed',
        top:'1%',
        left:'90%',
    },
    leftColumn: {
        textAlign:'center',
        alignItems:'center',
    },
    table: {
        maxHeight:'100vh',
    },
}));
function Solve(props) {
    const classes=useStyles();
    const [numPages,setNumPages] = React.useState(null);
    const [page,setPage] = React.useState(1);
    const [mathAnswerHolder,setMathAnswerHolder] = React.useState({});
    const [physicsAnswerHolder,setPhysicsAnswerHolder] = React.useState({});
    const [chemAnswerHolder,setChemAnswerHolder] = React.useState({});
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
    return(
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

                <Typography>{page} of {numPages}</Typography>
                {page!== 1 ?<Button className={classes.button} variant="contained" color="primary" onClick={() => setPage(page-1)}>Previous page</Button>:null}
                {page!==numPages ? <Button className={classes.button} variant="contained" color="primary" onClick={() => setPage(page+1)}>Next Page</Button> : null}

            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Paper>
                    <SectionTitle>Choose the appropriate Answers</SectionTitle>
                    <Button className={classes.submitBtn} variant="contained" color="primary" onClick={() => {}}>Submit</Button>
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
    );
}
const mapStateToProps=(state) => {
    const { homeworkUrl } = state.data;
    return {
        homeworkUrl,
    };
};
export default connect(mapStateToProps)(Solve);