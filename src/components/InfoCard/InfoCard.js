import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import casualGif from './casual.gif';
import onevoneGif from './1v1.gif';
import onevmanyGif from './1vMany.gif';
import royalRumbleGif from './royalRumble.gif';
import './InfoCard.css';

const useStyles = makeStyles({
  typography: {
    color: '#1F7A8C',
    fontWeight: 'lighter',
  },
  content: {
    textAlign: 'center',
    padding: 0,
  },
});

const InfoCard = ({ title, description, onRouteChange }) => {
  const classes = useStyles();
  const routeToGo =
    title === 'Casual'
      ? 'casual'
      : title === 'One vs One'
      ? '1vs1'
      : title === 'One vs Many'
      ? '1vsMany'
      : 'royalRumble';

  return (
    <Card className="root" onClick={() => onRouteChange(routeToGo)}>
      <CardActionArea>
        <img
          className="card-media"
          alt="logo"
          src={
            title === 'Casual'
              ? casualGif
              : title === 'One vs One'
              ? onevoneGif
              : title === 'One vs Many'
              ? onevmanyGif
              : royalRumbleGif
          }
        />
        <CardContent className={classes.content}>
          <Typography
            className={classes.typography}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {title}
          </Typography>
          <Typography
            className={classes.typography}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default InfoCard;
