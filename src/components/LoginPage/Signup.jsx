import * as React from 'react';
import { StyledButton, StyledInput, CardContainer, LinkStyle, Linkbutton, theme, stylediv, ChangeButton, divstyle } from './Loginstyle';
import {  ThemeProvider } from '@mui/material/styles';

export default function Login() {
  const [currentOption, setCurrentOption] = React.useState('login');
  const [UserType, setUserType] = React.useState('employee');
  const [managerId, setManagerId] = React.useState('');
  const [form, setform] = React.useState({});
  const [password, setpassword] = React.useState('');
  const [confirmpassword, setconfirmpassword] = React.useState('');
  const [isError, setIsError] = React.useState(null)
  // const [passwordMatch, setPasswordMatch]=React.useState(false);

  const handleOptionChange = (option) => {
    setCurrentOption(option);
  }

  const handleForm = (e) => {
    if(e.target.name==='password'){
      setpassword(e.target.value);
    }
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }

  const checkValidation = (e) => {
    setconfirmpassword(e.target.value);
    if ( password === e.target.value) {
      setIsError("");
      // setPasswordMatch(true);
    }else{
      // setPasswordMatch(false);
      setIsError("Password should match");
    }
  }

  const handleUserType = (type) => {
    setUserType(type);
  }
  return (
    <div style={stylediv}>
      <div>
        <ChangeButton onClick={() => handleUserType('employee')} isActive={UserType === 'employee'}>Employee</ChangeButton>
        <ChangeButton onClick={() => handleUserType('manager')} isActive={UserType === 'manager'}>Manager</ChangeButton>
      </div>

      <CardContainer>
        <form onSubmit={handleSubmit}>
          <div>{isError}</div>
          <div style={divstyle}>SignUP</div>
          <ThemeProvider theme={theme}>
            <StyledInput
              name="email"
              onChange={handleForm}
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
              name="UserName"
              onChange={handleForm}
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
              name="password"
              onChange={handleForm}
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
              name="confirmpassword"
              value={confirmpassword}
              onChange={checkValidation}
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
                name="id"
                onChange={handleForm}
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
          <StyledButton size="lg" type="submit">
            <Linkbutton >SignUP</Linkbutton>
          </StyledButton>
          <LinkStyle to='/login'>
            Login Instead
          </LinkStyle>
        </form>
      </CardContainer>
    </div>

  );
}