import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import {default as FlourishOrFateLogo} from '../images/FlourishOrFateIcon.png';


export const Home = () => {
    return <Grid container>
        <Grid item bgcolor="warning.light" sx={{border: 2, borderColor: 'text.primary', padding: "10px", borderRadius: "8px"}}>
            You are trying to escape the dragon's fire breath.
            You are trying to remember the steps of a particularly difficult dance so the pursuing guards don't know who doesn't belong at this ball.
            You are locked in battle with your rival and former lover.
            There is only one thing to do.
            Make a bold move, or let fortune narrate your next move.
            A flourish, or fate.
        </Grid>
        <Grid item>
            Welcome to Flourish or Fate Games, a one-person game studio.
            Currently, the only offering is a Table-Top Role Playing Game called <Link to="/dybbuks-and-dreidels">Dybbuks and Dreidels</Link>, inspired by various elements from Jewish folklore.
            There are more in the works.
        </Grid>
        <Grid item>
            <img src={FlourishOrFateLogo} alt="Flourish or Fate Logo" width="50%"/>
        </Grid>
    </Grid>;
}
