const Button = () => {
    return (
        <section>
            <div className={"bg-[#eee1c7] flex flex-col h-96 justify-center"}>

                <div className={"font-thin text-xs flex justify-center"}>[ˈmyo͞ozik]</div>

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
                    <button class={"hover:bg-[#bf8660c4] bg-local flex text-black font-light font p-3 rounded-full border-4 border-[#8e4b21a9]"}>
                        Click if you love music!
                    </button>
                </div>
            </div>


        </section>
    );
}

export default Button;