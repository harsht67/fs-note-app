import "./SideMenu.scss";

import { RiInboxArchiveLine, RiDeleteBinLine, RiSettings4Line } from "react-icons/ri";
import { AiOutlineBulb, AiOutlinePlus } from "react-icons/ai";
import { MdOutlineLabel, MdHelpOutline } from "react-icons/md";

const labels = ["Book", "Coding", "Money"];

function SideMenu() {
    return (
        <aside className="SideMenu">

            <ul>

                <li>
                    <AiOutlineBulb className="icons" />
                    <span>Notes</span>
                </li>

                {
                    labels.map(label => (
                        <li>
                            <MdOutlineLabel className="icons" />
                            <span>{label}</span>
                        </li>
                    ))
                }

                <li>
                    <RiInboxArchiveLine className="icons" />
                    <span>Archive</span>
                </li>

                <li>
                    <RiDeleteBinLine className="icons" />
                    <span>Delete</span>
                </li>

            </ul>

        </aside>
    );
}

export default SideMenu;