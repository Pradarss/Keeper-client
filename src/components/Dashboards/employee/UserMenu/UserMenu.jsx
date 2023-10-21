import { Avatar, Box } from "@mui/material";

function UserMenu(){
    return(
        <Box>
        <Avatar sx={{height: "5rem", width: "95%"}}></Avatar>
        <h1>Name</h1>
      </Box>  
    )
}

export default UserMenu;