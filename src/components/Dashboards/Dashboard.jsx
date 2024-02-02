import { Box, Divider, Grid, Stack } from "@mui/material";
import DashNav from "./DashNav/DashNav";
import { ListArea, ListTitle, UserArea } from "./DashboardStyles";
import UserMenu from "./UserMenu/UserMenu";
import ToDo from "./Lists/ToDo";
import Doing from "./Lists/Doing";
import Done from "./Lists/Done";
import { useEffect, useState } from "react";
// import { getCurrentTime } from "./Lists/time";
import CreateNoteArea from "./Lists/CreateNoteArea";
import { useParams } from 'react-router-dom';

// const contents = ["first","second","third","fourth","fifth"];

function Dashboard(){

    const[todo, setTodo] = useState([]);
    // const[todo, setTodo] = useState(contents.map((content) => ({ content, time: getCurrentTime() })));
    const[doing, setDoing] = useState([]);
    const[done, setDone] = useState([]);
//   const [tasks, setTasks] = useState([]);
    const { userType } = useParams();
    const user = userType; 

    // const [showTime, setShowTime] = useState(getCurrentTime());

    // const moveTaskToDoing = (task)=>{
    //     const updatedTodo = todo.filter((item) => item.content !== task);
    //     setTodo(updatedTodo);
    //     setDoing([...doing, { content: task, time: getCurrentTime() }]);
    // }
    const moveTaskToStatus = (_id, status, setTodo, setDoing, setDone) => {
        fetch(`http://localhost:5000/dashboard/employee/${status.toLowerCase()}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: _id }),
        })
            .then(response => response.json())
            .then(responseTask => {
                // Update the corresponding array based on the status
                switch (status) {
                    case 'TODO':
                        setTodo(prevTasks => prevTasks.filter(task => task._id !== _id));
                        break;
                    case 'DOING':
                        setDoing(prevTasks => [...prevTasks, { _id: responseTask._id, task: responseTask.task, time: responseTask.time, status: responseTask.status }]);
                        break;
                    case 'DONE':
                        setDone(prevTasks => [...prevTasks, { _id: responseTask._id, task: responseTask.task, time: responseTask.time, status: responseTask.status }]);
                        break;
                    default:
                        break;
                }
            })
            .catch(error => console.error(`Error moving task to ${status}:`, error));
    };

    function moveTaskToDoing(_id){
        moveTaskToStatus(_id, 'DOING', setTodo, setDoing, setDone);
    }

    // const moveTaskToDone = (task)=>{
    //     const updatedDoing = doing.filter((item)=>item.content!==task);
    //     setDoing(updatedDoing);
    //     setDone([...done, { content: task, time: getCurrentTime() }]);
    // }

    function moveTaskToDone(_id){
        moveTaskToStatus(_id, 'DONE', setTodo, setDoing, setDone);
    }

    // function addTask(newTask){
    //     console.log(newTask);
    //     setTodo((prevTasks) => [
    //         ...prevTasks,
    //         { content: newTask, time: getCurrentTime() }
    //       ]);
    // }

    function addTask(newTask){
        fetch("http://localhost:5000/dashboard/manager",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(newTask),
            })
            
            .then(function(response){
                return response.json();
            })
            .then(function (savedTask) {
                // console.log(savedTask);
                setTodo((prevTasks) => [
                  ...prevTasks,
                  {_id:savedTask._id, task: savedTask.task, time: savedTask.time, status: savedTask.status }
                ]);
                console.log(todo);
            })
            // console.log(todo[todo.length - 1].id);
    }

    useEffect(() => {
        // Fetch tasks from the backend API when the component mounts
 
        fetch("http://localhost:5000/dashboard?status=TODO")
          .then(response => response.json())
          .then(data => {setTodo(data);
        })
          .catch(error => console.error("Error fetching tasks:", error));

          // Fetch 'DOING' tasks
        fetch("http://localhost:5000/dashboard?status=DOING")
        .then(response => response.json())
        .then(data => setDoing(data))
        .catch(error => console.error("Error fetching tasks:", error));

        // Fetch 'DONE' tasks
        fetch("http://localhost:5000/dashboard?status=DONE")
        .then(response => response.json())
        .then(data => setDone(data))
        .catch(error => console.error("Error fetching tasks:", error));
      }, []);

    function deleteTask(content){
        setDone((prevTasks) => 
            prevTasks.filter((task) => task.content !== content)
          );
    }

    return(
        <Box sx={{backgroundImage: "url('assets/dashbg.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundColor: "cadetblue"}}>
            <DashNav />
            <Grid container spacing={1} mt={1}>

            <Grid item xs={2}>  

                <UserArea>
                    <UserMenu user={user}/>
                </UserArea>

            </Grid>

            <Grid item xs={10}>
                <ListArea>  
                <Stack direction="row" spacing={5} justifyContent="space-evenly" divider={<Divider orientation="vertical" flexItem />}>
                        <Stack spacing={2} direction="column">
                            <ListTitle>ToDo</ListTitle>
                            {user==="employee"?null:<CreateNoteArea onAdd={addTask}/>}
                            {todo.map((task) => (
                                <ToDo id={task._id} content={task.task} onMoveToDoing={moveTaskToDoing} showTime={task.time} user={user}  />
                            ))}
                        </Stack>

                        <Stack spacing={2} direction="column">
                            <ListTitle>Doing</ListTitle>
                            {doing.map((task) => (
                                <Doing id={task._id} content={task.task} onMoveToDone={moveTaskToDone} showTime={task.time} user={user}/>
                            ))}
                        </Stack>

                        <Stack spacing={2} direction="column">
                            <ListTitle>Done</ListTitle>
                            {done.map((task) => (
                                <Done content={task.content} showTime={task.time} user={user} onDelete={deleteTask}/>
                            ))}
                        </Stack>
                    </Stack>
                </ListArea>

            </Grid>

            </Grid>
       </Box> 
  );
}

export default Dashboard;