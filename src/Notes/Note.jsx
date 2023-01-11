import "./Note.scss";
import { noteDeleted, notePinned } from "../redux/notesSlice";

import { BiLeftArrowAlt } from "react-icons/bi";
import { BsPin, BsPinFill } from "react-icons/bs";
import { VscSymbolColor } from "react-icons/vsc";
import { RiInboxArchiveLine, RiDeleteBinLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";

function Note(props) {

    // fetching all notes from redux store 
    const notes = useSelector(state => state.notes.entities);

    const dispatch = useDispatch();

    // extracting a note from all notes based on id 
    const note = notes.filter(note => note.id==props.id);
    
    // open/close note 
    const toggleNote = () => {
        props.toggleNote(null);
    }

    // delete a note 
    const deleteNote = () => {
        // first close the note
        toggleNote();

        // then delete the note
        dispatch(noteDeleted(id));
    }
    
    // change note pinned status
    const changeNoteStatus = () => {
        dispatch(notePinned(id));
    }

    const { id, title, body, label, color, pinned, last_edited } = note[0];

    return (
        <article className="Note">

            <div 
                className="Note__container"
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
                                onClick={changeNoteStatus}
                            />
                        : 
                            <BsPin 
                                className="icons pin-btn"
                                onClick={changeNoteStatus}
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
                            onClick={deleteNote}
                        />

                        <RiInboxArchiveLine
                            className="icons archive-icon"
                        />

                    </section>

                    <section className="Note__edited">

                        Edited {last_edited}

                    </section>

                </footer>

            </div>

        </article>
    );
}

export default Note;