import React from 'react';
import { connect } from 'react-redux';

import AppLayout from '../../Layout/AppLayout';
import MediaCard from '../../Layout/Card';
// Image imports
import functions from '../../../Images/CardImg/functions.png';
import circles from '../../../Images/CardImg/circles.png';
import compound from '../../../Images/CardImg/compound.png';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        padding:theme.spacing(2),
    },
}));


function Watch(props) {
    const classes = useStyles();
    return(
        <AppLayout title="Watch">
            <Container maxWidth="lg" className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        
                        <MediaCard title="Functions Introduction"
                            image={functions}
                            imageTitle='Functions Introduction'
                            content="Comparison between functions and relations. Simple functions"
                            videoId={'M11FUNC01'}
                        />
                        
                    </Grid>
                    <Grid item xs={12} md={4}>
                        
                        <MediaCard title="Compound Angles 8"
                            image={compound}
                            imageTitle='Compound Angles 8'
                            content="Compound angles and periodic functions."
                            videoId={'M11CMPD08'}
                        />

                    </Grid>
                    <Grid item xs={12} md={4}>
                        
                        <MediaCard title="Circles 46"
                            image={circles}
                            imageTitle='Radical Center'
                            content="Understanding the Radical Center. It's properties and how to effectively use it."
                            videoId={'M12CIRC46'}
                        />

                    </Grid>
                </Grid>
            </Container>
        </AppLayout>
    );
}
const mapStateToProps = (state) => {
    return {

    };
};
export default connect(mapStateToProps)(Watch);