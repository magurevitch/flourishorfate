import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';
import { FAQ } from '../components/FAQ';
import {default as DybbuksAndDreidelsCover} from '../images/DybbuksAndDreidelsCoverText.jpg';


export const DybbuksAndDreidels = () => {
    return <Grid container>
        <Grid item sm={12}><Typography>Dybbuks and Dreidels</Typography></Grid>
        <Grid item sm={9}>
            Dybbuks and Dreidels is a Table-Top Role Playing Game inspired by Jewish history and culture.
            The rulebook will soon be available on <a href="https://www.drivethrurpg.com/">DriveThruRPG</a>.
            The game is intended for one-shot storytelling, for 3-7 people.
        </Grid>
        <Grid item sm={3}>
            <a href='https://www.drivethrurpg.com/'><img src={DybbuksAndDreidelsCover} alt="Dybbuks and Dreidels Cover" width="100%"/></a>
        </Grid>
        <Grid item sm={12}>
            <Link to="/dybbuks-and-dreidels/dreidel-spinner"><Button sx={{
                color: 'white',
                bgcolor: 'primary.main'
            }}>Online Dreidel Spinner</Button></Link>
        </Grid>
        <Grid item sm={12}><FAQ /></Grid>
    </Grid>;
}
