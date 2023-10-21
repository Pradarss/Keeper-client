import { DoneAvatar, NoteArea, NoteContent } from "./ListStyles";
import DoneAllIcon from '@mui/icons-material/DoneAll';


function Doing(props){
    return(
        <NoteArea>
        <NoteContent>{props.content}</NoteContent>
        <DoneAvatar>
            <DoneAllIcon />
        </DoneAvatar>
      </NoteArea>
    )
}

export default Doing;