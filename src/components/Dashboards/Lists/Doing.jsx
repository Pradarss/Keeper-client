// import { useState } from "react";
import { DoneAvatar, DoneBy, NoteArea, NoteContent, NoteInfo, NoteTime } from "./ListStyles";
import DoneAllIcon from '@mui/icons-material/DoneAll';


function Doing(props){

    const userType = props.user.user.userType;
    // const user = "employee";


    const handleMoveToDone = ()=>{
        if (props.content) {
            props.onMoveToDone(props.id);
        }
    }

    return(
        <NoteArea>
        <NoteContent>{props.content}</NoteContent>
        <NoteInfo>
            <NoteTime variant="body2">{props.showTime}</NoteTime>
            <NoteTime variant="body2">{props.managerUsername}</NoteTime>
            <DoneBy>{props.employeeUsername} </DoneBy>
            {userType==="employee"?<DoneAvatar>
                <DoneAllIcon onClick={handleMoveToDone}/>
            </DoneAvatar> : null}
        </NoteInfo>
      </NoteArea>
    )
}

export default Doing;