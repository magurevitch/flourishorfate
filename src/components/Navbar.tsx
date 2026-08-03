import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import {default as FlourishOrFateLogo} from '../images/FlourishOrFateIcon.png';
import {default as PlansInATangleLogo} from '../images/PlansInATangle/Tangle.png';
import {default as DybbuksAndDreidelsCover} from '../images/DybbuksAndDreidels/Cover.png';

export const Navbar: React.FC = () => {
    return <AppBar position='fixed'>
        <Toolbar>
            <Link to="/"><Button sx={{color:"white"}} startIcon={<img src={FlourishOrFateLogo} alt="flourish or fate logo" height="40" />}>Home</Button></Link>
            <Link to="/plans-in-a-tangle"><Button sx={{color:"white"}} startIcon={<img src={PlansInATangleLogo} alt="plans in a tangle logo" height="40"/>}>Plans in a Tangle</Button></Link>
            <Link to="/dybbuks-and-dreidels"><Button sx={{color:"white"}} startIcon={<img src={DybbuksAndDreidelsCover} alt="dybbuks and dreidels cover" height="40"/>}>Dybbuks and Dreidels</Button></Link>
            <Link to="/for-retailers"><Button sx={{color:"white"}}>For Retailers</Button></Link>
            <Link to="/upcoming"><Button sx={{color:"white"}}>Upcoming Games</Button></Link>
        </Toolbar>
    </AppBar>;
}
