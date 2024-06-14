// import React, { useState } from 'react';
import Myimage from '../assets/musicPics.jpg'
import { FcAdvertising } from "react-icons/fc"



//  import Ad from 'react-advertising';

const AdsMusic = () => {
    return (

       
            
            
                
                    <section className='flex justify-between items-center  bg-[#D1FAFF] m-0.5'>
                        <div className='hidden md:flex  justify-between items-center gap-3 bg-[#91c6ff] border-neutral-900'> 
                            <img className='w-full h-[600px] sm:flex rounded-br ' src= {Myimage} alt= 'Advertisments' />
                        </div> 

                        <div>
                            <div className=' sm:flex justify-between items-center text-black gap-3 bg-[#D1FAFF] font-sans hover:underline lg:mx-auto text-3xl font-extrabold pl-40 py-2'>
                                <button class="p-2 bg-[#91c6ff]  lg:bg-[#91c6ff] sm:bg-[#91c1f5]  md:bg-[#95bce6] rounded-md text-white py-5"><a href=" https://youtu.be/LHCob76kigA?si=ePOfo6SJKaso-Jy0">Advertisments</a></button>
                                    
                                <div className='flex justify-center'>  
                                        <FcAdvertising />
                                </div>   
                                <div className='hidden sm:flex justify-between items-center text-xs'>
                                    Come here for the latest ad news
                                </div> 
                                
                               
                                
                            </div>
                                <div className='flex justify-center gap-5 items-center font-bold lg:mx-auto text-xl'>
                                  "Here we go guys, its finally online"
                                </div>
                        </div>
                    </section>
                
        
    );
};

export default AdsMusic;