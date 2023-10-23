import DoneIcon from '@mui/icons-material/Done';
import { DoneAvatar, NoteArea, NoteContent, NoteInfo, NoteTime } from "./ListStyles";
function ToDo(props){

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
            <NoteTime display="flex" float="left" margin="9px" variant="body2">{props.showTime}</NoteTime>
            <DoneAvatar>
                <DoneIcon onClick={handleMoveToDoing} />
            </DoneAvatar>
        </NoteInfo>
      </NoteArea>
    )
}

export default ToDo;