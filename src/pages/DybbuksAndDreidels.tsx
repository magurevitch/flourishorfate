import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';
import { FAQ } from '../components/FAQ';
import {default as DybbuksAndDreidelsCover} from '../images/DybbuksAndDreidelsCoverFront.jpg';


export const DybbuksAndDreidels = () => {
    return <Grid container>
        <Grid item sm={9}>
            <Typography variant='h4'>Dybbuks and Dreidels</Typography>
            Dybbuks and Dreidels is a Table-Top Role Playing Game inspired by Jewish history and culture.
            The rulebook is available on <a href="https://www.drivethrurpg.com/en/product/493884/dybbuks-and-dreidels">DriveThruRPG</a>.
            It is currently only available in PDF, but I am working on getting the book out soon as well.
            The game is intended for one-shot storytelling, for 4-7 people.

            <br/>
            <Link to="/dybbuks-and-dreidels/dreidel-spinner"><Button sx={{
                color: 'white',
                bgcolor: 'primary.main'
            }}>Online Dreidel Spinner</Button></Link>
        </Grid>
        <Grid item sm={3}>
            <a href='https://www.drivethrurpg.com/en/product/493884/dybbuks-and-dreidels'><img src={DybbuksAndDreidelsCover} alt="Dybbuks and Dreidels Cover" width="100%"/></a>
        </Grid>
        <Grid item sm={12}><FAQ /></Grid>
    </Grid>;
}
