import { DoneBy, NoteArea, NoteContent, NoteInfo, NoteTime } from "./ListStyles";

function Done(props){
    return(
        <NoteArea>
        <NoteContent>{props.content}</NoteContent>
        <NoteInfo>
          <NoteTime display="flex" float="left" margin="9px" variant="body2">{props.showTime}</NoteTime>
          <DoneBy>By Trello</DoneBy>
        </NoteInfo>
      </NoteArea>
    )
}

export default Done;