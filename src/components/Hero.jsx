import clairo from '../assets/img.png'
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";


const Hero = () => {
    return (
        <div className={"bg-[#D1FAFF] block sm:flex flex-row border-2 border-white relative"}>

            <div className={"flex flex-col justify-center items-center w-full sm:w-1/2 space-y-4"}>
                <p className={"text-4xl font-bold text-gray-800"}>Welcome</p>
                <p className={"text-lg font-medium text-gray-600 italic px-10"}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    "I think we could do it if we tried, if only to say you’re mine" - Clairo
                </p>

                <button
                    className={'flex items-center gap-2 bg-blue-500 border-2 border-black transition-transform transform hover:scale-110 text-xl rounded-full p-2 font-medium shadow-md shadow-[#536072] p-3'}>Get
                    Started
                    <FaArrowRight />
                </button>

            </div>

            <div className={'absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'}>
                <FaArrowRightArrowLeft className={'bg-white p-1.5 rounded-full'} size={30}/>
            </div>

            <div className={"flex justify-end w-1/2"}>
                <img className={"hidden sm:block w-full "} src={clairo} alt="Clairo"/>
            </div>

        </div>
    );
}

export default Hero;