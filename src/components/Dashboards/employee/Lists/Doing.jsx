import { DoneAvatar, NoteArea, NoteContent, NoteTime } from "./ListStyles";
import DoneAllIcon from '@mui/icons-material/DoneAll';


function Doing(props){

    const handleMoveToDone = ()=>{
        props.onMoveToDone(props.content);
        // props.updateShowTime();
    }

    return(
        <NoteArea>
        <NoteContent>{props.content}</NoteContent>
        <NoteTime display="flex" float="left" margin="9px" variant="body2">{props.showTime}</NoteTime>
        <DoneAvatar>
            <DoneAllIcon onClick={handleMoveToDone}/>
        </DoneAvatar>
      </NoteArea>
    )
}

export default Doing;