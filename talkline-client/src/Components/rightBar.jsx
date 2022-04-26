import React, { Fragment } from 'react';
import gift from '../imgs/gift.png';
import ad from '../imgs/ad.png';
import Online from './online';
import { Users } from '../dummyData';
import img1 from '../imgs/person1.jpg';
import img2 from '../imgs/person7.jpg';
import img3 from '../imgs/person10.jpg';
import img4 from '../imgs/person4.jpg';
import img5 from '../imgs/person5.jpg';
import img6 from '../imgs/person6.jpg';
import img7 from '../imgs/person8.jpg';


export default function rightBar({profile})  {
    const HomeRightBar=()=>{
      
        return(
            <>
            <div className="w-1/4 top-0 sticky ">
             <div className=" flex mt-4 space-x-1">
                <img src={gift} className='h-12' alt='none' />
                <span className='font-Roboto text-sm mt-4' ><b>Bella Melissa</b> and
                 <b> 3 other friends</b> have birthdays today </span>
              </div>
              <div className=" mt-2">
              <img src={ad} className=" h-52 rounded-lg mb-12 " alt='none' />
              
              <span className='text-center font-Roboto font-bold  ml-4 '>Online Friends</span>
              </div>

              
              {Users.map((u)=>(
                 <Online key={u.id} onlinefriends={u}/>
              ))}
              </div>
            </>
        )

    }


    const ProfileRightBar=()=>{
        
        return(
            // user information
            <>
           <div className="ml-12 w-4/12 top-0 sticky">
               <h4 className='font-semibold text-lg font-Roboto '>User information</h4>
               <div className="mt-2 space-y-2">
               <div className="flex space-x-2">
                   <span className='font-Roboto text-md'>City:</span>
                   <span className='font-Roboto text-md'>New York</span>
               </div>
               <div className="flex space-x-2">
                   <span className='font-Roboto text-md'>From:</span>
                   <span className='font-Roboto text-md' >Madrid</span>
               </div>
               <div className="flex space-x-2">
                   <span className='font-Roboto text-md' >Relationship:</span>
                   <span className='font-Roboto text-md' >Single</span>
               </div>
               </div>
                
                <div className=' mt-16'>
                    <h4 className='font-semibold text-lg font-Roboto' >User Friends</h4>
                   <div className="grid grid-cols-3 gap-3">
                    <div className="mt-4 space-y-2">
                        <img src={img1} alt="none" className='h-36 w-36 object-cover rounded-lg' />
                        <span className='font-Roboto text-md ml-6 ' >Bella Melissa</span>
                    </div>
                    <div className="mt-4 space-y-2">
                        <img src={img2} alt="none" className='h-36 w-36 object-cover rounded-lg' />
                        <span className='font-Roboto text-md ml-6 ' >Allan Darcy</span>
                    </div>
                    <div className="mt-4 space-y-2">
                        <img src={img3} alt="none" className='h-36 w-36 object-cover rounded-lg' />
                        <span className='font-Roboto text-md ml-6 ' >Maddy hariss</span>
                    </div>
                    <div className="mt-4 space-y-2">
                        <img src={img4} alt="none" className='h-36 w-36 object-cover rounded-lg' />
                        <span className='font-Roboto text-md ml-6 ' >knox carter </span>
                    </div>
                    <div className="mt-4 space-y-2">
                        <img src={img5} alt="none" className='h-36 w-36 object-cover rounded-lg' />
                        <span className='font-Roboto text-md ml-6 ' >James Reed</span>
                    </div>
                    <div className="mt-4 space-y-2">
                        <img src={img6} alt="none" className='h-36 w-36 object-cover rounded-lg' />
                        <span className='font-Roboto text-md ml-6 ' >William Steel</span>
                    </div>

                    <div className="mt-4 space-y-2">
                        <img src={img7} alt="none" className='h-36 w-36 object-cover rounded-lg' />
                        <span className='font-Roboto text-md ml-6 ' >Bella Melissa</span>
                    </div>

                    </div>
                </div>
           </div>
             
           </>
           
        )
    }
   
   
        return (
            <>
        
           {profile ? <ProfileRightBar/> : <HomeRightBar/> }
           
            </>
        );
    
}
 