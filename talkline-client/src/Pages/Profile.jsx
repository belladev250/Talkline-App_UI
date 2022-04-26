import React from 'react';
import Topbar from '../Components/topBar';
import RightBar from '../Components/rightBar';
import Feed from '../Components/Feed';
import coverPhoto from '../imgs/post1.jpg';
import profilePic from '../imgs/person9.jpg';
import '../index.css';
export default function Profile() {


    return (
        <>
         
            <Topbar/>
        
            <div className="profileRight">
                    <div className="profileTop">
                    <div>
                        <div className="h-80 relative cursor-pointer">
                            <img src={coverPhoto} alt="none" className='h-72 w-full object-cover' />
                            <img src={profilePic} alt="none"
                                className='h-36 w-36 rounded-full
            object-cover absolute border border-4 border-white right-0 left-0 top-36 m-auto mt-16'/>
                        </div>
                    </div>
                    <div className="text-center mt-10 block ">
                        <h4 className='font-semibold text-lg font-Roboto'>Jeniffer Doe</h4>
                        <span className='text-md font-Roboto'>Hello mi friend welcome to mi page!!</span>
                    </div>
                    </div>
                   
                    
                </div> 
            <div className="flex space-x-12 justify-center mt-12">
                    
                     <Feed/>
                     <RightBar profile/>
                    
                    
            </div>






        </>
    )
}