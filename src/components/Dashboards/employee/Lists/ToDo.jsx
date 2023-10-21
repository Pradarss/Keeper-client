import { Avatar, Box, Typography } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import { Button } from "bootstrap";
import { DoneAvatar, NoteArea, NoteContent } from "./ListStyles";
import Done from "./Done";

function ToDo(props){
    return(
        <NoteArea>
        <NoteContent>{props.content}</NoteContent>
        <DoneAvatar>
            <DoneIcon />
        </DoneAvatar>
      </NoteArea>
    )
}

export default ToDo;