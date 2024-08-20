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
            <Link to="/"><Button sx={{color:"white"}} startIcon={<img src={FlourishOrFateLogo} alt="flourish or fate logo" height="40" />}>Home</Button></Link>
            <Link to="/dybbuks-and-dreidels"><Button sx={{color:"white"}} startIcon={<img src={DybbuksAndDreidelsCover} alt="dybbuks and dreidels cover" height="40"/>}>Dybbuks and Dreidels</Button></Link>
        </Toolbar>
    </AppBar>;
}
