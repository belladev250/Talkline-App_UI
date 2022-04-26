import React, { useState } from 'react';
import {FiMoreVertical} from 'react-icons/fi';
import '../index.css';
import heart from '../heart.png';
import liking from '../like.png';
import {Users} from '../dummyData';

  export default function Post({post}){

        const[like,setLike]=useState(post.likes)
        const[isLiked,setIsLiked]=useState(false)
        const likeHandler=()=>{
                setLike(isLiked ? like-1: like+1)
                setIsLiked(!isLiked)
        }
   
        return (
            <div className="justify-center shadow-lg rounded-lg w-11/12 ml-8 mt-8">  
                   <div className="flex space-x-80">
                      
               <div className="flex space-x-2 ml-4 cursor-pointer mt-4 ">
               <img src={Users.filter((u)=>u.id===post.userId)[0].profilePicture} alt="none" className='h-10 w-10  rounded-full object-cover '/>
               <div className="space-x-4 mt-2  ">
               <span className='font-Roboto font-medium' >{Users.filter((u)=>u.id===post.userId)[0].username} </span>
               <span className='fonst-Roboto text-xs' >{post.date}</span>
               </div>
               </div>
               <div className=" cursor-pointer static">
               <FiMoreVertical className=' ml-8 mt-7 text-xl'/>
               </div>
               </div>
               
               <div className="mt-2">
               <span className='font-Roboto ml-8 '>{post?.desc}</span>
               <div className="postCenter">
               <img src={post.photo} alt="" className='postImg' />
               </div>
                <div className="flex space-x-80 ">
                <div className="flex space-x-2 -mt-3 ml-4 py-2">
                    <img src={liking} alt="" className='h-8 w-8 cursor-pointer' onClick={likeHandler}/>
                    <img src={heart} alt="" className='h-8 w-8 cursor-pointer' onClick={likeHandler} />
                    <span className='font-Roboto text-sm mt-2 '>{like} likes</span>
                </div>
                <div className="font-Roboto text-sm mt-1 cursor-pointer underline">
                    <span>{post.Comment} commented</span>
                </div>
                </div>
               </div>
            </div>
        );
    
}
 
