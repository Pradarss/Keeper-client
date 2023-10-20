import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const StyledCard = styled(Card)(({theme})=>({
    width: "250px",
    maxWidth: "375px",
    maxHeight: "375px",
    height: "250px",
    // backgroundSize: "cover" ,
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
    textAlign: "center",
    // border: "1px solid black",
    // backgroundColor: "#f4a261"
    // background: "linear-gradient(180deg, #ff3366, #ff9900)",
    // color: "#fff",
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.125)",
    borderRadius: "10px",
    padding: "20px",
}));