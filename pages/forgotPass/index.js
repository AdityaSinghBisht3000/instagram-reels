import React, { useEffect,useContext } from "react";
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
import {AuthContext} from '../../context/AuthWrapper'
import { useRouter } from "next/router";
import Link from "next/link";

function Index()
{
    const router = useRouter();
    const [email,setemail]= React.useState(null); 
    const [password,setpassword]= React.useState(null); 
    const [error,seterror]= React.useState(''); 
    const [loading,setloading] = React.useState(false); 
    
    const {forgot,user} = useContext(AuthContext)

    const handleClick=async()=>{
        
        console.log(email+" "+password);

        try{
            setloading(true)
            seterror('')
            await forgot(email);
            console.log("email sent");
            router.push('/login');

        }
        catch(err){
            seterror(err.message)
            setTimeout(() => {
                seterror('')
            }, 2000);
        }
        setloading(false)

    }

    // useEffect(()=>{
    //     if(user)
    //     {
    //         router.push('/');
    //     }
    // },[user])

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
                        {/* <slide Index={0}><Image src={bg1} /></slide>
                        <slide Index={1}><Image src={bg2} /></slide>
                        <slide Index={2}><Image src={bg3} /></slide>

                         */}

                        </Slider>
                     </CarouselProvider>
                    </div>
                </div>

                <div className="flex-check">
                <div className="login-card">
                {/* <Image src={Insta} /> */}
                <h1>Instagram</h1>
                <TextField id="outlined-basic" margin="dense" size="small" fullWidth label="Email" variant="outlined"  value={email} onChange={(e)=>setemail(e.target.value)} />
                {/* <TextField id="outlined-basic" margin="dense" size="small" fullWidth label="Password" type="password" variant="outlined" value={password} onChange={(e)=>setpassword(e.target.value)}/> */}
                
               
 {               error != ''  &&
                <div style={{color:"red", marginTop: '0.5rem'}}>{error}!! </div>
}
                <Button variant="contained" fullWidth margin="dense" component="span" style={{marginTop: '1rem'}} onClick={handleClick} disabled={loading}>
                      send Password
                </Button>

                {/* <div style={{color:"blue" , marginTop: '1rem' }}> Forget Password?</div> */}

                </div>

                <div className="bottom-card">
                    Don&apos;t Have an Account? <Link href={'./signup'}> <span style={{color:'blue'}}> SIGN UP </span> </Link>

                </div>
                </div>

        </div>

    )
}

export default Index