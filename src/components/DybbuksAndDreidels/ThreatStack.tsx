import React, { useEffect, useState } from 'react';
import { Button, Grid, Stack, TextField, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

export const ThreatStack: React.FC  = () => {
    const MAX_STACK = 12;

    const [stackSize, setStackSize] = useState<number>(0);
    const [ephemeral, setEphemeral] = useState<number>(0);
    const [gelt, setGelt] = useState<boolean[]>([]);

    useEffect(() => {
        let filled = ephemeral > 0 ? Math.min(stackSize, ephemeral) : stackSize;
        let outlined = Math.max(stackSize, ephemeral) - filled;
        let stack = new Array(filled).fill(true)
        stack = stack.concat(new Array(outlined).fill(false));
        setGelt(stack);
    }, [stackSize, ephemeral]);

    const positionInElement = (yPosition: number, target: EventTarget & HTMLDivElement) => {
        let fromTop = MAX_STACK * (yPosition - target.offsetTop) / target.offsetHeight;
        return MAX_STACK - Math.floor(fromTop);
    }

    return <Grid container>
        <Grid sm={12}><Typography variant='h6'>Threat Stack</Typography></Grid>
        <Grid item>
            <Stack
                direction='column-reverse'
                onMouseMove={(e) => setEphemeral(positionInElement(e.pageY, e.currentTarget))}
                onMouseLeave={() => setEphemeral(0)}
                onClick={(e) => setStackSize(positionInElement(e.pageY, e.currentTarget))}
                sx={{height: 24 * MAX_STACK, width: 24, bgcolor: 'warning.light'}}
            >
                {gelt.map(isReal => isReal ? <CircleIcon/> : <CircleOutlinedIcon />)}
            </Stack>
        </Grid>
        <Grid item>
            <Stack margin={2}>
                <div style={{alignSelf: "center"}}>{ephemeral || stackSize}</div>
                <Button disabled={stackSize === 0} onClick={() => setStackSize(stackSize - 1)}>Remove<br />Gelt</Button>
                <TextField type='number' label="size" sx={{width: 80}} onChange={(e) => {
                    let value = parseInt(e.target.value);
                    if (value < 0)
                        setStackSize(0);
                    if(0 <= value && value <= MAX_STACK)
                        setStackSize(value);
                    if(MAX_STACK < value)
                        setStackSize(MAX_STACK);
                }}/>
            </Stack>
        </Grid>
    </Grid>;
}