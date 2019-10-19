import React from 'react';
import Typography from '@material-ui/core/Typography';
import Profile from './Profile'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  header: {
    padding: '10px',
  },
  profile: {
    display: 'flex',
  },
}));

export default function ScorePage() {
  const classes = useStyles();
  
  return (
    <div>
      <Typography gutterBottom variant="h5" component="h1">
        Score Page
      </Typography>
      <div className={classes.profile}>
        <Profile name = 'Eric' score='2'/>
        <Profile name = 'Dad' score='1'/>
      </div>
    </div>
  );
}