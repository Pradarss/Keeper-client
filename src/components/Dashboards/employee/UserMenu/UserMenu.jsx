import {Box, Container, Divider, Stack, Typography } from "@mui/material";
import NameAvatar from "./Avatar";
import { Heading, OtherInfo, SubHeading } from "./UserMenuStyles";
import { UserArea } from "./UserMenuStyles";

function UserMenu(){
    return(
        <Box>
        <UserArea spacing={4} divider={<Divider orientation="horizontal" flexItem />}>
            <Container>
                <NameAvatar name="Trello" />
                <Heading mt={2}>Trello</Heading>
                <SubHeading>Trello@gmail.com</SubHeading>
            </Container>

            <OtherInfo>
                <Heading mb={2}>Manager Details</Heading>
                <SubHeading>Manager's name: Trello</SubHeading>
                <SubHeading>Manager's ID: 12345</SubHeading>
            </OtherInfo>
               
            <OtherInfo>
                <Heading>Logout</Heading>
            </OtherInfo>
                
        </UserArea>
      </Box>  
    )
}

export default UserMenu;