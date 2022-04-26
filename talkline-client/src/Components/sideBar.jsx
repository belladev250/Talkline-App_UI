import React, { Component } from 'react';
 import {MdRssFeed} from 'react-icons/md';
 import {BsFillChatLeftFill} from 'react-icons/bs';
 import {MdVideoLibrary} from 'react-icons/md';
 import {MdGroups} from 'react-icons/md';
 import {AiOutlineQuestionCircle} from 'react-icons/ai';
 import {BsBriefcase} from 'react-icons/bs';
 import {BsCalendarEvent} from 'react-icons/bs';
 import {HiAcademicCap} from 'react-icons/hi';
 import {BsBookmarkHeartFill} from 'react-icons/bs';
 import { Users } from '../dummyData';
 import Closefriends from './Closefriend';

 
class sideBar extends Component {
    
    render() { 
        return (
            <div className=" w-1/4 overflow-y-scroll h-screen scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thin sticky top-0 ">
               <div className="ml-6 mt-6 space-y-3">
                   <ul className='space-y-4'>
                       <li className='flex space-x-2 cursor-pointer'>
                           <MdRssFeed className='text-xl mt-1'/>
                           <span className='font-Roboto mt-1'>Feed</span>
                          
                       </li>

                       <li className='flex space-x-2 cursor-pointer'>
                           <BsFillChatLeftFill className='text-xl mt-1'/>
                           <span className='font-Roboto mt-1'>Chats</span>
                          
                       </li>
                       
                       <li className='flex space-x-2 cursor-pointer'>
                           <MdVideoLibrary className='text-xl mt-1'/>
                           <span className='font-Roboto mt-1'>Videos</span>
                          
                       </li>

                       <li className='flex space-x-2 cursor-pointer'>
                           <MdGroups className='text-xl mt-1'/>
                           <span className='font-Roboto mt-1'>Groups</span>
                          
                       </li>

                       <li className='flex space-x-2 cursor-pointer'>
                           <BsBookmarkHeartFill className='text-xl mt-1'/>
                           <span className='font-Roboto mt-1'>Bookmarks</span>
                          
                       </li>

                       <li className='flex space-x-2 cursor-pointer'>
                           <AiOutlineQuestionCircle className='text-xl mt-1'/>
                           <span className='font-Roboto mt-1'>Questions</span>
                          
                       </li>

                       <li className='flex space-x-2 cursor-pointer'>
                           <BsBriefcase className='text-xl mt-1'/>
                           <span className='font-Roboto mt-1'>Jobs</span>
                          
                       </li>
                     
                       <li className='flex space-x-2 cursor-pointer'>
                           <BsCalendarEvent className='text-xl mt-1'/>
                           <span className='font-Roboto mt-1'>Events</span>
                          
                       </li>

                       <li className='flex space-x-2 cursor-pointer'>
                           <HiAcademicCap className='text-xl mt-1'/>
                           <span className='font-Roboto mt-1'>Courses</span>
                          
                       </li>

                   </ul>
                 
          
                   <button className='bg-gray-300 py-1 px-3  '>Show more </button>
                     <hr className='mt-14 border border-gray-300 w-10/12' />

                     <ul className='space-y-4'>
                     {Users.map((u)=>(
                       <Closefriends key={u.id} user={u}/>
                     ))}
                       
                     </ul>
               </div>

            </div>
        );
    }
}
 
export default sideBar;