const Subscribe= () => {
    return (
        <section className={"border border-white"}>
            <div className={"flex flex-col justify-center m-4"}>
                <div className={"font-extrabold text-4xl flex justify-center text-black"}>
                    <div>Subscribe To Our Newsletter</div>
                </div>

                <div class={"flex justify-center items-center py-5"}>
                    <input className={"outline-none bg-gray-200 py-2 px-3 text-white flex rounded-l-lg"} type="text" placeholder="email"></input>
                    <button class={"flex items-center space-x-4 bg-blue-500 rounded-r-lg px-6 py-2 transition-all duration-300  hover:scale-105 font-light text-white"}>
                       Click to Subscribe
                    </button>
                </div>
            </div>


        </section>
    );
}

export default Subscribe;