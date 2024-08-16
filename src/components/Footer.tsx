import React from 'react';
import { Box, Button, Container } from '@mui/material';
import { Email } from '@mui/icons-material';

export const Footer = () => {
    return <Box component="footer" position="fixed" bottom="0px" alignSelf="flex-end" padding="0px" sx={{
        bgcolor: 'primary.main',
        width: '100%'
    }}>
        <Container sx={{color: 'white'}}>
            Flourish or Fate Games
            <Button><a href='mailto:flourishorfate@gmail.com'><Email />  Email</a></Button>
        </Container>
    </Box>
}