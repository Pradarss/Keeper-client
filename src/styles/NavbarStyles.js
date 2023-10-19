import styled from "@emotion/styled";
import { AppBar, Box, Toolbar } from "@mui/material";

// export const StyledAppbar = styled(AppBar)(({theme})=>({
//     position:"static",
//     backgroundColor: "unset",
//     color: "black",
//     boxShadow: "none"
// }));

export const StyledToolbar = styled(Toolbar)(({theme})=>({
 display:"flex",
 justifyContent:"space-between"
}))

export const LinksArea = styled(Box)(({theme})=>({
 display:"flex",
 justifyContent:"space-between",
 gap: "20px"
}))