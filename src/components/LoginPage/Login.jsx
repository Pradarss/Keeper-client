import * as React from 'react';
import { StyledButton,  StyledInput, CardContainer, LinkStyle, Linkbutton, theme, stylediv, divstyle, divs } from './Loginstyle';
import {  ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [currentOption, setCurrentOption] = React.useState('login');
  const [form, setform]= React.useState({});
  
  const handleForm=(e)=>{
    setform({
      ...form,
      [e.target.name]:e.target.value,
    });
  }

  const handleSubmit=async (e)=>{
    e.preventDefault();
    const response= await fetch('http://localhost:5000/login',{
      method: 'POST',
      body: JSON.stringify({...form}),
      headers:{
        'Content-Type': 'application/JSON',
      }
    })
    if(response.status===200)
    {
      const data=await response.json();
      console.log(data);
      const userType= data.userType;
      navigate(`/dashboard/${userType}`, {state :{ data}});
    }
  }

  return (
    <div style={stylediv}>
      <CardContainer>
        <form onSubmit={handleSubmit}>
      {/* <p>{JSON.stringify(form)}</p> */}

        <div style={divstyle}>Login</div>
        <ThemeProvider theme={theme}>
          <StyledInput
            // type="email"
            placeholder="Username"
            sx={{
              '&::before': {
                display: 'none',
              },
              '&:focus-within': {
                outline: '2px solid var(--Input-focusedHighlight)',
                outlineOffset: '2px',
              },
            }}
            name="Username"
            onChange={handleForm}
          />
          <StyledInput
            type="password"
            placeholder="Password"
            sx={{
              '&::before': {
                display: 'none',
              },
              '&:focus-within': {
                outline: '2px solid var(--Input-focusedHighlight)',
                outlineOffset: '2px',
              },
            }}
            name="password"
            onChange={handleForm}
          />
        
        </ThemeProvider>
        <div style={divs}>
        <StyledButton size="lg" type="submit">
          <Linkbutton >Login</Linkbutton>
        </StyledButton>
        </div>
        <LinkStyle to={currentOption === 'login' ? '/signup' : '/login'}>
          Create Account
        </LinkStyle>
        </form>
      </CardContainer>
    </div>

  );
}