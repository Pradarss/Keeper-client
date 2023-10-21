import { NoteArea, NoteContent } from "./ListStyles";

function Done(props){
    return(
        <NoteArea>
        <NoteContent>{props.content}</NoteContent>
      </NoteArea>
    )
}

export default Done;