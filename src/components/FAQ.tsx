import React from 'react';
import { Box, Container } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


export const FAQ = () => {
    return <Container style={{padding: 0}}>
        <Box>Frequently Asked Questions</Box>
        <Accordion>
            <AccordionSummary>Is this game like Dungeons and Dragons?</AccordionSummary>
            <AccordionDetails>Details</AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary>What do I do if I don't have Dreidels, or spinning a dreidel is difficult for me?</AccordionSummary>
            <AccordionDetails>Details</AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary>Is this game Shabbat-friendly?</AccordionSummary>
            <AccordionDetails>Details</AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary>Can I play if I'm not Jewish?</AccordionSummary>
            <AccordionDetails>Details</AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary>Is there a particular story or setting to this game?</AccordionSummary>
            <AccordionDetails>Details</AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary>What do I need to play?</AccordionSummary>
            <AccordionDetails>Details</AccordionDetails>
        </Accordion>
    </Container>
}