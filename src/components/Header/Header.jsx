import React from 'react';
import logo from '../../assets/images/logo.svg';

export default function Header() {
return(
    <div className="flex flex-row space-between grow px-10">
        <div>
            <img src={logo} alt="" />
        </div>
        <div>
            <div className="flex space-between gap-6 text-2xl ">
                <a href="/">Accueil</a>
                <a href="/about">A propos</a>
            </div>
        </div>
    </div>
);
}
