import React, { useState } from 'react';
import { Box, Button, Container } from '@mui/material';
import { Dreidel, Side } from '../components/Dreidel';

export const NewChapterDreidels = () => {
    const [chapterStartDreidels, setChapterStartDreidels] = useState<(Side | undefined)[]>([]);

    function poissonGenerator(lambda: number) {    
        let usedElapsed = 0;
        let numberOfEvents = 0;
        while (usedElapsed < 1) {
            let eventTime = -Math.log(Math.random()) / lambda;
            usedElapsed += eventTime;
            numberOfEvents += 1;
        }
        return numberOfEvents;
    }

    return <Container>
        <Box>Chapter Start Spin</Box>
        {chapterStartDreidels.map((side, index) => <Dreidel side={side} endTime={20} onLand={(side) => {
            chapterStartDreidels[index] = side;
            setChapterStartDreidels([...chapterStartDreidels]);
        }}/>)}
        {chapterStartDreidels.some(side => side === undefined) || <Button onClick={() => {
            let numberOfDreidels = poissonGenerator(3);
            setChapterStartDreidels(Array.from(Array(numberOfDreidels)));
        }}>Spin New Chapter Dreidels</Button>}

    </Container>;
}
