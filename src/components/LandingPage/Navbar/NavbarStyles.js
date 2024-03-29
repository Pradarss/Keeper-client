import styled from "@emotion/styled";
import {  Box, Button, Toolbar } from "@mui/material";

export const StyledToolbar = styled(Toolbar)(({theme})=>({
 display:"flex",
 justifyContent:"space-between",
}))

export const LinksArea = styled(Box)(({theme})=>({
 display:"flex",
 justifyContent:"space-between",
 gap: "20px"
}))

export const Buttonstyle=styled(Button)(({theme})=>({
    background: "rgba(255, 255, 255, 0.2)",
    color: "#264653",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.125)",
    '&:hover': {
        backgroundColor: '#264653',
        color: "white"
      },
}))