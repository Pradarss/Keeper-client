import * as React from 'react';
import { StyledButton, StyledCard, StyledInput, CardContainer, LinkStyle, Linkbutton, theme, stylediv } from './Loginstyle';
import { createTheme, ThemeProvider } from '@mui/material/styles';




export default function Login() {
  const [currentOption, setCurrentOption] = React.useState('login');

  const handleOptionChange = (option) => {
    setCurrentOption(option);
  }

  return (
    <div style={stylediv}>
      {/* <div>
            <changebutton onClick={() => handleOptionChange('login')}>Login</changebutton>
            <changebutton onClick={() => handleOptionChange('signup')} to="/signup">Sign Up</changebutton>
          </div> */}
      <CardContainer>

        <div style={{ fontFamily: 'Roboto Mono', fontSize: '4rem' }}>{currentOption === 'login' ? 'Login' : 'Sign Up'}</div>
        <ThemeProvider theme={theme}>
          <StyledInput
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
          <Linkbutton>{currentOption === 'login' ? 'Login' : 'Sign Up'}</Linkbutton>
        </StyledButton>
        <LinkStyle to={currentOption === 'login' ? '/signup' : '/login'}>
          {currentOption === 'login' ? 'Create Account' : 'Login Instead'}
        </LinkStyle>
      </CardContainer>
    </div>

  );
}