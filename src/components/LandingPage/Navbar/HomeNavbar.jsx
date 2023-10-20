import { Link } from 'react-router-dom';
import { ButtonGroup, Typography } from "@mui/material";
import { LinksArea, StyledToolbar } from "./NavbarStyles";
import Button from '@mui/material/Button';



function HomeNavbar() {
    return (
        // <StyledAppbar>
        <StyledToolbar >
            <Typography variant="h6">Name</Typography>
            <LinksArea>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Link to="/login"><Button>Login</Button></Link>
                    <Link to="/signup"><Button>SignUp</Button></Link>
                </ButtonGroup>
            </LinksArea>
        </StyledToolbar>

    );
}

export default HomeNavbar;