import React from 'react';
import Logo from '../Logo/Logo'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { styled } from '@material-ui/styles';
import './Navigation.css'

const NavBreadcrumbs = styled(Breadcrumbs)({
    color: 'white',
    fontWeight: 'lighter',
    paddingTop: 37
});

const Navigation = ({ onRouteChange }) => {
    return (
        <nav className='navbar'>
            <Logo />
            <NavBreadcrumbs aria-label="breadcrumb">
              <Link className='dim pa3 pointer' color="inherit" onClick={() => onRouteChange('home')}> Home </Link>
              <Link className='dim pa3 pointer' color="inherit" onClick={() => onRouteChange('casual')}> Casual </Link>
              <Link className='dim pa3 pointer' color="inherit" onClick={() => onRouteChange('1vs1')} > 1vs1 </Link>
              <Link className='dim pa3 pointer' color="inherit" onClick={() => onRouteChange('1vsMany')} > 1vsMany </Link>
              <Link className='dim pa3 pointer' color="inherit" onClick={() => onRouteChange('royalRumble')} > Royal Rumble </Link>
            </NavBreadcrumbs>
        </nav>
    );
}

export default Navigation;