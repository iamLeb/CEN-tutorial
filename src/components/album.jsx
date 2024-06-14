import React, { useEffect } from 'react';
import Album1 from '../assets/firstpic.webp'
import Album2 from '../assets/Immunity.png'
import Album3 from '../assets/prettygirl.jpeg'
import Album4 from '../assets/Drown.webp'



const Album = () => {
    return (
        <div class='flex flex-col justify-center items-center sm:flex-row sm:justify-evenly bg-gradient-to-r from-white to-[#D1FAFF]'>
            <img class='rounded-md object-cover h-48 w-50 scale-90' src={Album1} alt=''/>
            <img class='rounded-md object-cover h-48 w-50 scale-90' src={Album2} alt=''/>
            <img class='rounded-md object-cover h-48 w-50 scale-90' src={Album3} alt=''/>
            <img class='rounded-md object-cover h-48 w-50 scale-90' src={Album4} alt=''/>    
        </div>
    );
}; 

export default Album; //hello