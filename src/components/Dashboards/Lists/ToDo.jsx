import DoneIcon from '@mui/icons-material/Done';
import { DoneAvatar, NoteArea, NoteContent, NoteInfo, NoteTime } from "./ListStyles";
import { useState } from 'react';
function ToDo(props){

    const [user, setUser] = useState(["employee"]);

    const handleMoveToDoing = ()=>{
        if (props.content) {
            props.onMoveToDoing(props.content);
        }
        // props.updateShowTime();
    }

    return(
        <NoteArea>
        <NoteContent>{props.content}</NoteContent>
        <NoteInfo>
            <NoteTime variant="body2">{props.showTime}</NoteTime>
            {user=="employee"?
            <DoneAvatar>
                <DoneIcon onClick={handleMoveToDoing} />
            </DoneAvatar>
            : null }
        </NoteInfo>
      </NoteArea>
    )
}

export default ToDo;