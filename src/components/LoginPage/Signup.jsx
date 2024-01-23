import * as React from 'react';
import { StyledButton, StyledCard, StyledInput, CardContainer, LinkStyle, Linkbutton, theme, stylediv, ChangeButton, divstyle } from './Loginstyle';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Login() {
  const [currentOption, setCurrentOption] = React.useState('login');
  const [UserType, setUserType] = React.useState('employee');
  const [managerId, setManagerId] = React.useState('');
  const [form, setform]=React.useState({});
  const [password, setpassword]= React.useState('');
  const [confirmPassword, setconfirmpassword] = React.useState('');
  const [passwordMatch, setpasswordmatch]= React.useState('');

  const handleOptionChange = (option) => {
    setCurrentOption(option);
  }

  const handleForm = (e) => {
    const { name, value } = e.target;
  
    if (name === 'password') {
      setpassword(value);
    } else if (name === 'confirmpassword') {
      setconfirmpassword(value);
    }
  
    setform({
      ...form,
      [name]: value,
    });
  
    // Use the functional form of setpasswordmatch
    if (name === 'password' || name === 'confirmpassword') {
      setpasswordmatch(password === confirmPassword);
    }
  };
  

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(passwordMatch){
      // fetch();
      console.log(form);
    }
    else{
      alert('Password do not match');
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
            <Linkbutton to="/dashboard">SignUP</Linkbutton>
          </StyledButton>
          <LinkStyle to='/login'>
            Login Instead
          </LinkStyle>
      </form>
        </CardContainer>
    </div>

  );
}