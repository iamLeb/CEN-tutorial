import React, { useState } from 'react';
import Myimage from '../assets/musicPics.jpg'
import { BsMusicPlayer } from "react-icons/bs"
import { FcAdvertising } from "react-icons/fc"



//  import Ad from 'react-advertising';

const AdsMusic = () => {
    return (

       
            
            
            <div className=' mb-4 bg-white'>
                <div className='hidden md:flex  justify-normal gap-3 bg-cyan-600 border-neutral-900 sm:flex rounded-lg'> 
                    <img src= {Myimage} alt= 'Advertisments' style={{width:'500px', height:'500px'}} />
                </div> 

                <div className='flex justify-end items-center text-black gap-3 bg-cyan-600 font-sans mb-2 hover:underline lg:mx-auto text-3xl font-extrabold pr-20'>
                    {/* <a href=" https://youtu.be/LHCob76kigA?si=ePOfo6SJKaso-Jy0"> Advertisements </a> */}
                    <button class="p-2 bg-cyan-800  lg:bg-black sm:bg-cyan-600  md:bg-black rounded-md text-white"><a href=" https://youtu.be/LHCob76kigA?si=ePOfo6SJKaso-Jy0">Advertisements</a></button>
                           
                       <div>  
                             <FcAdvertising />
                        </div>    
                        


                </div>

                
        
            
                
                
            
            </div>
        
    );
};

export default AdsMusic;