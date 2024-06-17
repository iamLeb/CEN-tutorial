import {FaArrowRightArrowLeft} from "react-icons/fa6";
import React, {useState} from "react";
import Welcome from "./Welcome.jsx";
import Image from "./Image.jsx";


const Hero = () => {
    const [flip, setFlip] = useState(false)

    const handleFlip = () => {
        setFlip(!flip)
    }

    return (
        <div className={`bg-[#D1FAFF] block sm:flex flex-row border-2 border-white relative`}>

            {flip ? <Welcome/> : <Image/>}

            <div className={'hidden sm:block hover:cursor-pointer absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'}
                 onClick={handleFlip}>
                <FaArrowRightArrowLeft className={'bg-white p-1.5 rounded-full'} size={30}/>
            </div>

            {flip ? <Image/> : <Welcome/>}

        </div>
    );
}



export default Hero;