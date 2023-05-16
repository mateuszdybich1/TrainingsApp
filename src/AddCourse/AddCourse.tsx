import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FormEvent, useState } from 'react';
import { FormControl, FormControlLabel, FormLabel, Grid, IconButton, Input, MenuItem, Paper, Radio, RadioGroup } from '@mui/material';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { courseLevels } from './CourseLevels';
import { FileUploadOutlined, Margin } from '@mui/icons-material';




const now = dayjs();

 
export default function AddCourse() 
{

    const [startDate, setStartDate] = React.useState<Dayjs | null>(dayjs(now));
    const [endDate, setEndDate] = React.useState<Dayjs | null>(dayjs(startDate?.add(1,'day')));

    const [startHour, setStartHour] = React.useState<Dayjs | null>(dayjs(now));
    const [endHour, setEndHour] = React.useState<Dayjs | null>(dayjs(startHour?.add(1,'hour')));

    const [courseLevel, setCourseLevel] = React.useState("");

    
    

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        let statHourNumber = startHour?.hour().valueOf();
        let starMinuteNumber = startHour?.minute().valueOf();

        let endHourNumber = endHour?.hour().valueOf();
        let endMinuteNumber = endHour?.minute().valueOf();
        
        console.log(statHourNumber+":"+starMinuteNumber);
        console.log(endHourNumber+":"+endMinuteNumber);

        console.log(startDate);
        console.log(data.get('language')?.toString());
        console.log(courseLevel);
        
    }
    function handleUpload(): void {
        
    }

    return (
    <Container disableGutters maxWidth={false} sx={{display:'flex', flexDirection:'column',minHeight:'100vh'}}>

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

                                            <Grid item sm={12} xs={12} height={'75%'} sx={{background:'grey'}}>
                                            <Box display={'flex'} justifyContent={'center'} height={'100%'} alignItems={'center'} alignContent={'center'} >
                                                <Box >
                                                <h2>
                                                    image field
                                                </h2>
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
                                    <FormLabel id="demo-radio-buttons-group-label">Language</FormLabel>
                                    <RadioGroup
                                        sx={{display:'flex', flexDirection:'row'}}
                                        aria-labelledby="demo-radio-buttons-group-label"
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
                                    

                                    onChange={(e) => 
                                    {
                                       
                                        setCourseLevel(e.target.value);
                                    } 
                                    }
                                    
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
                                    />
                                </Grid>
                            </Grid>            
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 5 }}
                            >
                            Add Course
                            </Button>
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


