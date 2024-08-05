import { Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const DybbuksAndDreidels = () => {
    return <Container>
        Dybbuks and Dreidels
        <br/>
        FAQ
        <br/>
        <Link to="/dybbuks-and-dreidels/dreidel-spinner">Dreidel Spinner</Link>
    </Container>
}
