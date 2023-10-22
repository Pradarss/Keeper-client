import { Box, Divider, Grid, Stack } from "@mui/material";
import DashNav from "../DashNav/DashNav";
import { ListArea, ListTitle, UserArea } from "./employeeStyles";
import UserMenu from "./UserMenu/UserMenu";
import ToDo from "./Lists/ToDo";
import Doing from "./Lists/Doing";
import Done from "./Lists/Done";
import { useState } from "react";
import { getCurrentTime } from "./Lists/time";

const contents = ["first","second","third","fourth","fifth"];

function Employee(){

    const[todo, setTodo] = useState(contents);
    const[doing, setDoing] = useState([]);
    const[done, setDone] = useState([]);
    const [showTime, setShowTime] = useState(getCurrentTime());

    const moveTaskToDoing = (task)=>{
        const updatedTodo = todo.filter((item) => item !== task);
        setTodo(updatedTodo);
        setDoing([...doing,task]);
        setShowTime(getCurrentTime());
    }

    const moveTaskToDone = (task)=>{
        const updatedDoing = doing.filter((item)=>item!==task);
        setDoing(updatedDoing);
        setDone([...done,task]);
        setShowTime(getCurrentTime());
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
                            {todo.map((task) => (
                                <ToDo content={task} onMoveToDoing={moveTaskToDoing} showTime={showTime}/>
                            ))}
                        </Stack>

                        <Stack spacing={2} direction="column">
                            <ListTitle>Doing</ListTitle>
                            {doing.map((task) => (
                                <Doing content={task} onMoveToDone={moveTaskToDone} showTime={showTime}/>
                            ))}
                        </Stack>

                        <Stack spacing={2} direction="column">
                            <ListTitle>Done</ListTitle>
                            {done.map((task) => (
                                <Done content={task} showTime={showTime}/>
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