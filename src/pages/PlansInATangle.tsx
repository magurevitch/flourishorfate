import React from 'react';
import { EmailLink } from '../components/EmailLink';
import { Box, Grid, Stack } from '@mui/material';
import {default as CatBurgler} from '../images/PlansInATangle/LadyInBlack.png';
import {default as SanLuisObispo} from '../images/PlansInATangle/LadyInYellow.png';


export const PlansInATangle: React.FC = () => {
    return <Grid container>
        <Grid item sm={8}>
            <Stack>
                <Box>
                    <i>Plans in a Tangle</i> is a GM-less storytelling game for 3-8 players.
                    The players weave together the stories of three heist teams striking the same museum at the same time.
                    All players are involved in all three stories.
                </Box>
                <Box bgcolor="warning.light" sx={{border: 2, borderColor: 'text.primary', padding: "10px", borderRadius: "8px"}}>
                    Dawn breaks through a broken skylight.
                    A getaway car burned tire marks from the West Wing of the Museum.
                    Police are scratching their heads.
                    Wasn’t the painting in the East Wing?
                    The alarm went off in the New Annex,
                    and the neighbors heard a helicopter.
                    It wasn’t one heist stealing away the artifacts;
                    there must have been three last night.
                </Box>
                <Box>
                    <i>Plans in a Tangle</i> is available as a PDF or soft cover book at{" "}
                    <a href='https://www.drivethrurpg.com/en/product/572539/plans-in-a-tangle'>DriveThruRPG</a>,
                    or in person, where you can e-mail me at <EmailLink/>.
                    In addition to the full rules, there is a{" "}
                    <a href='https://www.drivethrurpg.com/en/product/572728/plans-in-a-tangle-condensed'>condensed set of rules</a>
                    {" "}available as a PDF, and if you want pre-made promts, a{" "}
                    <a href='https://www.drivethrurpg.com/en/product/572502/plans-in-a-tangle-cards'>set of cards</a>.
                </Box>
            </Stack>
        </Grid>

        <Grid item sm={4}>
            <img src={CatBurgler} alt="Cat Burgler" width="100%"/>
        </Grid>

        <Grid item sm={4}>
            <img src={SanLuisObispo} alt="Lady in Yellow" width="100%"/>
        </Grid>

        <Grid item sm={8}>
            <Stack>
                <Box>Players: 3-8</Box>
                <Box>Time:</Box>
                <Box>2 ½ hours if someone reads the rules thoroughly</Box>
                <Box>3 ½ hours if you skimmed and are trying to figure it out on the fly</Box>
            </Stack>
        </Grid>
    </Grid>;
}