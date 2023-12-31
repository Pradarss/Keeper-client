import { Avatar } from "@mui/material";

function NameAvatar({ name }) {
  // Function to extract the first character of the name
  const getFirstCharacter = (name) => {
    return name ? name.charAt(0).toUpperCase() : '';
  }

  return (
    <Avatar>
      {getFirstCharacter(name)}
    </Avatar>
  );
}

  export default NameAvatar;