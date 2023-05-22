import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ChangeEvent, FormEvent, useState } from 'react';
import { FormControl, FormControlLabel, FormLabel, Grid, IconButton, Input, MenuItem, Paper, Radio, RadioGroup } from '@mui/material';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { courseLevels } from './CourseLevels';
import { FileUploadOutlined, Margin } from '@mui/icons-material';
import {validateCourse, validateCourseLevel,validateLocation, validateTrainerName} from './SetAddCourseTextFieldsState';
import { CourseData} from './SendCourseData';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const now = dayjs();

 
export default function AddCourse() 
{


    const [courseName, setCourseName] = useState("");
    const [courseNameError, setCourseNameError] = useState(false);
    const [courseNameErrorText, setCourseNameErrorText] = useState("");

    const [location, setLocation] = useState("");
    const [locationError, setLocationError] = useState(false);
    const [locationErrorText, setLocationErrorText] = useState("");

    const [courseLevel, setCourseLevel] = useState("");
    const [courseLevelError, setCourseLevelError] = useState(false);
    const [courseLevelErrorText, setCourseLevelErrorText] = useState("");

    const [trainerName, setTrainerName] = useState("");
    const [trainerNameError, setTrainerNameError] = useState(false);
    const [trainerNameErrorText, setTrainerNameErrorText] = useState("");

    const [startDate, setStartDate] = React.useState<Dayjs | null>(dayjs(now));
    const [endDate, setEndDate] = React.useState<Dayjs | null>(dayjs(startDate?.add(1,'day')));

    const [startHour, setStartHour] = React.useState<Dayjs | null>(dayjs(now));
    const [endHour, setEndHour] = React.useState<Dayjs | null>(dayjs(startHour?.add(1,'hour')));


    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    

    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        const reader = new FileReader();
        reader.onload = () => {
          setSelectedImage(reader.result as string);
        };
        if (file) {
          reader.readAsDataURL(file);
        }
      };
    
    

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        
        
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        let isCourseValid = validateCourse(courseName,setCourseNameError,setCourseNameErrorText);

        let isCourseLevelValid =  validateCourseLevel(courseLevel,setCourseLevelError, setCourseLevelErrorText);

        let isLocationValid = validateLocation(location,setLocationError,setLocationErrorText); 

        let isTrainernameValid = validateTrainerName(trainerName,setTrainerNameError,setTrainerNameErrorText);
        


        if(isCourseValid && isCourseLevelValid && isLocationValid && isTrainernameValid)
        {

            
            let courseData: CourseData = 
            {
                image: selectedImage+"", 
                courseName:courseName,
                startDate: startDate?.format('DD/MM/YYYY').toString()+"" ,
                endDate:endDate?.format('DD/MM/YYYY').toString()+"",
                startTime:startHour?.format('HH:mm').toString()+"",
                endTime:endHour?.format('HH:mm').toString()+"",
                language: data.get('language')?.toString()+"",
                location:location,
                courseLevel:courseLevel,
                trainerName:trainerName,
                currentUserUsername:"string"  
            };
            
            axios.post('/course/addcourse', courseData)
            .then(response =>{toast.success("Course added successfully" , {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });} )
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
    

    return (
    <Container disableGutters maxWidth={false} sx={{display:'flex', flexDirection:'column',minHeight:'100vh'}}>
        <Box>
            <ToastContainer />
        </Box>

        <Box >
        <Container disableGutters maxWidth={false} sx={{display:'flex', flexDirection:'row',justifyContent:'center' ,background:'grey'}}>
            <Box display={'flex'} justifyContent={'center'} alignContent={'center'} >
                <h2>
                    Add course
                </h2>
            </Box>
            
        </Container>
        </Box>

        <Box display={'flex'}  flexGrow={1}>
            <Grid container>
                <Grid  padding={5} item sm={6} xs={12}>
                <Box   width={'100%'} height={'100%'} sx={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width:'100%',
                                height:'100%',
                                justifyContent:'center',
                                
                                
                                
                            }}>
                                <Paper elevation={5} sx={{display:'flex',justifyContent:'center', alignItems:'center' ,height:'100%', width:'100%'}}>
                                    
                                    <Box width={'100%'} height={'100%'}>
                                        <Grid padding={10} container spacing={2} height={'100%'}>

                                        <Grid item sm={12} xs={12} height={'75%'} sx={{ background: 'grey' }}>
                                            <Box display={'flex'} justifyContent={'center'} height={'100%'} alignItems={'center'} alignContent={'center'}>
                                            <Box>
                                                {selectedImage ? (
                                                <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                                                ) : (
                                                <h2>image field</h2>
                                                )}
                                            </Box>
                                            </Box>
                                        </Grid>
                                            <Grid item sm={12} xs ={12} height={'25%'} marginTop={5} display={'flex'} alignItems={'flex-end'}  justifyContent={'center'}>
                                            
                                            <Box  width={'100%'} justifyContent={'center'} >
                                                <input
                                                
                                                style={{ display: "none" , margin:'0', padding:'0'}}
                                                id="uploadImage"
                                                type="file"
                                                accept='image/*'
                                                name='image'

                                                onChange={handleImageUpload}
                                            />
                                            <label  htmlFor="uploadImage">
                                                <Button 
                                                
                                               
                                               fullWidth
                                                variant="contained"
                                                color="primary" 
                                                component="span">
                                                Upload Image
                                                </Button>
                                            </label>
                                            </Box>
                                            
                                            
                                            
                                            </Grid>
                                            
                                            </Grid>
                                    </Box>
                                    
                            </Paper>
                            </Box>  
                </Box>
                </Grid>
                <Grid item sm={6} xs={12}>
                <Box  height={'100%'}>
                
                <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        height:'100%'
                     
                    }}>
                    <Paper elevation={5} sx={{display:'flex', margin:5, height:'100%' }}>
                
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{paddingLeft:10,paddingRight:10, paddingTop:5, paddingBottom:5}}>
                            <Grid container spacing={1.5}>
                                <Grid item sm={12} xs ={12}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="courseName"
                                        label="Course name"
                                        name="courseName"
                                        autoFocus


                                        value={courseName}
                                        helperText={courseNameErrorText}
                                        onChange={(e) => 
                                        {
                                            setCourseNameError(false);
                                            setCourseNameErrorText("");
                                            
                                            setCourseName(e.target.value);
                                        }
                                        }
                                        error={courseNameError}
                                    />
                                </Grid>

                                <Grid item sm={12} xs={12} display={'flex'} >
                                
                                <LocalizationProvider  
                                    
                                    dateAdapter={AdapterDayjs}>
                                        <Box display={'flex'} width={'100%'} flexDirection={'row'}>
                                            <DatePicker
                                            
                                            sx={{width:"100%"}}
                                                label="Start Date"
                                                value={startDate}
                                                onChange={(e) => setStartDate(e)}
                                                
                                            />

                                            <Box display={'flex'} alignItems={'center'}  padding={1}>
                                                <h3 style={{padding:'0',margin:'0', fontWeight:'normal'}}> - </h3>
                                            </Box>
                                            
                                            <DatePicker
                                                sx={{width:"100%"}}
                                                label="End Date"
                                                value={endDate}
                                                onChange={(e) => setEndDate(e)}
                                            />
                                    </Box>
    
                                </LocalizationProvider>
                            
                            </Grid>
                                
                                <Grid item sm={12} xs={12} display={'flex'} >
                                
                                    <LocalizationProvider  
                                        
                                        dateAdapter={AdapterDayjs}>
                                            <Box display={'flex'} width={'100%'} flexDirection={'row'}>
                                                <Box width={'100%'} display={'flex'} flexDirection={'column'}>
                                                <Box display={'flex'} paddingLeft={0.5}>
                                                        <h5 style=
                                                            {
                                                                {
                                                                    marginRight:'0', 
                                                                    marginBottom:'0', 
                                                                    marginTop:'0', 
                                                                    fontWeight:'normal', 
                                                                }
                                                            }
                                                        >
                                                            Start Time
                                                        </h5>
                                                    </Box>
                                                    <MobileTimePicker 
                                                        sx={{width:"100%"}}
                                                        ampm={false}
                                                        value={startHour}
                                                        onChange={(e)=>
                                                            {
                                                            setStartHour(e);
                                                            setEndHour(e!!.add(1,'hour'));
                                                            }
                                                        } 
                                                    />
                                                </Box>

                                                <Box display={'flex'} alignItems={'center'} marginTop={2} padding={1}>
                                                    <h3 style={{padding:'0',margin:'0', fontWeight:'normal'}}> - </h3>
                                                </Box>
                                                
                                                <Box width={'100%'} display={'flex'} flexDirection={'column'}>
                                                    <Box display={'flex'} paddingLeft={0.5}>
                                                        <h5 style=
                                                            {
                                                                {
                                                                    marginRight:'0', 
                                                                    marginBottom:'0', 
                                                                    marginTop:'0', 
                                                                    fontWeight:'normal', 
                                                                }
                                                            }
                                                        >
                                                            End Time
                                                        </h5>
                                                    </Box>
                                                
                                                    <MobileTimePicker 
                                                        sx={{width:"100%"}}
                                                        ampm={false}
                                                        value={endHour}
                                                        
                                                        onChange={(e)=>
                                                            {
                                                                setEndHour(e);
                                                            }
                                                        } 
                                                    />
                                                </Box>
                                        </Box>
        
                                    </LocalizationProvider>
                                
                                </Grid>

                                <Grid item sm={12} xs={6}>
                                <FormControl sx={{marginLeft:1}}>
                                    <FormLabel id="language">Language</FormLabel>
                                    <RadioGroup
                                        sx={{display:'flex', flexDirection:'row'}}
                                        aria-labelledby="language"
                                        defaultValue="Polish"
                                        name="language"
                                        
                                    >
                                        <FormControlLabel value="Polish" control={<Radio />} label="Polish" />
                                        <FormControlLabel value="English" control={<Radio />} label="English" />
                                        
                                    </RadioGroup>
                                </FormControl>
                                </Grid>
                                
                                <Grid item sm={6} xs={12}>
                                    <TextField
                                            margin='dense'
                                            
                                            required
                                            fullWidth
                                            name="location"
                                            label="Location"
                                            type="text"
                                            id="location"
                                            autoComplete="location"

                                            value={location}
                                            helperText={locationErrorText}
                                            onChange={(e) => 
                                            {
                                                setLocationError(false);
                                                setLocationErrorText("");
                                                
                                                setLocation(e.target.value);
                                            }
                                            }
                                            error={locationError}
                                        />
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                <TextField
                                    margin='dense'
                                    fullWidth
                                    select
                                    id="level"
                                    label="Course Level"
                                    name="level"
                                    autoComplete="level"
                                    value={courseLevel}
                                    
                                    helperText={courseLevelErrorText}
                                    onChange={(e) => 
                                        {
                                            setCourseLevelError(false);
                                            setCourseLevelErrorText("");
                                            setCourseLevel(e.target.value);
                                        } 
                                    }
                                    error={courseLevelError}
                                    
                                >
                                    
                                    {courseLevels.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}

                                </TextField>
                                </Grid>
                                <Grid item sm={12} xs={12}>
                                    <TextField
                                        margin='dense'
                                        required
                                        fullWidth
                                        name="trainer"
                                        label="Trainer Name"
                                        type="text"
                                        id="trainer"
                                        autoComplete="trainer"

                                        value={trainerName}
                                            helperText={trainerNameErrorText}
                                            onChange={(e) => 
                                            {
                                                setTrainerNameError(false);
                                                setTrainerNameErrorText("");
                                                
                                                setTrainerName(e.target.value);
                                            }
                                            }
                                            error={trainerNameError}
                                    />
                                </Grid>
                            </Grid>  
                            <Grid item xs={12} sm={12}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ marginTop:5 }}
                                >
                                Add Course
                                </Button>
                            </Grid>          
                            
                        </Box>
                        
                </Paper>
            </Box>      
    </Box>  
                </Grid>
                
            </Grid>
                
        </Box>


     </Container>
    );       
}


