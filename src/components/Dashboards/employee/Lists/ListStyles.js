import styled from "@emotion/styled";
import { Avatar, Box, Typography } from "@mui/material";

export const NoteArea = styled(Box)(({theme})=>({
    backgroundColor: "white",
    // height: "100vh",
    width: "240px",
    minHeight: "75px",
    padding: "2rem",
    borderRadius: "20px"
   }))

   export const NoteContent = styled(Typography)(({theme})=>({
    fontSize: "1.1em",
    marginBottom: "10px",
    whiteSpace:" pre-wrap",
    wordWrap: "break-word",
   }))

   export const DoneAvatar = styled(Avatar)(({theme})=>({
    position: "relative",
    float: "right",
    // marginRight:" 10px",
    color: "#f5ba13",
    border: "none",
    width: "36px",
    height:" 36px",
    borderRadius:" 50%",
    cursor:" pointer",
    outline: "none",
   }))