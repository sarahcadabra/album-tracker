import React from 'react';
const logoLight = require('./Logo_light.svg') as string;

const Header = () => {
    return (
        <header>
            <nav className={"bg-indigo-900"}>
                <div className="inset-y-0 right-0 flex items-center pr-2 sm:items-stretch sm:justify-start sm:ml-6 sm:pr-0">
                    <button type={"button"} className={"flex items-center space-x-2 my-6"}>
                        <img className={"size-12"} src={logoLight} alt={"Logo"}/>
                        <p className="text-2xl font-bold text-indigo-200">
                            Album tracker
                        </p>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;