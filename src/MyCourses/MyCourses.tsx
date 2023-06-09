import * as React from 'react';


import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { CourseData} from '../AddCourse/SendCourseData';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ButtonAppBar from '../Header'
import { AuthContext } from '../AuthContext';
import { classes } from 'istanbul-lib-coverage';
import { Paper, Typography, styled } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import InsertChartOutlinedTwoToneIcon from '@mui/icons-material/InsertChartOutlinedTwoTone';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';




  
  const Image = styled('img')(({ theme }) => ({
    width: '100%',
    maxWidth: 300,
    marginBottom: theme.spacing(2),
  }));

 
export default function MyCourses() 
{

    let [courses, setCourses] = useState<CourseData[]>([]);
    const { currentUser,setCurrentUser } = useContext(AuthContext);
    

    const currentUserModel = {
        username: currentUser?.username.toString()+"",
      };
 
      //const configValue: string = (process.env.MY_COURSES as string);
      
      useEffect(() => {
        axios.post('https://trainingsappapi20230523141305.azurewebsites.net/course/getuserscourses', currentUserModel)
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
    <Container disableGutters maxWidth={false} sx={{display:'flex',  flexDirection:'column',minHeight:'100vh'}}>
        <Box>
            <ToastContainer />
        </Box>

        <Box >
        <Container disableGutters maxWidth={false} >
            <ButtonAppBar/> 
        </Container>
        </Box>
            
        <Box display={'flex'} justifyContent={'center'}>
            <h2>My Courses</h2>
        </Box>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
        
            {courses.map((course) => (
                
                 <Paper elevation={5} sx={{display:'flex',minWidth:'600px', width:'60%',alignContent:'center', alignSelf:'center', margin:2,minHeight:'150px',maxHeight:'150px'}}>
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

        


     </Container>
    );       
}


