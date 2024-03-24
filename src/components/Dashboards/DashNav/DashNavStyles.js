import styled from "@emotion/styled";
import {  Box, Button, Toolbar } from "@mui/material";

export const StyledToolbar = styled(Toolbar)(({theme})=>({
 display:"flex",
 justifyContent:"space-between",
 background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.125)",
}))

export const LinksArea = styled(Box)(({theme})=>({
 display:"flex",
 justifyContent:"space-between",
 gap: "10px",
 alignItems: "center",
}))

export const Buttonstyle=styled(Button)(({theme})=>({
    background: "lightgreen",
    '&:hover': {
        backgroundColor: '#264653',
        color: "white"
      },
}))