import clairo from "../assets/img.png";

const Image = () => {
    return (
        <div className={"flex justify-end w-1/2"}>
            <img className={"hidden sm:block w-full "} src={clairo} alt="Clairo"/>
        </div>);
}

export default Image;
