import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import title from './app-title.png';

const useStyles = makeStyles({
  jumbotron: {
    color: 'white',
    paddingBottom: '35px',
  },
  typography: {
    fontWeight: 'lighter',
  },
});

const HomeHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.jumbotron}>
      <img alt="logo" src={title} />
      <Typography className={classes.typography} variant="h5" gutterBottom>
        {' '}
        {'Easy ways to compare your images'}{' '}
      </Typography>
    </div>
  );
};

export default HomeHeader;
