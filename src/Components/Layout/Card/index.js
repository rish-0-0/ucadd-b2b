import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import Link from '@material-ui/core/Link';
import Fab from '@material-ui/core/Fab';
// Icon imports
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyles = makeStyles({
  card: {
    maxWidth:'100%',
  },
  media: {
    height: 245,
  },
  router: {
    color:'inherit',
    textDecoration:'none',
    padding:0,
  },
  linkButton: {
    padding:0,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.imageTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Fab color="primary" aria-label="play-button">
          <RouterLink className={classes.router} to={'/watch/'+props.videoId}>
            <PlayArrowIcon/>              
          </RouterLink>
        </Fab>
        <Fab color="primary" aria-label="bookmark">
            <BookmarkBorderIcon/>
        </Fab>
      </CardActions>
    </Card>
  );
}