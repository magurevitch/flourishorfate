import React from 'react';
import { Box, Button, Container } from '@mui/material';
import { Email } from '@mui/icons-material';
import CopyrightIcon from '@mui/icons-material/Copyright';

export const Footer = () => {
    return <Box component="footer" position="fixed" bottom="0px" left="0px" alignSelf="flex-end" sx={{
        bgcolor: 'primary.main',
        width: '100%'
    }}>
        <Container sx={{color: 'white',display: 'flex',alignItems: 'center',flexWrap: 'wrap'}}>
            <div>Flourish or Fate Games</div>
            <Button sx={{color: 'white'}} onClick={() => {window.location.href = 'mailto:flourishorfate@gmail.com';}} startIcon={<Email />}>Email</Button>
            <div style={{display: 'flex',alignItems: 'center',flexWrap: 'wrap',}}><CopyrightIcon /> 2024 Matthew Gurevitch</div>
        </Container>
    </Box>
}