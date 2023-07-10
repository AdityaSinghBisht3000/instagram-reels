import { Button } from '@mui/material';
import React from 'react'
import MovieIcon from '@mui/icons-material/Movie';
import LinearProgress from '@mui/material/LinearProgress';

function upload()
{
    return (
        <div className='upoad-btn'>

                <Button variant="outlined" fullWidth margin="dense" component="label" startIcon={<MovieIcon/>} style={{marginTop: '1rem'}}>
                    <input type="file" accept="image/*" style={{display:'none'}} />
                    UPLOAD PROFILE IMAGE
                </Button>
                <LinearProgress variant="buffer" value={50} valueBuffer={60} style={{marginTop:"0.2rem"}} />


        </div>
    )
}

export default upload;