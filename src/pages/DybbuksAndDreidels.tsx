import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';
import { FAQ } from '../components/FAQ';
import {default as DybbuksAndDreidelsCover} from '../images/DybbuksAndDreidelsCoverText.jpg';


export const DybbuksAndDreidels = () => {
    return <Container>
        <Typography>Dybbuks and Dreidels</Typography>
        Dybbuks and Dreidels is a Table-Top Role Playing Game inspired by Jewish history and culture.
        The rulebook will soon be available on <a href="https://www.drivethrurpg.com/">DriveThruRPG</a>
        <a href='https://www.drivethrurpg.com/'><img src={DybbuksAndDreidelsCover} alt="Dybbuks and Dreidels Cover" width="50%"/></a>
        <Button><Link to="/dybbuks-and-dreidels/dreidel-spinner">Online Dreidel Spinner</Link></Button>
        <FAQ />
    </Container>;
}
