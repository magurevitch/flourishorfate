import React from 'react';
import { EmailLink } from '../components/EmailLink';

export const ForRetailers: React.FC = () => {
    return <div>
        <p>
            Hi retailers! Thank you for your interest in Flourish or Fate Games!
        </p>
        <p>
            My games are published through <a href="https://www.drivethrurpg.com/en/publisher/28340/flourish-or-fate-games">DriveThruRPG</a>.
            To request a code for the retailer discount, please e-mail me at <EmailLink />.
        </p>
    </div>;
}
