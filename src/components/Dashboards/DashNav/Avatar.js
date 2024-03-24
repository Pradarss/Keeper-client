import { Avatar } from "@mui/material";

function NameAvatar({ name }) {
  const getFirstCharacters = (name) => {
    if (name) {
      const [firstName, lastName] = name.split(" ");
      const firstCharacter = firstName ? firstName.charAt(0).toUpperCase() : '';
      const secondCharacter = lastName ? lastName.charAt(0).toUpperCase() : '';
      return firstCharacter + secondCharacter;
    }
    return '';
  }

  return (
    <Avatar>
      {getFirstCharacters(name)}
    </Avatar>
  );
}

export default NameAvatar;
