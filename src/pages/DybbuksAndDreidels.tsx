import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';
import { FAQ } from '../components/FAQ';

export const DybbuksAndDreidels = () => {
    return <Container>
        <Typography>Dybbuks and Dreidels</Typography>
        <Button><Link to="/dybbuks-and-dreidels/dreidel-spinner">Online Dreidel Spinner</Link></Button>
        <FAQ />
    </Container>;
}
