import react from 'react';
import Navbar from './navbar'
import Upload from './upload'
import { Avatar } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function feed()
{
    return (
        <div className='feed-container'>
         <Navbar/>

         <Upload />

            <div className='video-container'>

              <div className='post-container'>
                 <video />
               
                    <div className='videos-info'>
                      <div className='avatar-container'> 
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg " sx={{margin: "0.5rem"}}/> 
                        <p>Name</p>
                      </div>
                     <div className='post-like'>

                        <FavoriteBorderIcon fontSize="large "/> 
                        10
                      </div>
                    </div>
                </div> 

               <div className='post-container'>
                <video />

                </div>

           </div>

        </div>
    )
}

export default feed;