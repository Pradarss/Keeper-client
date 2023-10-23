import { styled } from '@mui/system';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';


export const StyledInput = styled(Input)(({ theme }) => ({
  margin: '13px',
  border: '1px solid black',
  borderRadius: '13px',
  padding: '2px 8px',
  width: '50vh',
  
  
}));

export const changebutton= styled(Link)(({theme})=>({
  
}));

export const StyledButton = styled(Button)(({theme})=>({
    backgroundColor: '#F1EFEF',
    color: 'black', 
    width: '50vh',
    borderRadius: '20px',
    marginTop: '0.3vh',
    border: '1px solid #7D7C7C',
    '&:hover': {
        backgroundColor: '#264653',
        color: 'white'
      },
}));

export const CardContainer = styled(Card)({
  maxWidth: 400, // Customize the card's maximum width as needed
  padding: 50,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: 50,
  boxShadow: '1px 1px 5px 5px #186F65',
});

export const LinkStyle= styled(Link)({
  textDecoration: 'none',
  paddingTop: 15,
  '&:hover': {
    color: '#264653',
    textDecoration: 'underline',
  }
})

export const Linkbutton= styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
})
