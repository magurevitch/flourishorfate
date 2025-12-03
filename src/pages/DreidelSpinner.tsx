import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ActionDreidels } from '../components/DybbuksAndDreidels/ActionDreidels';
import { NewChapterDreidels } from '../components/DybbuksAndDreidels/NewChapterDreidels';
import { ThreatStack } from '../components/DybbuksAndDreidels/ThreatStack';

export const DreidelSpinner: React.FC = () => {
    return <Grid container>
        <Grid item sm={12}>
            <Typography variant='h4'>Online Dreidel Spinner</Typography>
            <Button><Link to="/dybbuks-and-dreidels">Back to Main Dybbuks and Dreidels page</Link></Button>
        </Grid>
        <Grid item sm={12}>
            Dybbuks and Dreidels has 4 different types of dreidel spin. The Action Spin and the Evil Eye spin can use the action dreidel, and the Support Spin and the Chapter Start Spin have their own buttons. 
        </Grid>
        <Grid item sm={9} lg={10}>
            <NewChapterDreidels />
            <ActionDreidels />
        </Grid>
        <Grid item sm={3} lg={2}>
            <ThreatStack />
        </Grid>
    </Grid>;
}
