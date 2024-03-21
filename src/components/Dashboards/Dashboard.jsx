import { Box, Divider, Grid, Stack } from "@mui/material";
import DashNav from "./DashNav/DashNav";
import { ListArea, ListTitle, UserArea } from "./DashboardStyles";
import UserMenu from "./UserMenu/UserMenu";
import ToDo from "./Lists/ToDo";
import Doing from "./Lists/Doing";
import Done from "./Lists/Done";
import { useEffect, useState } from "react";
import CreateNoteArea from "./Lists/CreateNoteArea";
import { useLocation } from 'react-router-dom';

function Dashboard() {

    const [todo, setTodo] = useState([]);
    const [doing, setDoing] = useState([]);
    const [done, setDone] = useState([]);
    // const { userType } = useParams();
    // const user = "employee";
    const location = useLocation();
    const { OtherUser } = location.state.data;
    const { user } = location.state.data;
    const { userType } = location.state.data;
    // console.log(OtherUser.username);
    // console.log(user.user.username);
    // console.log(userType); 
    // console.log(user);
    const UserName = user.user.userType === 'manager' ? user.user.username : OtherUser.username;
    console.log( user);
    const moveTaskToStatus = (_id, status, setTodo, setDoing, setDone) => {
        const employeeUsername = user.user.username;
        fetch(`http://localhost:5000/dashboard/employee/${status.toLowerCase()}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: _id, employeeUsername: employeeUsername }),
        })
            .then(response => response.json())
            .then(responseTask => {
                switch (status) {
                    case 'TODO':
                        setTodo(prevTasks => prevTasks.filter(task => task._id !== _id));
                        break;
                    case 'DOING':
                        setTodo(prevTasks => prevTasks.filter(task => task._id !== _id));
                        setDoing(prevTasks => [...prevTasks, { _id: responseTask._id, task: responseTask.task, time: responseTask.time, status: responseTask.status, manager_username: responseTask.manager_username, employee_username: responseTask.employee_username }]);
                        break;
                    case 'DONE':
                        setDoing(prevTasks => prevTasks.filter(task => task._id !== _id));
                        setDone(prevTasks => [...prevTasks, { _id: responseTask._id, task: responseTask.task, time: responseTask.time, status: responseTask.status, manager_username: responseTask.manager_username, employee_username: responseTask.employee_username }]);
                        break;
                    default:
                        break;
                }
            })
            .catch(error => console.error(`Error moving task to ${status}:`, error));
    };

    function moveTaskToDoing(_id) {
        moveTaskToStatus(_id, 'DOING', setTodo, setDoing, setDone);
    }

    function moveTaskToDone(_id) {
        moveTaskToStatus(_id, 'DONE', setTodo, setDoing, setDone);
    }

    function addTask(newTask) {
        const managerUsername = user.user.username;
        // console.log('Manager Username:', managerUsername);
        const taskWithManager = {
            ...newTask,
            manager_username: managerUsername
        };
        // console.log('Task with Manager:', taskWithManager);
        fetch("http://localhost:5000/dashboard/manager", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskWithManager),
        })

            .then(function (response) {
                return response.json();
            })
            .then(function (savedTask) {
                // console.log('Saved Task:', savedTask);
                setTodo((prevTasks) => [
                    ...prevTasks,
                    { _id: savedTask._id, task: savedTask.task, time: savedTask.time, status: savedTask.status, manager_username: savedTask.manager_username }
                ]);
            })
        console.log(todo);
    }

    useEffect(() => {

        fetch(`http://localhost:5000/dashboard?status=TODO&manager_username=${UserName}`)

            .then(response => response.json())
            .then(data => {
                setTodo(data);
            })
            .catch(error => console.error("Error fetching tasks:", error));

        fetch(`http://localhost:5000/dashboard?status=DOING&manager_username=${UserName}`)
            .then(response => response.json())
            .then(data => setDoing(data))
            .catch(error => console.error("Error fetching tasks:", error));

        fetch(`http://localhost:5000/dashboard?status=DONE&manager_username=${UserName}`)
            .then(response => response.json())
            .then(data => setDone(data))
            .catch(error => console.error("Error fetching tasks:", error));
    }, []);

    function deleteTask(id) {
        fetch("http://localhost:5000/dashboard/manager", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id }),
        })
            .then(response => response.json())
            .then(deletedTask => {
                console.log(deletedTask);
                setDone(prevTasks => prevTasks.filter(task => task._id !== id));
            })
            .catch(error => console.error("Error deleting task:", error));
    }

    return (
        <Box sx={{ backgroundImage: "url('assets/dashbg.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundColor: "cadetblue" }}>
            <DashNav user={user} />
            <Grid container spacing={1} mt={1}>

                <Grid item xs={2.5}>

                    <UserArea>
                        <UserMenu user={user} OtherUser={OtherUser} />
                    </UserArea>

                </Grid>

                <Grid item xs={9}>
                    <ListArea>
                        <Stack direction="row" spacing={5} justifyContent="space-evenly" divider={<Divider orientation="vertical" flexItem />}>
                            <Stack spacing={2} direction="column">
                                <ListTitle>ToDo</ListTitle>
                                {userType === "employee" ? null : <CreateNoteArea onAdd={addTask} />}
                                {todo.map((task) => (
                                    <ToDo id={task._id} content={task.task} onMoveToDoing={moveTaskToDoing} showTime={task.time} managerUsername={task.manager_username} user={user} />
                                ))}
                            </Stack>

                            <Stack spacing={2} direction="column">
                                <ListTitle>Doing</ListTitle>

                                {doing
                                    .filter(task => userType === "manager" || (userType === "employee" && task.employee_username === user.user.username))
                                    .map(task => (
                                        <Doing
                                            key={task._id}
                                            id={task._id}
                                            content={task.task}
                                            onMoveToDone={moveTaskToDone}
                                            showTime={task.time}
                                            managerUsername={task.manager_username}
                                            employeeUsername={task.employee_username}
                                            user={user}
                                        />
                                    ))
                                }

                            </Stack>


                            <Stack spacing={2} direction="column">
                                <ListTitle>Done</ListTitle>
                                {done.map((task) => (
                                    <Done id={task._id} content={task.task} showTime={task.time} managerUsername={task.manager_username} employeeUsername={task.employee_username} user={user} onDelete={deleteTask} />
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