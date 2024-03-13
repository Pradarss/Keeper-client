import { Typography } from "@mui/material";
import { LinksArea, StyledToolbar } from "./DashNavStyles";
import { Link } from "react-router-dom";
import NameAvatar from "./Avatar";
import React from "react";

function DashNav(props){
    let data = props.user.user;
    return(
        <StyledToolbar >
        <Typography variant="h6"><Link to="/" style={{textDecoration: "none", fontSize: "2.5rem", color: "#264653"}} >Trello</Link></Typography>
    <LinksArea>
        <NameAvatar name={data.username} />
        <Typography variant="h5">{data.username}</Typography>
    </LinksArea>
</StyledToolbar>
    )
}

export default DashNav;