import { Avatar, Box, Container, Divider, Stack, Typography } from "@mui/material";
import NameAvatar from "./Avatar";

function UserMenu(){
    return(
        <Box>
        <Stack textAlign="center" direction="column" spacing={4} justifyContent="center" divider={<Divider orientation="horizontal" flexItem />}>
            {/* <Stack> */}
            <Container>
                <NameAvatar name="Trello" />
                <Typography variant="h4" mt={2}>Trello</Typography>
                <Typography variant="body1">Trello@gmail.com</Typography>
            </Container>

            <Box sx={{textAlign: "center"}}>
                <Typography variant="h5" mb={2}>Manager Details</Typography>
                <Typography variant="body1" textAlign={"left"}>Manager's name: Trello</Typography>
                <Typography variant="body1" textAlign={"left"}>Manager's ID: 12345</Typography>
            </Box>
               
            <Box sx={{textAlign: "center"}}>
                <Typography variant="h5">Logout</Typography>
            </Box>
                
        </Stack>
      </Box>  
    )
}

export default UserMenu;