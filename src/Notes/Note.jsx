import "./Note.scss";
import notes from "../data";

import { BiLeftArrowAlt } from "react-icons/bi";
import { BsPin, BsPinFill } from "react-icons/bs";
import { VscSymbolColor } from "react-icons/vsc";
import { RiInboxArchiveLine, RiDeleteBinLine } from "react-icons/ri";

function Note(props) {

    const note = notes.filter(note => note.id==props.id);
    
    const { title, body, label, color, pinned, last_edited } = note[0];

    const toggleNote = () => {
        props.toggleNote(null);
    }

    return (
        <article 
            className="Note"
            style={{backgroundColor:color}}
        >

            <header className="Note__header" >

                <BiLeftArrowAlt 
                    className="icons back-btn"
                    onClick={toggleNote}
                />

                {
                    pinned 
                    ? 
                        <BsPinFill
                            className="icons pin-btn"
                        />
                    : 
                        <BsPin 
                            className="icons pin-btn"
                        />
                }

            </header>

            <input 
                className="Note__title"
                value={title}
            />

            <textarea 
                className="Note__body"
                value={body}
            />

            <footer className="Note__footer">

                <section>

                    <VscSymbolColor
                        className="icons color-icon"
                    />

                    <RiDeleteBinLine 
                        className="icons delete-icon"
                    />

                    <RiInboxArchiveLine
                        className="icons archive-icon"
                    />

                </section>

                <section className="Note__edited">

                    Edited {last_edited}

                </section>

            </footer>

        </article>
    );
}

export default Note;