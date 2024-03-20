import DoneIcon from '@mui/icons-material/Done';
import { DoneAvatar, NoteArea, NoteContent, NoteInfo, NoteTime } from "./ListStyles";
function ToDo(props){
    const userType = props.user.user.userType;
    console.log(userType);
    // const user = "employee";
    console.log(props);

    const handleMoveToDoing = ()=>{
        // console.log(props);
        if (props.content) {
            props.onMoveToDoing(props.id);
        }
        // props.updateShowTime();
    }

    return(
        <NoteArea>
        <NoteContent>{props.content}</NoteContent>
        <NoteInfo>
            <NoteTime variant="body2">{props.showTime}</NoteTime>
            <NoteTime variant="body2">{props.managerUsername}</NoteTime>
            {userType==="employee"?
            <DoneAvatar>
                <DoneIcon onClick={handleMoveToDoing} />
            </DoneAvatar>
            : null }
        </NoteInfo>
      </NoteArea>
    )
}

export default ToDo;