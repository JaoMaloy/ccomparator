import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'black',
    color: 'white',
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  }
});

const HomeDescriptions = () => {
  const classes = useStyles();

  return (
    <div style={{ maxWidth: 1200 }} className='center'>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Casual
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Comparison Mode
          </Typography>
          <Typography variant="body2" component="p">
            Casually browse through images you upload, or better yet,
            <br/>
            sit back and watch your images as they play automatically!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Try it!</Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Casual
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Comparison Mode
          </Typography>
          <Typography variant="body2" component="p">
            Casually browse through images you upload, or better yet,
            <br/>
            sit back and watch your images as they play automatically!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Try it!</Button>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Casual
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Comparison Mode
          </Typography>
          <Typography variant="body2" component="p">
            Casually browse through images you upload, or better yet,
            <br/>
            sit back and watch your images as they play automatically!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Try it!</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default HomeDescriptions;