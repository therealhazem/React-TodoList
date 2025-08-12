import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';

const Todo = () => {
    return (
        <>
            <Card className='mytodo' sx={{ minWidth: 275, mt: 3, backgroundColor: "#333ddd", color: "#ffff" }}>
                <CardContent>
                    <Grid alignItems="center" justifyContent="center" container spacing={2}>
                        <Grid size={8} >
                            <Typography variant='h4'>
                                task 1
                            </Typography>
                            <Typography variant="h6">
                                commit everyday some code to github to make some improvements
                            </Typography>
                        </Grid>
                        <Grid size={4} >
                            <Stack alignItems="center" direction="row" spacing={1}>
                                <IconButton className='theicon' style={{ color: "white", borderRadius: "100%", backgroundColor: "green", width: "45px", height: "45px" }} >
                                    <CheckCircleIcon />
                                </IconButton>
                                <IconButton className='theicon' style={{ color: "white", borderRadius: "100%", backgroundColor: "orange", width: "45px", height: "45px" }} >
                                    <EditIcon />
                                </IconButton>
                                <IconButton className='theicon' style={{ color: "white", borderRadius: "100%", backgroundColor: "red", width: "45px", height: "45px" }}>
                                    <DeleteIcon />
                                </IconButton>
                            </Stack>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card >
        </>
    )
}

export default Todo