import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import {CourseData}from './AddCourse/SendCourseData'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';








export default function ButtonAppBar() {

    
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {setAnchorEl(event.currentTarget);};
    const navigate = useNavigate();
    const { currentUser,setCurrentUser } = useContext(AuthContext);

    
    const [notificationCount, setNotificationCount] = useState(0);

    
    const currentUserModel = {
        
        username: currentUser?.username.toString()+"",
      };

      //const configValue: string = (process.env.MY_COURSES as string);
    useEffect(() => {
        axios.post('https://trainingsappapi20230523141305.azurewebsites.net/course/getuserscourses', currentUserModel)
        .then(res =>{
            let rowsArray: Array<CourseData> = res.data;
            setNotificationCount(rowsArray.length);
        }).catch(error => { console.log(error.response.data)});

    }, []);

    
    const handleClose = () => {setAnchorEl(null);};

    function logout(): void 
    {
        setCurrentUser({ username: "",isTeacher:""});
        navigate('/');
    }

  return (
    <Box sx={{ flexGrow: 1 }}>     
      <AppBar  position="static">
        <Toolbar style={{display:'flex'}}>
        <Box>
            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="h6">Trainings App</Typography>
            </a>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

            <Button 

                sx={{color:'white'}}
                endIcon={
                    <Badge badgeContent={notificationCount} color="error">
                        <BeenhereIcon/>
                    </Badge>
                }
            variant="text"

            onClick={()=>{navigate('/mycourses')}}
            >
                My Courses
            </Button>

          <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={logout}>Log out</MenuItem>
              </Menu>
            </div>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}