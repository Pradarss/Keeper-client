import * as React from 'react';
import { StyledButton, StyledCard, StyledInput, CardContainer, LinkStyle, Linkbutton, theme, stylediv,ChangeButton } from './Loginstyle';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Login() {
  const [currentOption, setCurrentOption]= React.useState('login');
  const [UserType, setUserType] = React.useState('employee');
  const [managerId, setManagerId] = React.useState('');

  const handleOptionChange=(option)=>{
    setCurrentOption(option);
  }

  const handleUserType = (type) => {
    setUserType(type);
  }
  return (
    <div style={stylediv}>
    <div>
        <ChangeButton onClick={() => handleUserType('employee')}isActive={UserType==='employee'}>Employee</ChangeButton>
        <ChangeButton onClick={() => handleUserType('manager')} isActive={UserType==='manager'}>Manager</ChangeButton>
      </div>
      <CardContainer>

        <div style={{ fontFamily: 'Roboto Mono', fontSize: '4rem' }}>SignUP</div>
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
            placeholder="UserName"
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
          <StyledInput
            type="password"
            placeholder="Confirm Password"
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
          {UserType === 'employee' && (
          <StyledInput
            placeholder="Manager ID"
            value={managerId}
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
        )}
        </ThemeProvider>
        <StyledButton size="lg">
            <Linkbutton to="/dashboard">SignUP</Linkbutton>
          </StyledButton>
          <LinkStyle to='/login'>
            Login Instead
          </LinkStyle>
      </CardContainer>
    </div>

  );
}