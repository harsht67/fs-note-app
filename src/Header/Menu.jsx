import "./Menu.scss";

import { RiInboxArchiveLine, RiDeleteBinLine, RiSettings4Line } from "react-icons/ri";
import { AiOutlineBulb, AiOutlinePlus } from "react-icons/ai";
import { MdOutlineLabel, MdHelpOutline } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const labels = ["Book", "Coding", "Money"];

function Menu(props) {
    return (
        <nav className="Menu">

            <div className="Menu__container">

                <section className="Menu__header">

                    <h1 className="Menu__title">

                        <RxHamburgerMenu
                            className="icons" 
                            onClick={props.toggleMenu}
                        />
                        
                        {/* Note */}
                    </h1>

                    <ul>

                        <li>
                            <AiOutlineBulb className="icons"/>
                            <span>Notes</span>
                        </li>

                    </ul>

                </section>

                <section className="Menu__main">

                    <h2 className="Menu__subtitle">
                        Labels
                    </h2>

                    <ul>

                        {
                            labels.map(label => (
                            <li>
                                <MdOutlineLabel className="icons" />
                                <span>{label}</span>
                            </li>
                        ))}

                        <li>
                            <AiOutlinePlus className="icons" />
                            <span>Create a new label</span>
                        </li>

                    </ul>

                </section>

                <section className="Menu__footer">

                    <ul>

                        <li>
                            <RiInboxArchiveLine className="icons"/>
                            <span>Archive</span>
                        </li>

                        <li>
                            <RiDeleteBinLine className="icons"/>
                            <span>Trash</span>
                        </li>

                        <li>
                            <RiSettings4Line className="icons"/>
                            <span>Settings</span>
                        </li>

                        <li>
                            <MdHelpOutline className="icons" />
                            <span>Help & feedback</span>
                        </li>

                    </ul>

                </section>

            </div>

        </nav>
    );
}

export default Menu;