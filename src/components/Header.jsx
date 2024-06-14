import React from 'react';
import logo from '../assets/react.svg';
const Header = () => {
    return (
        <header className={'bg-neutral-800 p-5 text-white'}>
            <div className={'flex items-center space-x-2'}>
                <img src={logo}/>
                <h3 className={'text-3xl font-extrabold'}>LOGO</h3>
            </div>

            <div>

            </div>
        </header>
    );
};

export default Header;