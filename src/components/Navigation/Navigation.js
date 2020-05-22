import React from 'react';
import Logo from '../Logo/Logo'
import './Navigation.css'
import { AppBar, Toolbar, IconButton, makeStyles, Tooltip } from '@material-ui/core';
import RoyalRumbleIcon from '@material-ui/icons/ViewCarousel';
import OnevsManyIcon from '@material-ui/icons/VerticalSplit';
import OnevsOneIcon from '@material-ui/icons/PhotoLibrary';
import CasualIcon from '@material-ui/icons/BurstMode';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#212121',
    paddingLeft: 60,
    paddingRight: 60,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  }
}));

const Navigation = ({ route, onRouteChange }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className='logo' onClick={() => onRouteChange('home')}>
            <Logo />
          </div>
          <div className='modes'>
            <Tooltip title='Casual Mode'>
            <IconButton aria-label='casual' onClick={() => onRouteChange('casual')} style={ (route==='casual') ? {color: '#1F7A8C'} : {color: 'white'}}>
              <CasualIcon />
            </IconButton>
            </Tooltip>
            <Tooltip title='One vs One Mode'>
              <IconButton aria-label='onevsone' onClick={() => onRouteChange('1vs1')} style={ (route==='1vs1') ? {color: '#1F7A8C'} : {color: 'white'}}>
                <OnevsOneIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title='One vs Many Mode' onClick={() => onRouteChange('1vsMany')} style={ (route==='1vsMany') ? {color: '#1F7A8C'} : {color: 'white'}}>
              <IconButton aria-label='onevsmany'>
                <OnevsManyIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title='Royal Rumble Mode' onClick={() => onRouteChange('royalRumble')} style={ (route==='royalRumble') ? {color: '#1F7A8C'} : {color: 'white'}}>
              <IconButton aria-label='royalrumble'>
                <RoyalRumbleIcon />
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;