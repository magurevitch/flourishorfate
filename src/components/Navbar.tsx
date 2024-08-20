import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import {default as FlourishOrFateLogo} from '../images/FlourishOrFateIcon.png';
import {default as DybbuksAndDreidelsCover} from '../images/DybbuksAndDreidelsCover.png';

export const Navbar = () => {
    return <AppBar position='fixed'>
        <Toolbar>
            <Button startIcon={<img src={FlourishOrFateLogo} alt="flourish or fate logo" height="25" width="25" />}><Link to="/">Home</Link></Button>
            <Button startIcon={<img src={DybbuksAndDreidelsCover} alt="dybbuks and dreidels cover" height="25" width="25"/>}><Link to="/dybbuks-and-dreidels">Dybbuks and Dreidels</Link></Button>
        </Toolbar>
    </AppBar>;
}
