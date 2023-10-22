import { Avatar, Box, Typography } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import { Button } from "bootstrap";
import { DoneAvatar, NoteArea, NoteContent, NoteTime } from "./ListStyles";
import Done from "./Done";
import { getCurrentTime } from "./time";
import { useState } from "react";

function ToDo(props){

    const handleMoveToDoing = ()=>{
        props.onMoveToDoing(props.content);
        // props.updateShowTime();
    }

    return(
        <NoteArea>
        <NoteContent>{props.content}</NoteContent>
        <NoteTime display="flex" float="left" margin="9px" variant="body2">{props.showTime}</NoteTime>
        <DoneAvatar>
            <DoneIcon onClick={handleMoveToDoing} />
        </DoneAvatar>
      </NoteArea>
    )
}

export default ToDo;