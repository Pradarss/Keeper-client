import * as React from 'react';
import { StyledButton,  StyledInput, CardContainer, LinkStyle, Linkbutton, theme, stylediv, divstyle, divs } from './Loginstyle';
import {  ThemeProvider } from '@mui/material/styles';
// import { Button } from 'bootstrap';

export default function Login() {
  const [currentOption, setCurrentOption] = React.useState('login');
  const [form, setform]= React.useState({});
  
  // const [activebutton, setActiveButton]= React.useState('employee');
  const handleForm=(e)=>{
    setform({
      ...form,
      [e.target.name]:e.target.value,
    });
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    // fetch()
    // console.log(form);
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