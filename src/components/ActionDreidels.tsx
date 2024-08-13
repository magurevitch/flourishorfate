import React, { useState } from 'react';
import { Box, Button, Container, Grid, Tooltip } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import { Dreidel, Side } from '../components/Dreidel';

export const ActionDreidels = () => {
    const [actionTimer, setActionTimer] = useState<number>(80);
    const [actionDreidel, setActionDreidel] = useState<Side | undefined>(Side.GIMEL);
    const [isSupporting, setSupporting] = useState<boolean>(false);
    const [supportDreidel, setSupportDreidel] = useState<Side | undefined>(Side.GIMEL);

    const isHit = {
        [Side.GIMEL]: true,
        [Side.HEY]: true,
        [Side.NUN]: false,
        [Side.SHIN]: false,
    };

    const isReprecussion = {
        [Side.GIMEL]: false,
        [Side.HEY]: true,
        [Side.NUN]: false,
        [Side.SHIN]: true,
    };

    const determineReprecussions = () => {
        if(actionDreidel === undefined) return [];
        if(!isReprecussion[actionDreidel]) return [false];
        if(!isSupporting) return [true];
        if(supportDreidel === undefined) return [];
        return [!isHit[supportDreidel], isReprecussion[supportDreidel]];
    }

    const renderReprecussions = () => {
        function represent(value: boolean) {
            return value ? "Repercussions" : "No Repercussions";
        }

        let repercussions = determineReprecussions();
        if(!repercussions.length) return false;
        if(repercussions.length === 1) return <Box>{represent(repercussions[0])}</Box>
        return <Box>Original Actor: {represent(repercussions[0])} <br/> Supporter: {represent(repercussions[1])}</Box>
    }

    const randomInNormalDistribution = (mean: number, sigma: number) => {
        //the Box-Muller Transform
        let phi = 2 * Math.PI * Math.random();
        let R = sigma * Math.sqrt(  -2 * Math.log( Math.random() )  );
        let x = R * Math.cos(phi);
        // if we needed a second random number in that distribtuion
        // let y    =   R * Math.sin(phi);
        return x + mean;
    }

    const spinActionDreidel = () => {
        let time = randomInNormalDistribution(80, 20);
        setActionTimer(time);
        setActionDreidel(undefined);
        setSupporting(false);
    }

    const spinSupportDreidel = () => {
        setSupporting(true);
        setSupportDreidel(undefined);
    }

    return <Container>
        <Grid container spacing={2}>
            <Grid item>
                Action Dreidel / Evil Eye Dreidel
                <Tooltip title="Time spinning is from a normal distribution with a mean of 8 seconds, standard deviation of 2 seconds." arrow>
                    <HelpIcon />
                </Tooltip>
                <br/>
                <Dreidel side={actionDreidel} endTime={actionTimer} onLand={setActionDreidel}/>
            </Grid>
            {!isSupporting  || <Grid item>Support Dreidel<br/><Dreidel side={supportDreidel} endTime={actionTimer/4} onLand={setSupportDreidel}/></Grid>}
        </Grid>
        {actionDreidel === undefined || <Box>{isHit[actionDreidel] ? "Hit" : "Miss"}</Box>}
        {renderReprecussions()}
        {actionDreidel !== undefined ? <Button onClick={spinActionDreidel}>Spin Dreidel</Button> : !isSupporting ? <Button onClick={spinSupportDreidel}>Spin Support Dreidel</Button> : null}
    </Container>;
}
