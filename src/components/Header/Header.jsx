import React from 'react';
import logo from '../../assets/images/logo.svg';

export default function Header() {
return(
    <div className="header flex flex-row space-between grow mx-20">
        <div>
            <img src={logo} alt="Kasa logo header" />
        </div>
            <div className="header__nav flex flex-center space-between gap-6 text-2xl ">
                <a className="header__nav__link text-3xl" href="/">Accueil</a>
                <a className="header__nav__link text-3xl" href="/about">A Propos</a>
            </div>
    </div>
);
}
