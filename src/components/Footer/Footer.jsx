import React from "react";
import logo from "../../assets/images/logo-footer.svg";

export default function Footer() {
    return (
        <footer className="footer-container flex flex-center py-5">
            <img className="footer-container__logo grow" src={logo} alt="Kasa Logo footer" />
            <p className="footer-container__text">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}