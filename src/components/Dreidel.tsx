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
        if(counter + 10 > endTime) {
            return `falling-${counter % 4}`
        }
        if(counter + 20 > endTime) {
            return `wobbling-${counter % 4}`
        }
        return `stable-${counter % 4}`
    }

    return side === undefined ? <div>{chooseImage()}</div> : <div>{Side[side]}</div>;
}