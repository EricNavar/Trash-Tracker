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
    height: 80,
    width: 180
  },
});

export default function Profile(props : any) {
  const classes = useStyles();

  var path1 = "./images/";
  var name = props.name;
  var path2 = ".jpg";
  var fileName = path1.concat(name);
  fileName = fileName.concat(path2);

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="h5" color="textSecondary" component="p">
            {props.score}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}