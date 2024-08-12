import React from 'react';
import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { ActionDreidels } from '../components/ActionDreidels';
import { NewChapterDreidels } from '../components/NewChapterDreidels';

export const DreidelSpinner = () => {
    return <Container>
        <Button><Link to="/dybbuks-and-dreidels">Back to Main</Link></Button>
        <ActionDreidels />
        <NewChapterDreidels />
    </Container>;
}
