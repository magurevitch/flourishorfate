import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button, Icon } from '@mui/material';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return <AppBar position='fixed'>
        <Toolbar>
            <Button><Link to="/"><img src="/FlourishOrFateIcon.svg" alt="flourish or fate logo" height="25" width="25" />Home</Link></Button>
            <Button><Link to="/dybbuks-and-dreidels">Dybbuks and Dreidels</Link></Button>
        </Toolbar>
    </AppBar>;
}
