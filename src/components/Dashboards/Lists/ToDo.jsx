import DoneIcon from '@mui/icons-material/Done';
import { DoneAvatar, NoteArea, NoteContent, NoteInfo, NoteTime } from "./ListStyles";
function ToDo(props){
    const userType = props.user.user.userType;

    const handleMoveToDoing = ()=>{
        if (props.content) {
            props.onMoveToDoing(props.id);
        }
    }

    return(
        <NoteArea>
        <NoteContent>{props.content}</NoteContent>
        <NoteInfo>
            <NoteTime variant="body2">{props.showTime}</NoteTime>
            {userType==="employee"&&
            <DoneAvatar>
                <DoneIcon onClick={handleMoveToDoing} />
            </DoneAvatar>
             }
        </NoteInfo>
      </NoteArea>
    )
}

export default ToDo;