import React  from 'react';

export default function Closefriends({user}){

    return(
        <div className="">
               <li className='flex space-x-2 '>
                  <img  src={user.profilePicture} alt="none" className='h-10  w-10  rounded-full object-cover' />
                  <span className='font-Roboto mt-4'>{user.username}</span>
               </li>

        </div>
    )
}