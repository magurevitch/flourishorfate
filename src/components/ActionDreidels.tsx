import React, { useState } from 'react';
import { Box, Button, Container } from '@mui/material';
import { Dreidel, Side } from '../components/Dreidel';

export const ActionDreidels = () => {
    const [actionTimer, setActionTimer] = useState<number>(80);
    const [actionDreidel, setActionDreidel] = useState<Side | undefined>(Side.GIMEL);
    const [isSupporting, setSupporting] = useState<boolean>(false);
    const [supportDreidel, setSupportDreidel] = useState<Side | undefined>(Side.GIMEL);

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
        let time = randomInNormalDistribution(80, 10);
        setActionTimer(time);
        setActionDreidel(undefined);
        setSupporting(false);
    }

    const spinSupportDreidel = () => {
        setSupporting(true);
        setSupportDreidel(undefined);
    }

    return <Container>
        <Box>Action Dreidels</Box>
        <Dreidel side={actionDreidel} endTime={actionTimer} onLand={setActionDreidel}/>
        {!isSupporting  || <Dreidel side={supportDreidel} endTime={actionTimer/4} onLand={setSupportDreidel}/>}
        {actionDreidel !== undefined ? <Button onClick={spinActionDreidel}>Spin Dreidel</Button> : !isSupporting ? <Button onClick={spinSupportDreidel}>Spin Support Dreidel</Button> : null}
    </Container>;
}
