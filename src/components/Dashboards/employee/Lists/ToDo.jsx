import { Avatar, Box, Typography } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import { Button } from "bootstrap";
import { DoneAvatar, NoteArea, NoteContent, NoteTime } from "./ListStyles";
import Done from "./Done";

const date = new Date();
const showTime = date.getHours() + ':' + date.getMinutes()

function ToDo(props){
    return(
        <NoteArea>
        <NoteContent>{props.content}</NoteContent>
        <NoteTime display="flex" float="left" margin="9px" variant="body2">{showTime}</NoteTime>
        <DoneAvatar>
            <DoneIcon />
        </DoneAvatar>
      </NoteArea>
    )
}

export default ToDo;