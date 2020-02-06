import React from 'react';
import './Footer.css';
import {Link} from "react-router-dom";

function Footer({buildDate}) {
    return (
        <footer className="footer text-center text-sm-left">
            <span className="text-muted">© 2020 Company, Inc. · <Link to="./privacy">
                Privacy
            </Link> · <Link
                to="./terms">Terms</Link> · <Link to="./developers">
                Developers
            </Link> · <a href="https://github.com/GetLoginEth/login" target="_blank">
                GitHub
            </a>
            </span>
            <span className="Footer-build mx-sm-3 float-sm-right text-muted">Build date: {buildDate}</span>
        </footer>
    );
}

export default Footer;
