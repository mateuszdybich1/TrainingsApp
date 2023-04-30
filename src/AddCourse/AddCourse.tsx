import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FormEvent, useState } from 'react';
import { Paper } from '@mui/material';


 
export default function AddCourse() 
{

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        throw new Error('Function not implemented.');
    }
    return (
    <Container disableGutters maxWidth={false} sx={{display:'flex', height:'100vh', backgroundColor:'darkgrey'}}>
        <Box  width={'100%'} sx={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
            <h2>Add new course</h2>


        </Box>

        <Box  width={'100%'} sx={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
        
                <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin:10
                    }}>
                        <Paper elevation={5}>
                            <CssBaseline />
                            <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                            >
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{padding:10}}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Course name"
                                    name="name"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="1"
                                    autoComplete="current-password"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="2"
                                    autoComplete="current-password"
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
                                />
                                <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 5 }}
                                >
                                Add Course
                                </Button>
                               
                            </Box>
                            </Box>
                    </Paper>
                    </Box>
                
        </Box>  
     </Container>
           
       
    );
        
    

}


