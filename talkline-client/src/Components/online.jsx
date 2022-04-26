import React  from 'react';

export default function Online({onlinefriends}){


    return(
        <div className="">
                  
              <div className="">
                  
              <ul className='space-y-4 mt-6 ml-2'>
              
                       <li className='flex space-x-2'>
                           <div>
                           <img  src={onlinefriends.profilePicture} alt="none" className='h-10  w-10  rounded-full object-cover'/>
                           <span 
                          className='absolute h-4 w-4 bg-green-500 border border-2
                           rounded-full  text-xs -mt-10 ml-6 '></span>
                           
                           </div>
                           
                           <span className='font-Roboto mt-4'>{onlinefriends.username}</span>
                       </li>

                       
                   </ul>
              </div>
        </div>
    )
}