import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
declare var require: any

const useStyles = makeStyles({
  card: {
    margin: '25px',
  },
  media: {
    height: 200,
    width: 180
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require ("./images/ProfilePic.jpg")}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Name
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Score
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}