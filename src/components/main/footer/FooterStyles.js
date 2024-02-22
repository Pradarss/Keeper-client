import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const iconstyle= {
    color: 'white',
    margin : '2px'
  }
  
export const icons={borderRadius: '50%', padding: '3px', margin: '2px'};

export const FooterArea = styled(Box)(({theme})=>({
    width: "100%",
    height: "15vh",
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "2rem", 
    bottom: 0,
}))