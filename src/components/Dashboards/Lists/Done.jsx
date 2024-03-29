import { DoneAvatar, DoneBy, NoteArea, NoteContent, NoteInfo, NoteTime } from "./ListStyles";
import DeleteIcon from '@mui/icons-material/Delete';


function Done(props){

    const userType = props.user.user.userType;
  const { onDelete } = props;

  function handleDelete(){
    onDelete(props.id);
  }


    return(
        <NoteArea>
        <NoteContent>{props.content}</NoteContent>
        <NoteInfo>
          <NoteTime variant="body2">{props.showTime}</NoteTime>
          <DoneBy>{props.employeeUsername} </DoneBy>
          {userType==="employee"? null: <DoneAvatar>
                <DeleteIcon onClick={handleDelete}/>
            </DoneAvatar>}
        </NoteInfo>
      </NoteArea>
    )
}

export default Done;