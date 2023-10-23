import { DoneAvatar, DoneBy, NoteArea, NoteContent, NoteInfo, NoteTime } from "./ListStyles";
import DoneAllIcon from '@mui/icons-material/DoneAll';


function Doing(props){

    const handleMoveToDone = ()=>{
        if (props.content) {
            props.onMoveToDone(props.content);
            // props.updateShowTime();
        }
    }

    return(
        <NoteArea>
        <NoteContent>{props.content}</NoteContent>
        <NoteInfo>
            <NoteTime variant="body2">{props.showTime}</NoteTime>
            <DoneBy>By Trello</DoneBy>
            <DoneAvatar>
                <DoneAllIcon onClick={handleMoveToDone}/>
            </DoneAvatar>
        </NoteInfo>
      </NoteArea>
    )
}

export default Doing;