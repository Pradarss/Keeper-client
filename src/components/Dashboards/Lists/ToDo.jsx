import DoneIcon from '@mui/icons-material/Done';
import { DoneAvatar, NoteArea, NoteContent, NoteInfo, NoteTime } from "./ListStyles";
function ToDo(props){

    // const user = "employee";
    // console.log(props);

    const handleMoveToDoing = ()=>{
        console.log(props.key);
        if (props.content) {
            props.onMoveToDoing(props.key);
        }
        // props.updateShowTime();
    }

    return(
        <NoteArea>
        <NoteContent>{props.content}</NoteContent>
        <NoteInfo>
            <NoteTime variant="body2">{props.showTime}</NoteTime>
            {props.user==="employee"?
            <DoneAvatar>
                <DoneIcon onClick={handleMoveToDoing} />
            </DoneAvatar>
            : null }
        </NoteInfo>
      </NoteArea>
    )
}

export default ToDo;