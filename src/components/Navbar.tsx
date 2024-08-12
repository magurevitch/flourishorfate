import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return <AppBar position='fixed'>
        <Toolbar>
            <Button><Link to="/">Home</Link></Button>
            <Button><Link to="/dybbuks-and-dreidels">Dybbuks and Dreidels</Link></Button>
        </Toolbar>
    </AppBar>;
}
