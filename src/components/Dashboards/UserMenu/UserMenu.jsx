import {Box, Container, Divider} from "@mui/material";
import NameAvatar from "./Avatar";
import { Heading, OtherInfo, SubHeading } from "./UserMenuStyles";
import { UserArea } from "./UserMenuStyles";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function UserMenu({user, OtherUser}){
    const navigate = useNavigate();
    let data = user.user;
    // console.log(data.username)
    const handleLogout = async () => {
        try {
          const response = await fetch('https://trelloserver-5f5w.onrender.com/logout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            }, 
          });
    
          if (response.ok) {
            navigate('/login'); 
          } else {
            console.error('Logout failed:', response.statusText);
          }
        } catch (error) {
          console.error('Network error:', error.message);
        }
      };

    return(
        <Box>
        <UserArea spacing={4} divider={<Divider orientation="horizontal" flexItem />}>
            <Container>
                <NameAvatar name={data.username}/>
                <Heading mt={2}>{data.username}</Heading>
                <SubHeading>{data.email}</SubHeading>
            </Container>

            {data.userType === "employee" ? (
                <OtherInfo>
                    <Heading mb={2}>Manager Details</Heading>
                    <SubHeading>Name: {OtherUser.username}</SubHeading>
                    <SubHeading>Email: {OtherUser.email}</SubHeading>
                </OtherInfo>
                ) : (
                    <>
                    <Heading mb={2}>Employee Details</Heading>
                {OtherUser.map((employee, index) => (
                    <OtherInfo key={index}>
                    <SubHeading>Name: {employee.username}</SubHeading>
                    <SubHeading>Email: {employee.email}</SubHeading>
                    </OtherInfo>
                ))}
                </>
                )}

               
            <OtherInfo>
                <Heading><Link style={{textDecoration: "none", color: "black"}} to="/logout" onClick={handleLogout}>Logout</Link></Heading>
            </OtherInfo>
                
        </UserArea>
      </Box>  
    )
}

export default UserMenu;