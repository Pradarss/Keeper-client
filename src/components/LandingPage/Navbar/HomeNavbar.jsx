import { Link } from 'react-router-dom';
import { ButtonGroup, Divider, Typography } from "@mui/material";
import { Buttonstyle, LinksArea, StyledToolbar } from "./NavbarStyles";


function HomeNavbar() {

    return (
        <StyledToolbar >
                <Typography variant="h6"><Link to="/" style={{textDecoration: "none", fontSize: "2.5rem",fontFamily: 'Yanone Kaffeesatz',  color: "#264653"}} >Trello</Link></Typography>
            <LinksArea>
                <ButtonGroup size='medium' aria-label="contained primary button group">
                    <Link to="/login"><Buttonstyle>Login</Buttonstyle></Link>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Link to="/signup"><Buttonstyle>SignUp</Buttonstyle></Link>
                </ButtonGroup>
            </LinksArea>
        </StyledToolbar>

    );
}

export default HomeNavbar;