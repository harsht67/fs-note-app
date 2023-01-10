import "./NewNote.scss";

import { AiOutlinePlus } from "react-icons/ai";

function NewNote() {
    return (
        <article className="NewNote">

            <AiOutlinePlus className="icons" />

            <p className="NewNote__text"> 
                Take a new note...
            </p>

        </article>
    );
}

export default NewNote;