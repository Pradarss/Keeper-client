import styled from "@emotion/styled";
import { Box, Stack, Typography } from "@mui/material";

export const Heading = styled(Typography)(({theme})=>({
    // marginBottom: "5px",
    fontSize: "24px",
    textAlign: "center",
    fontWeight: "500"
}))

export const SubHeading = styled(Typography)(({theme})=>({
    textAlign: "left",
    fontSize: "15px"
}))

export const OtherInfo = styled(Box)(({theme})=>({
    textAlign: "center",
    // fontSize: "15px"
}))

export const UserArea = styled(Stack)(({theme})=>({
    textAlign:"center",
    direction:"column",
    // spacing:4,
    justifyContent:"center"
}))