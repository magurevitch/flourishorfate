import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return <AppBar position='sticky'>
        <Toolbar>
            <Link to="/"><Typography>Home</Typography></Link>
            <Link to="/about"><Typography>About</Typography></Link>
            <Link to="/dybbuks-and-dreidels"><Typography>Dybbuks and Dreidels</Typography></Link>
        </Toolbar>
    </AppBar>;
}
