import "./Header.scss";
import Logo from "./Logo";
import Profile from "./Profile";
import SearchBar from "./SearchBar";

function Header() {
    return (
        <header className="Header">

            <Logo/>

            <SearchBar/>

            <Profile/>

        </header>
    );
}

export default Header;