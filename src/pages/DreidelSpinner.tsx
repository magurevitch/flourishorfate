import React from 'react';
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { ActionDreidels } from '../components/ActionDreidels';
import { NewChapterDreidels } from '../components/NewChapterDreidels';
import { ThreatStack } from '../components/ThreatStack';

export const DreidelSpinner = () => {
    return <Grid container>
        <Grid item>
            <Button><Link to="/dybbuks-and-dreidels">Back to Main</Link></Button>
        </Grid>
        <Grid item>
            Dybbuks and Dreidels has 4 different types of dreidel spin. The Action Spin and the Evil Eye spin can use the action dreidel, and the Support Spin and the Chapter Start Spin have their own buttons. 
        </Grid>
        <Grid item>
            <ActionDreidels />
        </Grid>
        <Grid item>
            <NewChapterDreidels />
        </Grid>
        <Grid item>
            <ThreatStack />
        </Grid>
    </Grid>;
}
