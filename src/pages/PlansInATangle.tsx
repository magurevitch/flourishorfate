import React from 'react';
import { EmailLink } from '../components/EmailLink';

export const PlansInATangle: React.FC = () => {
    return <div>
        <i>Plans in a Tangle</i> is a GM-less game for 3-8 people, coming out in July 2026.
        <b>Plans in a Tangle</b> is a work in progress, expected to come out Summer of 2026.
        It is a GM-less game, with 3 simultaneous heists happening in the same museum.
        Every player is on all 3 teams at once, with mechanics allowing the interactions, more chaos, and bringing back already established plot points.
        Please e-mail me at <EmailLink /> if you would like an advance copy.
    </div>;
}