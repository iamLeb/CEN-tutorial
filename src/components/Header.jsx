import logo from '../assets/react.svg';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Header = () => {
    return (
        <>
            <header className={'fixed w-full z-10 border border-white bg-gradient-to-r from-black to-neutral-900 p-5 text-white'}>
                <div className={'flex justify-between items-center'}>
                    <div className={'flex items-center space-x-2'}>
                        <img src={logo}/>
                        <h3 className={'text-2xl font-extrabold'}>LOGO</h3>
                    </div>

                    <div className={'md:hidden block'}>
                        <RxHamburgerMenu size={38}/>
                    </div>

                    <div className={'relative hidden md:block'}>
                        <input placeholder={'Search...'}
                               className={'px-6 text-gray-500 hover:w-96 w-56 -transition-all duration-500 py-3 bg-gray-100 rounded-full outline-none'}
                               type="text"/>
                        <CiSearch className={'text-black absolute top-1/2 -translate-y-1/2 right-3'} size={32}/>
                    </div>

                    <ul className={'hidden md:flex items-center space-x-4 text-lg font-normal'}>
                        <li>Home</li>
                        <li>Albums</li>
                        <li>
                            <button
                                className={'flex items-center space-x-4 bg-blue-500 rounded-full px-6 py-2 transition-all duration-300 hover:scale-105 font-bold'}>
                                <span>Lets Talk</span>
                                <IoChatboxEllipsesOutline />
                            </button>
                        </li>
                    </ul>
                </div>
            </header>

            <div className={'md:hidden block'}>
                <div className={'bg-white shadow-lg p-3'}>
                    <div className={'flex justify-around items-center'}>
                        <div>
                            <ul className={'text-center'}>
                                <li>Home</li>
                                <li>Album</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div>
                            <ul className={'text-center'}>
                                <li>Home</li>
                                <li>Album</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div>
                            <ul className={'text-center'}>
                                <li>Home</li>
                                <li>Album</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;


