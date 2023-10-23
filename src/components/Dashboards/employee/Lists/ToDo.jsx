import DoneIcon from '@mui/icons-material/Done';
import { DoneAvatar, DoneBy, NoteArea, NoteContent, NoteInfo, NoteTime } from "./ListStyles";
import { Box, Typography } from '@mui/material';

function ToDo(props){

    const handleMoveToDoing = ()=>{
        props.onMoveToDoing(props.content);
        // props.updateShowTime();
    }

    return(
        <NoteArea>
        <NoteContent>{props.content}</NoteContent>
        <NoteInfo>
            <NoteTime display="flex" float="left" margin="9px" variant="body2">{props.showTime}</NoteTime>
            <DoneBy>By Trello</DoneBy>
            <DoneAvatar>
                <DoneIcon onClick={handleMoveToDoing} />
            </DoneAvatar>
        </NoteInfo>
      </NoteArea>
    )
}

export default ToDo;