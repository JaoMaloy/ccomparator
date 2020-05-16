import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './InfoCard.css'

var classNames = require('classnames');

const useStyles = makeStyles({
  typography: {
    color: '#1F7A8C',
    fontWeight: 'lighter'
  },
  content: {
    textAlign: 'center',
  },
  explore: {
    paddingTop: 40,
    fontWeight: 'normal',
    color: '#022B3A'
  }
});

const InfoCard = ({ title, description, onRouteChange}) => {
  const classes = useStyles();
  const rootClassNames = classNames('root', {
    "casual": title === 'Casual',
    "onevsone": title === 'One vs One',
    "onevsmany": title === 'One vs Many',
    "royalrumble": title === 'Royal Rumble',
  });
  const routeToGo = (title === 'Casual') ? 'casual' : (title === 'One vs One') ? '1vs1' : (title === 'One vs Many') ? '1vsMany' : 'royalRumble';

  return (
    <Card className={rootClassNames} onClick={() => onRouteChange(routeToGo)}>
      <CardActionArea>
        <CardContent className={classes.content}>
          <Typography className={classes.typography} gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography className={classes.typography} variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography className={classes.explore} variant="body2" color="textSecondary" component="p">
            EXPLORE
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default InfoCard;