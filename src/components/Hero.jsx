import clairo from '../assets/img.png'

const Hero = () => {
    return (
        <div className={"bg-[#D1FAFF] block sm:flex flex-row border-2 border-black"}>

            <div className={"flex flex-col justify-center items-center w-full sm:w-1/2 space-y-4"}>
                <p className={"text-4xl font-bold text-gray-800"}>Welcome</p>
                <p className={"text-lg font-medium text-gray-600 italic px-10"}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    "I think we could do it if we tried, if only to say you’re mine" - Clairo
                </p>
            </div>

            <div className={"flex justify-end w-1/2"}>
                <img className={"hidden sm:block w-full "} src={clairo} alt="Clairo"/>
            </div>

        </div>
    );
}

export default Hero;