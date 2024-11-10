import * as React from 'react';
import { StyledButton, StyledInput, CardContainer, LinkStyle, Linkbutton, theme, stylediv, ChangeButton, divstyle } from './Loginstyle';
import { ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const inputStyles = {
  '&::before': {
    display: 'none',
  },
  '&:focus-within': {
    outline: '2px solid var(--Input-focusedHighlight)',
    outlineOffset: '2px',
  },
};

export default function Login() {
  const navigate=useNavigate();
  const [UserType, setUserType] = React.useState('employee');
  const [form, setform] = React.useState({});
  const [password, setpassword] = React.useState('');
  const [confirmpassword, setconfirmpassword] = React.useState('');
  const [isError, setIsError] = React.useState(null)
  const [passwordMatch, setPasswordMatch]=React.useState(false);

  const handleForm = (e) => {
    if (e.target.name === 'password') {
      setpassword(e.target.value);
    }
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    if(passwordMatch){
      e.preventDefault();
      const response= await fetch('http://localhost:5000/signup',{
        method: 'POST',
        body: JSON.stringify({...form, UserType}),
        headers:{
           'Content-Type': 'application/JSON',
        }
      })
      if(response.status===201){
      const data=await response.json();
      const userType=data.userType;
      navigate(`/dashboard/${userType}`,{state :{ data}});
      }
    }
    else{
      e.preventDefault();
      alert("The Password should match");
    }
  }

  const checkValidation = (e) => {
    setconfirmpassword(e.target.value);
    if (password === e.target.value) {
      setIsError("");
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
      setIsError("Password should match with Confirm Password");
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
              sx={inputStyles}
            />
            <StyledInput
              name="username"
              onChange={handleForm}
              placeholder="UserName"
              sx={inputStyles}
            />
            <StyledInput
              name="password"
              onChange={handleForm}
              type="password"
              placeholder="Password"
              sx={inputStyles}
            />
            <StyledInput
              name="confirmpassword"
              value={confirmpassword}
              onChange={checkValidation}
              type="password"
              placeholder="Confirm Password"
              sx={inputStyles}
            />
            <div style={{ color: 'red', display: 'flex', justifyContent: 'center', fontStyle: 'italic'}}>{isError}</div>
            {UserType === 'employee' && (
              <StyledInput
                name="manager_id"
                onChange={handleForm}
                type="text"
                placeholder="Manager ID"
                sx={inputStyles}
              />
            )}
          </ThemeProvider>
          <StyledButton size="lg" type="submit">
            <Linkbutton>SignUP</Linkbutton>
          </StyledButton>
          <LinkStyle to='/login'>
            Login Instead
          </LinkStyle>
        </form>
      </CardContainer>
    </div>

  );
}