import { DoneBy, NoteArea, NoteContent, NoteInfo, NoteTime } from "./ListStyles";

function Done(props){
    return(
        <NoteArea>
        <NoteContent>{props.content}</NoteContent>
        <NoteInfo>
          <NoteTime variant="body2">{props.showTime}</NoteTime>
          <DoneBy>By Trello</DoneBy>
        </NoteInfo>
      </NoteArea>
    )
}

export default Done;