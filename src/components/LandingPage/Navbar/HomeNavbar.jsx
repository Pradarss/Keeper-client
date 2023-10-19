import { Typography } from "@mui/material";
import { LinksArea, StyledToolbar } from "./NavbarStyles";

function HomeNavbar(){
    return(
        // <StyledAppbar>
        <StyledToolbar >
           <Typography variant="h6">Name</Typography> 
            <LinksArea>
                <Typography>Login</Typography>
                <Typography>SignUp</Typography>
            </LinksArea>
        </StyledToolbar>
       
    )
}

export default HomeNavbar;