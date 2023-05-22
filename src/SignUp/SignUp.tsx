import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useContext, useState } from 'react';
import Copyright from '../Copyright'

import {setUsernameState,setNameState,setLastNameState,setEmailState,setPasswordState,setAddressState,setCityState,setStreetState} from './SetSignUpTextFieldState';
import {countries} from './Countries';
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Checkbox, Collapse, FormGroup } from '@mui/material';
import { UserData } from './SendData';
import { FormControl } from '@mui/base';

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';









const theme = createTheme();

export default function SignUp() {

  const re = /^[A-Za-z]+$/;

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [usernameErrorText, setUsernameErrorText] = useState("");

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [nameErrorText, setNameErrorText] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);
  const [lastNameErrorText, setLastNameErrorText] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState(""); 

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorText, setPasswordErrorText] = useState("");

  const [isTeacher, setIsTeacher] = useState(false);

  const [country, setCountry] = useState("");
  const [countryError, setCountryError] = useState(false);
  const [countryErrorText, setCountryErrorText] = useState("");

  const [street, setStreet] = useState("");
  const [streetError, setStreetError] = useState(false);
  const [streetErrorText, setStreetErrorText] = useState("");

  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState(false);
  const [cityErrorText, setCityErrorText] = useState("");

  const [isShowAddressButtonClicked, setShowAddressButtonClicked] = React.useState(false);
  const [showAddressButtonText, setShowAddressButtonText] = React.useState("Add Address (Optional)");

  const { currentUser,setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();


  function showAddressTextFields(){
    if(isShowAddressButtonClicked=== true)
    {
      setShowAddressButtonText("Add Address (Optional)");
    }
    else
    {
      setShowAddressButtonText("Remove Address");

      setCountry("");
      setCountryError(false);
      setCountryErrorText("");

      setCity("");
      setCityError(false);
      setCityErrorText("");

      setStreet("");
      setStreetError(false);
      setStreetErrorText("");

    }
    setShowAddressButtonClicked(!isShowAddressButtonClicked); 
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    
    

    setUsernameState(username,setUsernameError, setUsernameErrorText);
    setNameState(name,setNameError,setNameErrorText);
    setLastNameState(lastName, setLastNameError, setLastNameErrorText);
    setEmailState(email,setEmailError,setEmailErrorText);
    setPasswordState(password, setPasswordError, setPasswordErrorText);
    setAddressState(country,setCountryError,setCountryErrorText,city,setCityError, setCityErrorText, street, setStreetError, setStreetErrorText);



    if(!emailError &&  !usernameError && !nameError && !lastNameError && !passwordError)
    {

      let userData: UserData = 
        {
          username: username,
          firstName: name,
          lastName: lastName,
          email: email,
          password: password,
          isTeacher: isTeacher,
          country: country,
          city: city,
          street: street,
          
        };
      

        if(!countryError && !cityError && !streetError)
        {
          if(country!==""&& city!==""&& street!=="")
          {
            setCityState(street, setStreetError, setStreetErrorText);
            setStreetState(city, setCityError, setCityErrorText);
            if(!streetError && !cityError)
            {
              
              axios.post('/user/register', userData)
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
                setCurrentUser({ username: username });   
                navigate('/');
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
          }
          else
          {
              axios.post('/user/register', userData)
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

                setCurrentUser({ username: username });
                navigate('/');
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
        }
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
            height:'100%',
            width:'100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography marginTop={2} component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                  <TextField                 
                    name='userName'   
                    required         
                    fullWidth
                    id="userName"
                    label="Username"
                    autoFocus
                    
                    value={username}
                    helperText={usernameErrorText}
                    onChange={(e) => 
                      {
                        setUsernameError(false);
                        setUsernameErrorText("");
                        setUsername(e.target.value)
                      }
                  }
                    error={usernameError}
                    
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"

                    
                    value={name}
                    helperText={nameErrorText}
                    onChange={(e) => 
                      {
                        setNameError(false);
                        setNameErrorText("");
                        if(re.test(e.target.value) || e.target.value ==="")
                        {
                          setName(e.target.value);
                        }
                        
                      }
                    }
                    error={nameError}
                    
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"


                    value={lastName}
                    helperText={lastNameErrorText}
                    onChange={(e) => 
                      {
                        setLastNameError(false);
                        setLastNameErrorText("");
                        if(re.test(e.target.value) || e.target.value ==="")
                        {
                          setLastName(e.target.value);
                        }
                        
                      }
                    }
                    error={lastNameError}
                    
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"

                    value={email}
                    helperText={emailErrorText}
                    onChange={(e) =>
                      {
                        setEmailError(false);
                        setEmailErrorText("");
                        setEmail(e.target.value);
                      }
                    }
                    error={emailError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"

                    value={password}
                    helperText={passwordErrorText}
                    onChange={(e) => 
                      {
                        setPasswordError(false);
                        setPasswordErrorText("");
                        setPassword(e.target.value);
                      }
                    }
                    error={passwordError}
                  />
                </Grid>
                <Grid marginLeft={0.5} item xs={12} sm={12}>
                  <FormGroup>
                  <FormControlLabel
                    
                    label="Are you a teacher?"
                    labelPlacement='end'
                    control=
                    {
                      <Checkbox
                        checked={isTeacher}
                        onChange={(e)=>{setIsTeacher(e.target.checked)}}
                        value={"Are you a teacher"}
                        
                      />
                    }
                  />
                  </FormGroup>
                  
                  
                </Grid>
                

                <Grid item xs={12} sm ={12}>
                  <Button startIcon={isShowAddressButtonClicked ? <RemoveIcon/> : <AddIcon/>} fullWidth onClick={showAddressTextFields}>{showAddressButtonText}
                  </Button>
                </Grid>
                
                <Grid item xs={12} sm={12}>
                <Collapse  in={isShowAddressButtonClicked} timeout="auto" unmountOnExit>

                  <Grid  container spacing={2} item xs={12} sm ={12}>
                    <Grid item xs={6} sm={6}>
                      <TextField
                        fullWidth
                        select
                        id="country"
                        label="Country"
                        name="Country"
                        autoComplete="country"
                        value={country}
                        helperText={countryErrorText}
      
                        onChange={(e) => 
                          {
                            setCountryError(false);
                            setCountryErrorText("");
                            setCountry(e.target.value)
                          }
                        }
                        error={countryError}      
                      >
                        {countries.map((option) => ( 
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}

                      </TextField>
                    </Grid>

                    <Grid item xs={6} sm={6}>
                      <TextField
                        fullWidth
                        id="city"
                        label="City"
                        name="City"
                        autoComplete="city"

                        value={city}
                        helperText={cityErrorText}
                        onChange={(e) => 
                          {
                            setCityError(false);
                            setCityErrorText("");
                            setCity(e.target.value)
                          }
                        }
                        error={cityError}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} sx={{mb:2}}>
                      <TextField
                        fullWidth
                        id="street"
                        label="Street"
                        name="street"
                        autoComplete="street"

                        value={street}
                        helperText={streetErrorText}
                        onChange={(e) => 
                          {
                            setStreetError(false);
                            setStreetErrorText("");
                            setStreet(e.target.value)
                          }
                        }
                        error={streetError}
                      />
                    </Grid>
                  </Grid>  
                </Collapse>
              </Grid>
            </Grid>
            <Button
              type="submit"
              style={{height:'60px', width:'100%'}}
              variant="contained"
              sx={{ mt: 0, mb: 2 }}
              
            >
              Sign Up
            </Button>
            <Grid container justifyContent={'center'}>
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 2 }} />
      </Container>
    </ThemeProvider>
  );
}