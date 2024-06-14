import React, { useEffect } from 'react';
import Album1 from '../assets/pic1.webp'
import Album2 from '../assets/immunity.png'
import Album3 from '../assets/prettygirl.jpeg'
import Album4 from '../assets/charm.png'



const Album = () => {
    return (
        <div class='flex flex-col justify-center items-center sm:flex-row sm:justify-evenly bg-white shadow-lg'>
            <div class=' w-1/6 h-48  flex justify-center align-middle group'>
                <img class='rounded-lg absolute scale-90 object-cover w-50 h-48 group-hover:opacity-50' src={Album1} href='' alt=''/>
                <div class="relative p-5">
                    <div class="mt-40">
                            {/* Hidden content */}
                            <div
                                class="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:-translate-y-12"
                            >
                                <div class="">
                                    <a href='https://open.spotify.com/album/3NEDQmYF1roygFssVEwkwv' class="text-lg text-white">
                                        diary 001
                                    </a>
                                </div>
                            </div>
                            {/* End of hidden content */}
                    </div>
                </div>
            </div>
            <div class=' w-1/6 h-48  flex justify-center align-middle group'>
                <img class='rounded-lg absolute  scale-90 object-cover w-50 h-48 group-hover:opacity-50' src={Album2} alt=''/>
                <div class="relative p-5">
                    <div class="mt-40">
                            {/* Hidden content */}
                            <div
                                class="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:-translate-y-12"
                            >
                                <div class="">
                                    <a href='https://open.spotify.com/album/4kkVGtCqE2NiAKosri9Rnd' class="text-lg text-white">
                                        Immunity
                                    </a>
                                </div>
                            </div>
                            {/* End of hidden content */}
                    </div>
                </div>
            </div>
            <div class=' w-1/6 h-48  flex justify-center align-middle group'>
                <img class='rounded-lg absolute  scale-90 object-cover w-50 h-48 group-hover:opacity-50' src={Album3} alt=''/>
                <div class="relative p-5">
                    <div class="mt-40">
                            <div
                                class="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:-translate-y-12"
                            >
                                <div class="">
                                    <a href='https://open.spotify.com/track/0KyAGiNGUytG5JLxJu4F6l' class="text-lg text-white">
                                        Pretty Girl
                                    </a>
                                </div>
                            </div>
                            {/* End of hidden content */}
                    </div>
                </div>
            </div>
            <div class=' w-1/6 h-48  flex justify-center align-middle group'>
                <img class='rounded-lg absolute scale-90 object-cover w-50 h-48 group-hover:opacity-50' src={Album4} alt=''/>
                <div class="relative p-5">
                    <div class="mt-40">
                            {/* Hidden content */}
                            <div
                                class="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:-translate-y-12"
                            >
                                <div class="">
                                    <a href='https://open.spotify.com/prerelease/1hk5UEw2cPHm4ceZw3g5o5' class="text-lg text-white">
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