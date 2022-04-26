import React, { Component } from 'react';
import {BiSearch} from 'react-icons/bi'
import {BsFillPersonFill} from 'react-icons/bs'
import {BsFillChatLeftFill} from 'react-icons/bs'
import {IoMdNotifications} from 'react-icons/io'
import profile from '../imgs/person9.jpg'

class topBar extends Component {
 
    render() { 
        return (
           
            <div className=" bg-lime-500 top-0 h-16 sticky  flex z-50 py-2 w-full  shadow-md ">
              <div className=" ml-4 mt-1 w-1/6 ">
                <span className="text-4xl font-Pacifico text-white cursor-pointer"> Talkline</span>
              </div>
              <div className="mt-1 items-center flex w-3/6 ">
                 <BiSearch className='text-2xl absolute ml-4 mt-1'/> 
                  <input type="text" placeholder='Search for a friend,a post or a video'
                  className='w-96 py-1 rounded-2xl outline-none  text-center font-Roboto w-5/6' />
              </div>
              <div className="w-2/6  flex space-x-12">
                  <div className="space-x-4 text-lg cursor-pointer mt-3">
                      <span className='font-Roboto text-white'>Homepage</span>
                      <span className='font-Roboto text-white'>Timeline</span>
                  </div>

                  <div className="flex space-x-4 text-2xl text-white mt-4 cursor-pointer">
                      <span> 
                          <BsFillPersonFill/>
                          <span 
                          className='absolute h-4 w-4 bg-red-500
                           rounded-full text-center text-xs -mt-6 ml-3'>2</span>
                      </span>
                      <span> 
                      <BsFillChatLeftFill/>
                          <span 
                          className='absolute h-4 w-4 bg-red-500
                           rounded-full text-center text-xs -mt-6 ml-3 '>7</span>
                      </span>
                      <span> 
                      <IoMdNotifications/>
                          <span  className='absolute h-4 w-4 bg-red-500
                           rounded-full text-center text-xs -mt-6 ml-3 '>12</span>
                      </span>
                      
                     
                  </div>
                  <div className="mt-2">
                  <img  src={profile} alt="" className=' h-10 w-10  object-cover cursor-pointer rounded-full' />
                  </div>
                  
              </div>

            </div>
           
        );
    }
}
 
export default topBar;