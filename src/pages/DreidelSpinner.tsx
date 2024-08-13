import React from 'react';
import { Box, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { ActionDreidels } from '../components/ActionDreidels';
import { NewChapterDreidels } from '../components/NewChapterDreidels';

export const DreidelSpinner = () => {
    return <Container>
        <Button><Link to="/dybbuks-and-dreidels">Back to Main</Link></Button>
        <Box>
            Dybbuks and Dreidels has 4 different types of dreidel spin. The Action Spin and the Evil Eye spin can use the action dreidel, and the Support Spin and the Chapter Start Spin have their own buttons. 
        </Box>
        <ActionDreidels />
        <NewChapterDreidels />
    </Container>;
}
