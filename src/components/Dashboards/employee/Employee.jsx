import { Box, Divider, Grid, Stack } from "@mui/material";
import DashNav from "../DashNav/DashNav";
import { ListArea, ListTitle, UserArea } from "./employeeStyles";
import UserMenu from "./UserMenu/UserMenu";
import ToDo from "./Lists/ToDo";
import Doing from "./Lists/Doing";
import Done from "./Lists/Done";

const contents = ["first","second","third","fourth","fifth"];

function Employee(){
    return(
        <Box>
            <DashNav />
            <Grid container spacing={1}>

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
                            {contents.map((content) => (
                                <ToDo content={content} />
                            ))}
                        </Stack>

                        <Stack spacing={2} direction="column">
                            <ListTitle>Doing</ListTitle>
                            {contents.map((content) => (
                                <Doing content={content} />
                            ))}
                        </Stack>

                        <Stack spacing={2} direction="column">
                            <ListTitle>Done</ListTitle>
                            {contents.map((content) => (
                                <Done content={content} />
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