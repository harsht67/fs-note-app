import "./Header.scss";
import Logo from "./Logo";
import Menu from "./Menu";
import Profile from "./Profile";
import SearchBar from "./SearchBar";

import { useState } from "react";

function Header() {

    const [menu, setMenu] = useState(true);

    const toggleMenu = () => {
        setMenu(prev => !prev);
    }

    return (
        <header className="Header">

            <Logo
                toggleMenu={toggleMenu}
            />

            { menu && <Menu toggleMenu={toggleMenu} /> }

            <SearchBar/>

            <Profile/>

        </header>
    );
}

export default Header;