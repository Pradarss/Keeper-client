import styled from "@emotion/styled";
import { AppBar, Box, Button, Toolbar, Typography, makeStyles } from "@mui/material";

export const StyledToolbar = styled(Toolbar)(({theme})=>({
 display:"flex",
 justifyContent:"space-between"
}))




export const LinksArea = styled(Box)(({theme})=>({
 display:"flex",
 justifyContent:"space-between",
 gap: "20px"
}))

export const Buttonstyle=styled(Button)(({theme})=>({
    background: "lightblue",
    '&:hover': {
        backgroundColor: '#3876BF',
        color: "white"
      },
}))