import styled from "@emotion/styled";
import { AppBar, Box, Toolbar } from "@mui/material";

export const StyledToolbar = styled(Toolbar)(({theme})=>({
 display:"flex",
 justifyContent:"space-between"
}))

export const LinksArea = styled(Box)(({theme})=>({
 display:"flex",
 justifyContent:"space-between",
 gap: "20px"
}))