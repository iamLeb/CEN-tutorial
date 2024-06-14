// import React, { useState } from 'react';
import Myimage from '../assets/musicPics.jpg'
import { FcAdvertising } from "react-icons/fc"



//  import Ad from 'react-advertising';

const AdsMusic = () => {
    return (

       
            
            
            <header className='relative flex justify justify-between items-center bg-cyan-600 m-0.5'>
                <div className='hidden md:flex  justify-between items-center gap-3 bg-cyan-600 border-neutral-900'> 
                    <img className='w-[500px] h-[500px] sm:flex rounded-br ' src= {Myimage} alt= 'Advertisments' />
                </div> 

                <div className='sm:flex justify-center items-center text-black gap-3 bg-cyan-600 font-sans hover:underline lg:mx-auto text-3xl font-extrabold pl-40 py-2 text-balance hover:opacity-5'>
                    {/* <a href=" https://youtu.be/LHCob76kigA?si=ePOfo6SJKaso-Jy0"> Advertisments </a> */}
                    <button class="p-2 bg-cyan-800  lg:bg-cyan-700 sm:bg-cyan-600  md:bg-cyan-800 rounded-md text-white py-5"><a href=" https://youtu.be/LHCob76kigA?si=ePOfo6SJKaso-Jy0">Advertisments</a></button>
                           
                       <div className='flex justify-center'>  
                             <FcAdvertising />
                        </div>   
                        <div className='hidden sm:flex justify-center items-center text-xs'>
                            Come here for the latest ad news
                        </div> 
                        
                        


                </div>
                

                
        
            
                
                
            
            </header>
        
    );
};

export default AdsMusic;