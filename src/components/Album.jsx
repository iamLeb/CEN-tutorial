import React, { useEffect } from 'react';
import Album1 from '../assets/diary001.jpg'
import Album2 from '../assets/immunity.png'
import Album3 from '../assets/prettygirl.jpeg'
import Album4 from '../assets/charm.png'



const Album = () => {
    return (
        <div className='flex flex-col justify-evenly items-center  sm:flex-row sm:justify-evenly sm:items-middle gap-x-10 bg-white shadow-lg'>
            <div className='h-96 flex justify-center items-center group'>
                <img className='rounded-lg absolute scale-90 object-cover w-100 h-86 group-hover:opacity-50 group-hover:scale-100' src={Album1} alt=''/>
                <div className="relative p-5">
                    <div className="mt-40">
                            {/* Hidden content */}
                            <div
                                className="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-15"
                            >
                                <div className="">
                                    <a href='https://open.spotify.com/prerelease/1hk5UEw2cPHm4ceZw3g5o5' className="text-lg text-white">
                                        Charm
                                    </a>
                                </div>
                            </div>
                            {/* End of hidden content */}
                    </div>
                </div>
            </div>  
            <div className=' flex justify-center items-center group'>
                <img className='rounded-lg absolute scale-90 object-cover w-100 h-86 group-hover:opacity-50 group-hover:scale-100' src={Album2} href='' alt=''/>
                <div className="relative p-5">
                    <div className="mt-40">
                            {/* Hidden content  **/}

                            <div
                                className="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-15"
                            >
                                <div className="">
                                    <a href='https://open.spotify.com/album/3NEDQmYF1roygFssVEwkwv' className="text-lg text-white">
                                        Immunity
                                    </a>
                                </div>
                            </div>
                            {/* End of hidden content */}
                    </div>
                </div>
            </div>
            <div className=' flex justify-center items-center group'>
                <img className='rounded-lg absolute scale-90 object-cover w-100 h-86 group-hover:opacity-50 group-hover:scale-100' src={Album3} alt=''/>
                <div className="relative p-5">
                    <div className="mt-40">
                            {/* Hidden content */}
                            <div
                                className="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-15"
                            >
                                <div className="">
                                    <a href='https://open.spotify.com/prerelease/1hk5UEw2cPHm4ceZw3g5o5' className="text-lg text-white">
                                        Pretty Girl
                                    </a>
                                </div>
                            </div>
                            {/* End of hidden content */}
                    </div>
                </div>
            </div>  
            <div className=' flex justify-center items-center group'>
                <img className='rounded-lg absolute scale-90 object-cover w-100 h-86 group-hover:opacity-50 group-hover:scale-100' src={Album4} alt=''/>
                <div className="relative p-5">
                    <div className="mt-40">
                            {/* Hidden content */}
                            <div
                                className="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-15"
                            >
                                <div className="">
                                    <a href='https://open.spotify.com/prerelease/1hk5UEw2cPHm4ceZw3g5o5' className="text-lg text-white">
                                        Charm
                                    </a>
                                </div>
                            </div>
                            {/* End of hidden content */}
                    </div>
                </div>
            </div>  
        </div>
    );
}; 

export default Album;
