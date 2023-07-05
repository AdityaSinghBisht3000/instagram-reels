import react from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import Insta from '../../asserts/insta.jpg';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



function index()
{
    return (

        <div className="signup-container">

                <div className="signup-card">
                {/* <Image src={Insta} /> */}
                <h1>Instagram</h1>
                <TextField id="outlined-basic" margin="dense" size="small" fullWidth label="Email" variant="outlined" />
                <TextField id="outlined-basic" margin="dense" size="small" fullWidth label="Password" type="password" variant="outlined" />
                <TextField id="outlined-basic" margin="dense" size="small" fullWidth label="Full Name" variant="outlined" />
                
                <Button variant="outlined" fullWidth margin="dense" component="label" style={{marginTop: '1rem'}}>
                    <input type="file" accept="image/*" style={{display:'none'}} />
                    UPLOAD PROFILE IMAGE
                </Button>
                
                <Button variant="contained" fullWidth margin="dense" component="span" style={{marginTop: '1rem'}}>
                       SIGN UP
                </Button>

                </div>

                <div className="bottom-card">
                    Already Have an Account? <span style={{color:'blue'}}> LOGIN </span>

                </div>

        </div>

    )
}

export default index