import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const UserArea = styled(Box)(({theme})=>({
    minHeight: "50vh",
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.125)",
    justifyContent: "center",
    padding: "2rem",    
    display: "flex",
    borderRadius: "20px",
   }))

   export const ListArea = styled(Box)(({theme})=>({
    minHeight: "100vh",
    padding: "2rem"
   }))

   export const ListTitle = styled(Typography)(({theme})=>({
        background: "#fff",
        borderRadius: "7px",
        boxShadow: "0 2px 5px #ccc",
        padding: "10px",
        minWidth: "285px",
        textAlign:"center",
   }))


  