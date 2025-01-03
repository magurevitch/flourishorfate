import React from 'react';
import { Container, List, ListItem, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const FAQ = () => {
    return <Container style={{padding: 0}}>
        <Typography variant='h4'>Frequently Asked Questions</Typography>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>Is this game like Dungeons and Dragons?</AccordionSummary>
            <AccordionDetails>
                Depends on what you you mean by "like Dungeons and Dragons."
                This game, just like Dungeons and Dragons, is a Table-Top Role Playing Game, where one player is the Game Master and the rest play characters.
                However, the two take very different approaches to how to tell stories.
                Dungeons and Dragons has complicated structures to allow for campaigns that go on for years.
                Dybbuks and Dreidels has a streamlined ruleset, which is good for single session games.
                There is an entire page in the rulebook about various differences between the two games.
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>Is there a particular story or setting to this game?</AccordionSummary>
            <AccordionDetails>
                No.
                Dybbuks and Dreidels is made to be flexible enough to handle many different stories.
                Included in the rulebook are 12 stories from around Jewish folklore and history that you can play.
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>Can I play if I'm not Jewish?</AccordionSummary>
            <AccordionDetails>
                Yes.
                While Dybbuks and Dreidels draws from the Jewish tradition, it is open to everyone to play.
                Some knowledge of Jewish culture can add an extra appreciation of the game, but it is not necessary to understand the game.
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>Is this game compatible with my Shabbat observance?</AccordionSummary>
            <AccordionDetails>
                This game has no writing, no electronics, and no measuring.
                There are many different ways to interpret how to observe Shabbat, and I cannot answer for every practice.
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>What do I need to play?</AccordionSummary>
            <AccordionDetails>
                <List>
                    <ListItem>A Copy of the Rulebook <a href="https://www.drivethrurpg.com/en/product/493884/dybbuks-and-dreidels">which you can buy here</a></ListItem>
                    <ListItem>At least 6 dreidels total, or an <Link to="/dybbuks-and-dreidels/dreidel-spinner">Online Dreidel Spinner</Link></ListItem>
                    <ListItem>At least 8 Gelt per player, or an alternative counter, such as poker chips or candy</ListItem>
                    <ListItem>At least 3 tokens per player to represent Harm. These can be a different color counter</ListItem>
                    <ListItem>(Optional) At least 2 tokens in total to represent Distress</ListItem>
                    <ListItem>(Optional) 3 index cards per player OR 1 piece of paper per player with 3 sections</ListItem>
                    <ListItem>4-7 people who want to use their imaginations for 1-3 hours</ListItem>
                </List>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>What do I do if I don't have Dreidels, or spinning a dreidel is difficult for me?</AccordionSummary>
            <AccordionDetails>
                You can still play!
                You can use an <Link to="/dybbuks-and-dreidels/dreidel-spinner">Online Dreidel Spinner</Link>.
                Alternatively, you can use a four-sided die, and some way to time approximately 8 seconds (the average amount of time a dreidel stays up).
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>How is this game for people who have never played a TTRPG before?</AccordionSummary>
            <AccordionDetails>
                Welcome to the wonderful world of TTRPGs!
                Dybbuks and Dreidels is very beginner friendly!
                The rules are there to help the story roll along smoothly, so don't worry about doing everything "right."
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>What is a Dybbuk?</AccordionSummary>
            <AccordionDetails>
                In Jewish folklore, a dybbuk is a soul that must cling to the souls of the living because it is trapped between this world and the next.
            </AccordionDetails>
        </Accordion>
    </Container>
}