import "./Logo.scss";

import { RxHamburgerMenu } from "react-icons/rx";

function Logo(props) {

    return (
        <div className="Logo">
        
            <RxHamburgerMenu
                className="hamburger-btn"
                onClick={props.toggleMenu}
            />

            <h1 className="Logo__logo">
                Note
            </h1>

        </div>
    );
}

export default Logo;