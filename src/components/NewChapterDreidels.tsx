import React, { useRef, useState } from 'react';
import { Box, Button, Container, Grid, Tooltip, Typography } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import { Dreidel, Side } from '../components/Dreidel';

export const NewChapterDreidels = () => {
    const [chapterStartDreidels, setChapterStartDreidels] = useState<(Side | undefined)[]>([]);
    const dreidelRef = useRef(chapterStartDreidels);
    dreidelRef.current = chapterStartDreidels;
    const [numberOfDreidels, setNumberOfDreidels] = useState<number>(0);

    const values = {
        [Side.GIMEL]: 2,
        [Side.HEY]: 1,
        [Side.NUN]: 0,
        [Side.SHIN]: -1,
    };

    const poissonGenerator = (lambda: number) => {    
        let usedElapsed = 0;
        let numberOfEvents = 0;
        while (usedElapsed < 1) {
            let eventTime = -Math.log(Math.random()) / lambda;
            usedElapsed += eventTime;
            numberOfEvents += 1;
        }
        return numberOfEvents;
    };

    const setStartDreidelIndex = (index:number) => (side: Side | undefined) => {
        chapterStartDreidels[index] = side;
        setChapterStartDreidels([...chapterStartDreidels]);
    }

    const spinStartDreidels = () => {
        let numberOfDreidels = poissonGenerator(3);
        setNumberOfDreidels(numberOfDreidels);
        setChapterStartDreidels([]);
        for(var i=0;i < numberOfDreidels; i++) {
            setTimeout(() => {
                setChapterStartDreidels([...dreidelRef.current, undefined]);
            }, i*500);
        }
    }

    return <Container>
        <Typography>
            Chapter Start Spin
            <Tooltip title="Number of dreidels spinning is determined from a Poisson distribution with lambda equal to 3." arrow>
                <HelpIcon />
            </Tooltip>
        </Typography>
        <Button onClick={() => chapterStartDreidels.every(side => side !== undefined) ? spinStartDreidels() : undefined}>
            <Grid container>
                {chapterStartDreidels.map((side, index) => <Grid item>
                    <Dreidel side={side} endTime={5*numberOfDreidels - 2*index - 1} onLand={setStartDreidelIndex(index)}/>
                    <br/>
                    {side === undefined || `${values[side]}`}
                </Grid>)}
            </Grid>
        </Button>
        {chapterStartDreidels.some(side => side === undefined) || <Box>Total: {chapterStartDreidels.map(side => side !== undefined ? values[side] : 0).reduce((a, b) => a + b, 0)}</Box>}
        {chapterStartDreidels.some(side => side === undefined) || <Button onClick={spinStartDreidels}>Spin New Chapter Dreidels</Button>}
    </Container>;
}
