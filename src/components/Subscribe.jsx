const Subscribe= () => {
    return (
        <section className={""}>
            <div className={"flex flex-col justify-center"}>
                <div className={"font-extrabold text-4xl flex justify-center text-black"}>
                    <div>Subscribe To Our Newsletter</div>
                </div>

                <div class={"flex justify-center items-center"}>
                    <input className={"border-2 border-black py-2 px-3 text-grey-darkest flex m-4 rounded-l-lg"} type="text" placeholder="email"></input>
                    <button class={"hover:bg-[#a7cdf5] bg-local flex m-4 text-black font-light font p-3 rounded-r-lg border-2 border-black"}>
                       Click to Subscribe
                    </button>
                </div>
            </div>


        </section>
    );
}

export default Subscribe;