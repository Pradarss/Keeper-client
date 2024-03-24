import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const StyledCard = styled(Card)(({theme})=>({
    width: "250px",
    maxWidth: "375px",
    maxHeight: "375px",
    height: "250px",
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.125)",
    borderRadius: "10px",
    padding: "20px",
}));