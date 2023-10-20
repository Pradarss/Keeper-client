import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const HomeArea = styled(Box)(({theme})=>({
    height:" 91.47vh",
    width: "100vw",
    display: "flex", 
    flexDirection: "row",
    justifyContent: "center"
}));

export const LandingArea = styled(Box)(({theme})=>({
    height:" 100vh",
    width: "100vw",
    backgroundColor: "#2a9d8f",
    backgroundImage: 'url("https://images.ctfassets.net/rz1oowkt5gyp/7lTGeXbBRNRLaVk2MdBjtJ/99c266ed4cb8cc63bd0c388071f01ff6/white-wave-bg.svg")',
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
}));

export const HomeRight = styled(Box)(({theme})=>({
    height:" 75vh",
    width: "36.5vw",
    backgroundImage: "url('/assets/bg.webp')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    margin: "55px",
}));

export const HomeLeft = styled(Box)(({theme})=>({
    height:" 90vh",
    width: "50vw",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column"
}));

export const HomeTitle = styled(Box)(({theme})=>({
    height:" 41vh",
    width: "30vw",
    justifyContent: "center",
    alignItems: "end",
    display: "flex",
    padding: "2vh 0",
    
}));

export const HomePara = styled(Box)(({theme})=>({
    height:" 41vh",
    width: "30vw",
    justifyContent: "center",
    alignItems: "start",
    display: "flex",
    padding: "2vh 0"
}));

export const CardArea = styled(Box)(({theme})=>({
    height:" 100vh",
    width: "100vw",
    display: "flex", 
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#e9c46a",
    alignItems: "center",
    gap: "6rem",
    // backgroundImage: 'url("https://images.ctfassets.net/rz1oowkt5gyp/7lTGeXbBRNRcLaVk2MdBjtJ/99c266ed4cb8cc63bd0c388071f01ff6/white-wave-bg.svg")',
    background: "linear-gradient(180deg, #e76f51, #f4a261)",
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "bottom",
}));

export const Cards = styled(Box)(({theme})=>({
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem"
}));