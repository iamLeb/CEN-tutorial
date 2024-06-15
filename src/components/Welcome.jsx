import {FaArrowRight} from "react-icons/fa6";

const Welcome = () => {
    return (
        <div className={"flex flex-col justify-center items-center w-full sm:w-1/2 space-y-4"}>
            <p className={"text-4xl font-bold text-gray-800"}>Welcome</p>
            <p className={"text-lg font-medium text-gray-600 italic px-10"}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                "I think we could do it if we tried, if only to say you’re mine" - Clairo
            </p>

            <button
                className={'text-white hover:cursor-pointer flex items-center gap-2 bg-blue-500 transition-transform transform hover:scale-110 text-xl rounded-full font-medium shadow-md shadow-[#536072] p-3'}>Get
                Started
                <FaArrowRight/>
            </button>

        </div>);
}

export default Welcome;
