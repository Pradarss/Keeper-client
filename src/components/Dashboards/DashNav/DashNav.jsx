import { Avatar, ButtonGroup, Typography } from "@mui/material";
import { Buttonstyle, LinksArea, StyledToolbar } from "./DashNavStyles";
import { Link } from "react-router-dom";
import createAvatar from "./Avatar";

function DashNav(){
    return(
        <StyledToolbar >
        <Typography variant="h6"><Link to="/" style={{textDecoration: "none", fontSize: "2.5rem", color: "#264653"}} >Trello</Link></Typography>
    <LinksArea>
        <Avatar></Avatar>
    </LinksArea>
</StyledToolbar>
    )
}

export default DashNav;