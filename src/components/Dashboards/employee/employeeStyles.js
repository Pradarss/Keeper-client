import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const UserArea = styled(Box)(({theme})=>({
    backgroundColor: "red",
    minHeight: "100vh",
   }))

   export const ListArea = styled(Box)(({theme})=>({
    backgroundColor: "blue",
    minHeight: "100vh",
    padding: "2rem"
   }))

   export const ListTitle = styled(Typography)(({theme})=>({
        background: "#fff",
        borderRadius: "7px",
        boxShadow: "0 2px 5px #ccc",
        padding: "10px",
        // width: "240px",
        // margin: "16px",
        // float: "left",
        textAlign:"center",
   }))


  