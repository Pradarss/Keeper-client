// import { Fab, Zoom } from "@mui/material";
import { CreateArea, DoneAvatar } from "./ListStyles";
import AddIcon from '@mui/icons-material/Add';
// import { useState } from "react";
import { TextAreaStyle } from "./ListStyles";
import { useState } from "react";


function CreateNoteArea({onAdd}){

    const [newTask, setNewTask] = useState({
        task: ""
      });

      function handleChange(event) {
        const { name, value } = event.target;
        setNewTask((prevTask) => ({
          ...prevTask,
          [name]: value
        }));
      }
    
      function addNote(event) {
        event.preventDefault();
        if (newTask.task) {
          onAdd(newTask);
          // console.log(newTask.task);
          setNewTask({
            task: ""
          });
        }
      }

    return(
        <CreateArea>
            <form>
                <textarea style={TextAreaStyle} name="task" placeholder="Add a task..." onChange={handleChange} value={newTask.task}></textarea>
                <DoneAvatar>
                <AddIcon onClick={addNote}/>
                </DoneAvatar>
            </form>
        </CreateArea>
    )
}

export default CreateNoteArea;