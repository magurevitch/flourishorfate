import React from 'react';
import { Box, Container } from '@mui/material';

export const Footer = () => {
    return <Box component="footer" position="fixed" bottom="0px" alignSelf="flex-end" padding="0px" sx={{
        bgcolor: 'primary.main',
        width: '100%'
    }}>
        <Container>Flourish or Fate Games</Container>
    </Box>
}