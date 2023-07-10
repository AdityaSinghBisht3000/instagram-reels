import React from 'react'
import Navbar from './navbar'
import Link from 'next/link';

// const func=async()=>{
//     <Link src="https://cdn-user.veed.io/render/dee2dfca-38fd-4b85-99b2-aa960a05f54a.mp4"></Link>

// }



function profileComp()
{    

    return (
        <div>
            <Navbar />
            <div>
                <div className='profup'>
                    <img src='https://firebasestorage.googleapis.com/v0/b/instagram-reels-9e969.appspot.com/o/goku%201.webp?alt=media&token=8b910ab1-83d8-4b66-b542-96cc249ffdb2' alt='profile_image' style={{height:"8rem",width:"8rem",borderRadius:"50%"}} />
                    <div style={{flexBasis:"40%"}}>
                        <h1> Name</h1>
                        <br/>
                        <h3> Post : 10</h3>
                    </div>
                </div>
                <hr/>
                <div className='profvid'>
                    <video src='https://cdn.veed.io/render/c39776b0-892d-45e9-9713-ca791dd05a99.mp4'/>
                    <video src='https://cdn.veed.io/render/c39776b0-892d-45e9-9713-ca791dd05a99.mp4'/>
                    <video src='https://cdn.veed.io/render/c39776b0-892d-45e9-9713-ca791dd05a99.mp4'/>

                </div>
            </div>
        </div>
    )
}

export default profileComp;