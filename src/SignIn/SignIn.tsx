import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../Copyright';
import { useContext, useState } from 'react';
import { validatePassword } from './SetSignInTextFieldState';
import{setEmailState} from '../SignUp/SetSignUpTextFieldState';

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

interface LoginData
{
  email:string,
  password:string,
}
interface UserData
{
  username:string,
  isTeacher:string,
}

const theme = createTheme();

export default function SignIn() {
    
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [emailErrorText, setEmailErrorText] = useState(""); 

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorText, setPasswordErrorText] = useState("");

    const { currentUser,setCurrentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const configValue: string = (process.env.SIGN_IN as string);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        


        setEmailState(email,setEmailError,setEmailErrorText);

        const isPasswordValid: boolean = validatePassword(password, setPasswordError, setPasswordErrorText);

        if(!emailError && isPasswordValid)
        {

          let loginData : LoginData =
          {
            email : email,
            password : password
          }

          axios.post(configValue,loginData )
          .then(response =>{toast.success("Register Success", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
              let userData : UserData = response.data;
              setCurrentUser({ username: userData.username, isTeacher: userData.isTeacher });
              navigate('/signtocourse');
            } )
          .catch(error => {
              toast.error(error.response.data, {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                  });
          });
        }

    };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box>
            <ToastContainer />
        </Box>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus

                value={email}
                helperText={emailErrorText}
                onChange={(e) => 
                    {
                    setEmailError(false);
                    setEmailErrorText("");
                    setEmail(e.target.value)
                    }
                }
                error={emailError}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"

                value={password}
                helperText={passwordErrorText}
                onChange={(e) => 
                    {
                    setPasswordError(false);
                    setPasswordErrorText("");
                    setPassword(e.target.value)
                    }
                }
                error={passwordError}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}