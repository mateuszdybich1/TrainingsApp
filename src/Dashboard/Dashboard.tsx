import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import Container from '@mui/material/Container';

import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { Button, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import DashboardIcon from '@mui/icons-material/Dashboard';

import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';

import Copyright from '../Copyright';
import axios from 'axios';

import { toast } from 'react-toastify';
import { CourseData } from '../AddCourse/SendCourseData';
import { AuthContext } from '../AuthContext';




import {  useContext, useEffect, useState } from 'react';


import 'react-toastify/dist/ReactToastify.css';
import ButtonAppBar from '../Header'

import EventIcon from '@mui/icons-material/Event';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import InsertChartOutlinedTwoToneIcon from '@mui/icons-material/InsertChartOutlinedTwoTone';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useNavigate } from 'react-router-dom';



const Image = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: 300,
  marginBottom: theme.spacing(2),
}));



const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };



  let [courses, setCourses] = React.useState<CourseData[]>([]);
    const { currentUser,setCurrentUser } = React.useContext(AuthContext);
   
   
    //const configValue: string = (process.env.ALL_COURSES as string);
    
      React.useEffect(() => {
        axios.get("https://trainingsappapi20230523141305.azurewebsites.net/course/getallcourses")
        .then(response =>{
            let rowsArray: Array<CourseData> = response.data;
            setCourses(rowsArray)
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
      }, []);

  return (
    
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', 
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Trainings App
            </Typography>
            
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Main Page" />
            </ListItemButton>

            

            <ListItemButton component={Link} href="/signin">
              <ListItemIcon>
              <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Sign In" />
            </ListItemButton>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          
          <Box display={'flex'} justifyContent={'center'}>
            
            <h2>Sign To Course</h2>
        </Box>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
        
            {courses.map((course) => (
                
                 <Paper elevation={5} sx={{display:'flex',minWidth:'800px', width:'80%',alignContent:'center', alignSelf:'center', margin:2,minHeight:'150px',maxHeight:'150px'}}>
                    <Box display={'flex'} width={'100%'} paddingTop={2} paddingBottom={2} paddingLeft={2} paddingRight={5}>
                        <Box paddingRight={2} height={'100%'} maxWidth={'150px'} minWidth={'250px'}  justifyContent={'center'} alignItems={'center'}>
                            <Image sx={{display:'flex'}} height={'100%'} src={course.image} alt={course.courseName} />
                        </Box>
                        <Box display={'flex'} flexGrow={1} flexDirection={'column'} height={'100%'}>
                            <Box display={'flex'} >
                                <Typography variant="h6">Course Name: {course.courseName}</Typography>
                            </Box>
                            <Box display={'flex'} marginTop={1} >
                                <Box width={'50%'}  display={'flex'} flexDirection={'column'}>
                                    <Box paddingBottom={1} display={'flex'} flexDirection={'row'} flexShrink={0} whiteSpace={'nowrap'} marginRight={2}>
                                        <EventIcon sx={{marginRight:1}}></EventIcon>
                                        <Typography   variant="body1">{course.startDate} - {course.endDate}</Typography>
                                    </Box>
                                    <Box paddingBottom={1} display={'flex'} flexDirection={'row'} flexShrink={0} whiteSpace={'nowrap'} marginRight={2}>
                                        <TranslateOutlinedIcon sx={{marginRight:1}}></TranslateOutlinedIcon>
                                        <Typography variant="body1">Language: {course.language}</Typography>
                                    </Box>
                                    <Box paddingBottom={1} display={'flex'} flexDirection={'row'} flexShrink={0} whiteSpace={'nowrap'} marginRight={2}>
                                        <LocationOnOutlinedIcon sx={{marginRight:1}}></LocationOnOutlinedIcon>
                                        <Typography variant="body1">Location: {course.location}</Typography>
                                    </Box>
                                
                                </Box>

                                <Box width={'50%'} display={'flex'} flexDirection={'column'}>
                                    <Box paddingBottom={1} display={'flex'} flexDirection={'row'} flexShrink={0} whiteSpace={'nowrap'} marginRight={2}>
                                        <AccessTimeOutlinedIcon sx={{marginRight:1}}></AccessTimeOutlinedIcon>
                                        <Typography variant="body1">{course.startTime} - {course.endTime}</Typography>
                                    </Box>
                                    <Box paddingBottom={1} display={'flex'} flexDirection={'row'} flexShrink={0} whiteSpace={'nowrap'} marginRight={2}>
                                        <InsertChartOutlinedTwoToneIcon sx={{marginRight:1}}></InsertChartOutlinedTwoToneIcon>
                                        <Typography variant="body1">{course.courseLevel}</Typography>
                                    </Box>
                                    <Box  display={'flex'} flexDirection={'row'} flexShrink={0} whiteSpace={'nowrap'} marginRight={2}>
                                        <PersonOutlineOutlinedIcon  sx={{marginRight:1}}/>
                                        <Typography variant="body1">{course.trainerName}</Typography>
                                    </Box>
                            
                                </Box>

                                
                   
                            </Box>
              
                        </Box>

                       
                    </Box>
                 </Paper>
            ))}


        </Box>


          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}