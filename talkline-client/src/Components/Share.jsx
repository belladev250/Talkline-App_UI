import React, { Component } from 'react';
import {MdPhotoLibrary} from 'react-icons/md';
import {CgTag} from 'react-icons/cg';
import  {IoLocationSharp} from 'react-icons/io5';
import {BsFillEmojiSmileFill} from 'react-icons/bs';
import  profilePic from '../imgs/person9.jpg';
class Share extends Component {

    render() { 
        return (
            
              <div className="w-11/12 py-6 ml-8 mt-4 rounded-lg shadow">
              <div className="flex space-x-6 justify-center w-3/4 ml-8">
                  <img src={profilePic} alt="none" className='h-12 w-12 rounded-full object-cover ' />
                  <input type="text" placeholder="What's on your mind, Jane ?  "
                   className='outline-none font-Roboto w-4/5'  />
              </div>
                   <hr className='w-4/5 ml-14 mt-4 border' />
                 <div className="flex">
              <div className="flex mt-4 ml-14 space-x-4">
                  <div className="flex space-x-1  cursor-pointer">
                      <MdPhotoLibrary className='text-2xl text-red-500'/>
                      <span className='font-Roboto'>Photo or Video</span>
                  </div>
                  <div className="flex space-x-1  cursor-pointer">
                      <CgTag className='text-2xl text-blue-500' />
                      <span className='font-Roboto'>Tag</span>
                  </div>
                  <div className="flex space-x-1 cursor-pointer">
                      <IoLocationSharp className='text-2xl text-green-600 ' />
                      <span className='font-Roboto'>Location</span>
                  </div>
                  <div className="flex space-x-1 cursor-pointer">
                      <BsFillEmojiSmileFill className='text-2xl text-yellow-500 '/>
                      <span className='font-Roboto'>Feelings</span>
                  </div>
                   
              </div>
              <div >
              <button className='font-Roboto text-center bg-green-600 
              text-white px-2 rounded-lg py-1 mt-3 ml-8 '>Post</button>
              </div>
              </div>
              </div>
            
        );
    }
}
 
export default Share;