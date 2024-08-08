import { Box, Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const DybbuksAndDreidels = () => {
    return <Container>
        Dybbuks and Dreidels
        <Box>FAQ</Box>
        <Box>Introduction for people coming from D&D 5e</Box>
        <Link to="/dybbuks-and-dreidels/dreidel-spinner">Dreidel Spinner</Link>
    </Container>;
}
