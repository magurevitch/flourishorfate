import React from 'react';
import { EmailLink } from '../components/EmailLink';
import { Grid } from '@mui/material';

export const PlansInATangle: React.FC = () => {
    return <Grid container>
        <Grid item>
            <i>Plans in a Tangle</i> is a GM-less game, coming out in July 2026.
        </Grid>

        <Grid item bgcolor="warning.light" sx={{border: 2, borderColor: 'text.primary', padding: "10px", borderRadius: "8px"}}>
            Dawn breaks through a broken skylight.
            A getaway car burned tire marks from the West Wing of the Museum.
            Police are scratching their heads.
            Wasn’t the painting in the East Wing?
            The alarm went off in the New Annex,
            and the neighbors heard a helicopter.
            It wasn’t one heist stealing away the artifacts;
            there must have been three last night.
        </Grid>
       
        <Grid item>
            In <i>Plans in a Tangle</i>,
            3-8 players weave together the stories of three heist teams striking the same museum at the same time.
            All players are involved in all three stories.
        </Grid>

        <Grid>
            Players: 3-8
            <br/>
            Time:
            <br/>
            2 ½ hours if someone read therules thoroughly
            <br/>
            3 ½ hours if you skimmed and are trying to figure it out on the fly
        </Grid>

        <Grid>
            Please e-mail me at <EmailLink /> if you would like an advance copy.
        </Grid>
    </Grid>;
}