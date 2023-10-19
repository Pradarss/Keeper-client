import { Typography } from "@mui/material";
import { LinksArea, StyledAppbar, StyledToolbar } from "./LandingPage/Navbar/NavbarStyles";

function Navbar(){
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

export default Navbar;
