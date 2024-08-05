import React, { useEffect, useState } from 'react';

export enum Side {
    SHIN,
    NUN,
    HEY,
    GIMEL
}

export const Dreidel: React.FC<{side?: Side, endTime: number, onLand: (side: Side) => void}> = ({side, endTime, onLand}) => {
    const [face, setFace] = useState<number>(0);

    useEffect(() => {
        if (face > endTime) {
            land();
        } else if (side === undefined) {
            let intervalId = setInterval(() => {setFace(face+1)}, 100);
            return () => clearInterval(intervalId);
        }
    }, [side, endTime, face]);

    const land = () => {
        let side = Math.floor(Math.random() * 4);
        onLand(side);
        setFace(0);
    }

    return side === undefined ? <div>{face}</div> : <div>{Side[side]}</div>;
}