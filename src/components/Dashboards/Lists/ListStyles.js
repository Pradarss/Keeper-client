import styled from "@emotion/styled";
import { Avatar, Box, Typography } from "@mui/material";

export const NoteArea = styled(Box)(({theme})=>({
    backgroundColor: "white",
    // height: "100vh",
    width: "240px",
    minHeight: "75px",
    padding: "2rem",
    borderRadius: "20px",
    position: "relative",
   }))

   export const CreateArea = styled(Box)(({theme})=>({
    backgroundColor: "white",
    // height: "100vh",
    width: "240px",
    minHeight: "75px",
    padding: "2rem",
    borderRadius: "20px",
    position: "relative",
    // display: "inline-table",
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
    color: "#14213d",
    border: "none",
    width: "36px",
    height:" 36px",
    borderRadius:" 50%",
    cursor:" pointer",
    outline: "none",
    backgroundColor: "#ced4da"
   }))

   
   export const NoteTime = styled(Typography)(({theme})=>({
    display: "flex",
    // float: "left",
    fontSize: "10px",
    margin: "9px",
    backgroundColor: "#ced4da",
    padding: "3px",
    color: "#14213d",
    borderRadius: "10px",
    alignItems: "center"
   }))

      
   export const DoneBy = styled(Typography)(({theme})=>({
    display: "flex",
    // float: "left",
    fontSize: "10px",
    margin: "9px",
    backgroundColor: "#ced4da",
    padding: "5px",
    color: "#14213d",
    borderRadius: "10px",
    alignItems: "center",
   }))

   export const NoteInfo = styled(Box)(({theme})=>({
    position: "absolute",
    bottom: "0",
    justifyContent: "space-between",
    display: "flex",
    gap: "35px",
    width: "242px"
   }))

   export const  TextAreaStyle = {
    width: "100%",
    border: "none",
    padding: "4px",
    outline: "none",
    fontSize: "1.2em",
    fontFamily: "inherit",
    resize: "none",
    display: "inline-table",

   }