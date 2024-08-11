import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';

export enum Side {
    SHIN,
    NUN,
    HEY,
    GIMEL
}

export const Dreidel: React.FC<{side?: Side, endTime: number, onLand: (side: Side) => void}> = ({side, endTime, onLand}) => {
    const [counter, setCounter] = useState<number>(0);

    const land = () => {
        let side = Math.floor(Math.random() * 4);
        onLand(side);
        setCounter(0);
    }

    useEffect(() => {
        if (counter > endTime) {
            land();
        } else if (side === undefined) {
            let intervalId = setInterval(() => {setCounter(counter+1)}, 100);
            return () => clearInterval(intervalId);
        }
    }, [side, endTime, counter, land]);

    const chooseImage = () => {
        if(side !== undefined) {
            return `/dreidels/${Side[side]}.jpg`;
        }
        if(counter + 10 > endTime) {
            return `/dreidels/falling-${counter % 6}.jpg`
        }
        if(counter + 20 > endTime) {
            return `/dreidels/wobbling-${counter % 6}.jpg`
        }
        return `/dreidels/stable-${counter % 3}.jpg`
    }

    return <Box>
        <img src={chooseImage()} width={80} alt={side === undefined ? "spinning dreidel" : Side[side]}/>
        <br/>
        {side === undefined || `${Side[side]}`}
    </Box>;
}