import React from 'react';
import { Grid } from "@mui/material";
import { EmailLink } from '../components/EmailLink';

export const UpcomingGames: React.FC = () => {
    return <Grid container>
        There are multiple games currently in the works.
        If you are interested in reading them or playtesting, you can reach out to <EmailLink />.
        Some in the works are:
        <ul>
            <li>A GM-less game around simultaneous heists. This is in mid-stage playtesting.</li>
            <li>A tactical combat game that plays around with relationships. This has had an initial playtest.</li>
            <li>A game in a magical school, using cards to represent chaotic magic. This has had some ideation, but no playtesting yet.</li>
            <li>A large number of sketches of interesting mechanics that might sprout their own games or be incorporated into an existing idea.</li>
        </ul>
    </Grid>
};