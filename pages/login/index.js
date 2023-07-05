import react from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import Insta from '../../asserts/insta.jpg';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { CarouselProvider, Slider, Slide, Image as img } from 'pure-react-carousel';
// import {Carousel} from 'react-responsive-carousel';
import bg1 from '../../asserts/bg1.png'
import bg2 from '../../asserts/bg2.png'
import bg3 from '../../asserts/bg3.png'


function index()
{
    return (

        <div className="login-container">

                <div className="carbg">
                    <div className="car">

                        {/* <carousel>

                        </carousel> */}

                         <CarouselProvider
                        naturalSlideWidth={245}
                        naturalSlideHeight={423}
                        totalSlides={3}
                        visibleSlides={1}
                        isIntrinsicHeight={true}
                        isPlaying={true}
                     >
                        <Slider>
                        <slide index={0}><Image src={bg1} /></slide>
                        <slide index={1}><Image src={bg2} /></slide>
                        <slide index={2}><Image src={bg3} /></slide>

                        

                        </Slider>
                     </CarouselProvider>
                    </div>
                </div>

                <div className="flex-check">
                <div className="login-card">
                {/* <Image src={Insta} /> */}
                <h1>Instagram</h1>
                <TextField id="outlined-basic" margin="dense" size="small" fullWidth label="Email" variant="outlined" />
                <TextField id="outlined-basic" margin="dense" size="small" fullWidth label="Password" type="password" variant="outlined" />
                {/* <TextField id="outlined-basic" margin="dense" size="small" fullWidth label="Full Name" variant="outlined" />
                
                <Button variant="outlined" fullWidth margin="dense" component="label" style={{marginTop: '1rem'}}>
                    <input type="file" accept="image/*" style={{display:'none'}} />
                    UPLOAD
                </Button> */}
                
                <div style={{color:"red", marginTop: '0.5rem'}}> Error!!</div>

                <Button variant="contained" fullWidth margin="dense" component="span" style={{marginTop: '1rem'}}>
                      LOGIN UP
                </Button>

                <div style={{color:"blue" , marginTop: '1rem' }}> Forget Password?</div>

                </div>

                <div className="bottom-card">
                    Don't Have an Account?  <span style={{color:'blue'}}> SIGN UP </span>

                </div>
                </div>

        </div>

    )
}

export default index