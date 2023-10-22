import { NoteArea, NoteContent, NoteTime } from "./ListStyles";

function Done(props){
    return(
        <NoteArea>
        <NoteContent>{props.content}</NoteContent>
        <NoteTime display="flex" float="left" margin="9px" variant="body2">{props.showTime}</NoteTime>
      </NoteArea>
    )
}

export default Done;