import * as React from 'react';
import { StyledButton, StyledCard, StyledInput, CardContainer, LinkStyle, Linkbutton, theme, stylediv,userstyle, ChangeButton } from './Loginstyle';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from 'bootstrap';

export default function Login() {
  const [currentOption, setCurrentOption] = React.useState('login');
  
  
  // const [activebutton, setActiveButton]= React.useState('employee');


  return (
    <div style={stylediv}>
      
      <CardContainer>

        <div style={{ fontFamily: 'Roboto Mono', fontSize: '4rem' }}>{currentOption === 'login' ? 'Login' : 'Sign Up'}</div>
        <ThemeProvider theme={theme}>
          <StyledInput
            // type="email"
            placeholder="Email"
            sx={{
              '&::before': {
                display: 'none',
              },
              '&:focus-within': {
                outline: '2px solid var(--Input-focusedHighlight)',
                outlineOffset: '2px',
              },
            }}
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
          />
        
        </ThemeProvider>
        <StyledButton size="lg">
          <Linkbutton to="/dashboard">{currentOption === 'login' ? 'Login' : 'Sign Up'}</Linkbutton>
        </StyledButton>
        <LinkStyle to={currentOption === 'login' ? '/signup' : '/login'}>
          {currentOption === 'login' ? 'Create Account' : 'Login Instead'}
        </LinkStyle>
      </CardContainer>
    </div>

  );
}