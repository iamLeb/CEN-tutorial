const Button = () => {
    return (
        <section className={""}>
            <div className={"bg-[#91c6ff] flex flex-col justify-center"}>

                <div className={"font-thin text-xs flex justify-center m-4"}>[ˈmyo͞ozik]</div>

                <div className={"font-extrabold text-4xl flex justify-center"}>
                    <div>music</div>
                </div>

                <div className={"flex justify-center m-10 font-thin text-2xl"}>
                    <p>
                        <span className={"font-medium m-1 italic"}>
                            (noun)
                        </span>
                        vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion:
                        <div className={"text-neutral-600 m-1 flex justify-center"}>
                            "couples were dancing to the music" . "baroque music"
                        </div>
                    </p>
                </div>
            
                <div class={"flex justify-center items-center"}>
                    <button class={"hover:bg-[#a7cdf5] bg-local flex m-4 text-black font-light font p-3 rounded-full border-4 border-[#3b6897]"}>
                        Click if you love music!
                    </button>
                </div>
            </div>


        </section>
    );
}

export default Button;