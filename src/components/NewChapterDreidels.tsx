import React, { useRef, useState } from 'react';
import { Box, Button, Container } from '@mui/material';
import { Dreidel, Side } from '../components/Dreidel';

export const NewChapterDreidels = () => {
    const [chapterStartDreidels, setChapterStartDreidels] = useState<(Side | undefined)[]>([]);
    const dreidelRef = useRef(chapterStartDreidels);
    dreidelRef.current = chapterStartDreidels;

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
        setChapterStartDreidels([]);
        for(var i=0;i < numberOfDreidels; i++) {
            setTimeout(() => {
                setChapterStartDreidels([...dreidelRef.current, undefined]);
            }, i*500);
        }
    }

    return <Container>
        <Box>Chapter Start Spin</Box>
        {chapterStartDreidels.map((side, index) => <Box>
                <Dreidel side={side} endTime={5*chapterStartDreidels.length - 2*index - 1} onLand={setStartDreidelIndex(index)}/>
                {side === undefined || values[side]}
            </Box>)}
        {chapterStartDreidels.some(side => side === undefined) || <Box>Total: {chapterStartDreidels.map(side => side !== undefined ? values[side] : 0).reduce((a, b) => a + b, 0)}</Box>}
        {chapterStartDreidels.some(side => side === undefined) || <Button onClick={spinStartDreidels}>Spin New Chapter Dreidels</Button>}
    </Container>;
}
