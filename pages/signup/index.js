import react, { useContext, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import Insta from '../../asserts/insta.jpg';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/AuthWrapper";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {db, storage} from '../../firebase'
import { doc, setDoc } from "firebase/firestore";

function index()
{

    const router = useRouter();
    const [email,setemail]= React.useState(null); 
    const [password,setpassword]= React.useState(null); 
    const [error,seterror]= React.useState(''); 
    const [file,setfile] = React.useState(null);
    const [name,setname] = React.useState('');
    const [loading,setloading] = React.useState(false); 
    
    const {signup,user} = useContext(AuthContext)

    const handleClick=async()=>{
        
        console.log(file);
        console.log(email);


        try{
            setloading(true)
            seterror('')
            console.log("starting")
            
            const user=await signup(email,password);
            
            const storageRef = ref(storage, `${user.uid}/ProfilePic`);

 const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
   
  }, 
  (error) => {
    // Handle unsuccessful uploads
    console.log("error "+error);
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      console.log('File available at', downloadURL);
      let obj = {
        name: name,
        email: email,
        uid: user.user.uid,
        photoURL: downloadURL
      }
      // if(db)
     await setDoc(doc(db,"users",user.user.uid),obj);
     console.log("Doc Added")
    });
  }
);

            console.log("signed up");
            router.push('/')


        }
        catch(err){
            seterror(err.message)
            setTimeout(() => {
                seterror('')
            }, 2000);
        }
        
        setloading(false)

    }

    useEffect(()=>{
        if(user)
        {
            console.log(user);
            console.log("bye bye")
            // router.push('/');
        }
    },[user])

    return (

        <div className="signup-container">

                <div className="signup-card">
                {/* <Image src={Insta} /> */}
                <h1>Instagram</h1>
                <TextField id="outlined-basic1" margin="dense" size="small" fullWidth label="Email" variant="outlined" value={email} onChange={(e)=>setemail(e.target.value)} />
                <TextField id="outlined-basic2" margin="dense" size="small" fullWidth label="Password" type="password" variant="outlined" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                <TextField id="outlined-basic3" margin="dense" size="small" fullWidth label="Full Name" variant="outlined" value={name} onChange={(e)=>setname(e.target.value)} />
                
                <Button variant="outlined" fullWidth margin="dense" component="label" style={{marginTop: '1rem'}}>
                    <input type="file" accept="image/*" style={{display:'none'}}  onChange={(e)=>setfile(e.target.files[0])} />
                    UPLOAD PROFILE IMAGE
                </Button>
                
                <Button variant="contained" fullWidth margin="dense" component="span" style={{marginTop: '1rem'}} onClick={handleClick} disabled={loading}>
                       SIGN UP
                </Button>

                </div>

                <div className="bottom-card">
                    Already Have an Account? <Link href={"./login"}><span style={{color:'blue'}}> LOGIN </span></Link>

                </div>

        </div>

    )
}

export default index