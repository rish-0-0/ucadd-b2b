import React, { useEffect } from 'react';
// libraries and module imports
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';

// Action imports
import { getVideoUrl } from '../../../Actions/userData/getVideoUrl';
// File imports
import AppLayout from '../../Layout/AppLayout';
import SectionTitle from '../../SectionTitle';

// material-ui imports
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Dialog Imports
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
    root: {
        padding:theme.spacing(2),
    },
    paper: {
        padding:theme.spacing(1),
        textAlign:'center',
    },
    typo: {
        margin:theme.spacing(1),
    },
}));

const playerWidth = 1100;
const playerHeight = Math.round((playerWidth*9)/16);

function VideoPlayer(props) {
    console.log(props.videoId,'VIDEO_ID');
    const classes = useStyles();
    const [practiceQuestion,setPracticeQuestion] = React.useState(false);
    const [answer,setAnswer] = React.useState('');
    const [practiceQuestionSolved,setPracticeQuestionSolved] = React.useState(false);
    useEffect(() => {
        props.getVideoUrl(props.videoId);
    },[props.videoId]);
    return(
        <AppLayout title="Video Player">
            <Container className={classes.root} maxWidth="lg">
                <Grid container spacing={1}>
                    <Grid item md={12}>
                        <Paper className={classes.paper}>
                            <SectionTitle>Video</SectionTitle>
                            <ReactPlayer width={playerWidth} height={playerHeight} url={props.videoPlaying} onEnded={()=>setPracticeQuestion(true)} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper className={classes.paper}>
                            <Button variant="contained" color="secondary" onClick={() => setPracticeQuestion(true)}>Solve Practice Question</Button>
                            {practiceQuestionSolved ? <Typography className={classes.typo} variant="body2" component="h2">Already Solved</Typography> : null}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Dialog
                open={practiceQuestion}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Practice Question</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {props.practiceQuestionContent}
                    </DialogContentText>
                    <TextField
                        autoFocus
                        fullWidth
                        onChange={(e)=>setAnswer(e.target.value)}
                        value={answer}
                        margin="dense"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setPracticeQuestion(false)} color="primary">Cancel</Button>
                    <Button onClick={() => {
                        setPracticeQuestionSolved(true);
                        setPracticeQuestion(false);                       
                    }} color="secondary">Submit</Button>
                </DialogActions>
            </Dialog>
        </AppLayout>
    );
}
const mapStateToProps = (state) => {
    const { videoPlaying,practiceQuestionContent } = state.data;
    return {
        videoPlaying,
        practiceQuestionContent,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getVideoUrl: (id) => {dispatch(getVideoUrl(id))},
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(VideoPlayer);
