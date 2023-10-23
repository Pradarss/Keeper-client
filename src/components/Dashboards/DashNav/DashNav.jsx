import { Typography } from "@mui/material";
import { LinksArea, StyledToolbar } from "./DashNavStyles";
import { Link } from "react-router-dom";
import NameAvatar from "./Avatar";
import React from "react";

function DashNav(){

    return(
        <StyledToolbar >
        <Typography variant="h6"><Link to="/" style={{textDecoration: "none", fontSize: "2.5rem", color: "#264653"}} >Trello</Link></Typography>
    <LinksArea>
        <NameAvatar name="Trello" />
        <Typography variant="h5">Trello</Typography>
    </LinksArea>
</StyledToolbar>
    )
}

export default DashNav;