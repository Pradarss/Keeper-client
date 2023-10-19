import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const StyledCard = styled(Card)(({theme})=>({
    width: "250px",
    maxWidth: "375px",
    maxHeight: "375px",
    height: "250px",
    backgroundSize: "cover" ,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    textAlign: "center",
    border: "1px solid black",
    backgroundColor: "#f4a261"
}));