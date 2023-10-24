import { Box, Divider, Grid, Stack } from "@mui/material";
import DashNav from "./DashNav/DashNav";
import { ListArea, ListTitle, UserArea } from "./DashboardStyles";
import UserMenu from "./UserMenu/UserMenu";
import ToDo from "./Lists/ToDo";
import Doing from "./Lists/Doing";
import Done from "./Lists/Done";
import { useState } from "react";
import { getCurrentTime } from "./Lists/time";
import CreateArea from "./Lists/CreateArea";

const contents = ["first","second","third","fourth","fifth"];

function Employee(){

    const[todo, setTodo] = useState(contents.map((content) => ({ content, time: getCurrentTime() })));
    const[doing, setDoing] = useState([]);
    const[done, setDone] = useState([]);
    const user = "manager";

    // const [showTime, setShowTime] = useState(getCurrentTime());

    const moveTaskToDoing = (task)=>{

        // console.log(task.content);
        const updatedTodo = todo.filter((item) => item.content !== task);
        setTodo(updatedTodo);
        setDoing([...doing, { content: task, time: getCurrentTime() }]);
        // setShowTime(getCurrentTime());
    }

    const moveTaskToDone = (task)=>{
        const updatedDoing = doing.filter((item)=>item.content!==task);
        setDoing(updatedDoing);
        setDone([...done, { content: task, time: getCurrentTime() }]);
        // setShowTime(getCurrentTime());
    }

    return(
        <Box sx={{backgroundImage: "url('assets/dashbg.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover",}}>
            <DashNav />
            <Grid container spacing={1} mt={1}>

            <Grid item xs={2}>  

                <UserArea>
                    <UserMenu />
                </UserArea>

            </Grid>

            <Grid item xs={10}>
                <ListArea>
                <Stack direction="row" spacing={5} justifyContent="space-evenly" divider={<Divider orientation="vertical" flexItem />}>
                        <Stack spacing={2} direction="column">
                            <ListTitle>ToDo</ListTitle>
                            {user==="employee"?null:<CreateArea />}
                            {todo.map((task) => (
                                <ToDo content={task.content} onMoveToDoing={moveTaskToDoing} showTime={task.time} user={user}/>
                            ))}
                        </Stack>

                        <Stack spacing={2} direction="column">
                            <ListTitle>Doing</ListTitle>
                            {doing.map((task) => (
                                <Doing content={task.content} onMoveToDone={moveTaskToDone} showTime={task.time} user={user}/>
                            ))}
                        </Stack>

                        <Stack spacing={2} direction="column">
                            <ListTitle>Done</ListTitle>
                            {done.map((task) => (
                                <Done content={task.content} showTime={task.time} user={user}/>
                            ))}
                        </Stack>
                    </Stack>
                </ListArea>

            </Grid>

            </Grid>
       </Box> 
  );
}

export default Employee;