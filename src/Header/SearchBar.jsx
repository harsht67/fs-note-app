import "./SearchBar.scss";

import { AiOutlineSearch } from "react-icons/ai";

function SearchBar() {
    return (
        <article className="SearchBar">

            <AiOutlineSearch className="SearchBar__icon" />

            <input
                type="text"
                placeholder="Search your notes"
            />

        </article>
    );
}

export default SearchBar;