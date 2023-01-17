import "./Note.scss";
import { noteAdded, noteDeleted, notePinned, noteUpdated } from "../redux/notesSlice";

import { BiLeftArrowAlt } from "react-icons/bi";
import { BsPin, BsPinFill } from "react-icons/bs";
import { VscSymbolColor } from "react-icons/vsc";
import { RiInboxArchiveLine, RiDeleteBinLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function Note(props) {

    // fetching all notes from redux store 
    const notes = useSelector(state => state.notes.entities);

    const dispatch = useDispatch();

    const [note, setNote] = useState(null);

    useEffect(() => {
        const temp = props.newNote 
                    ? {
                        id: props.id,
                        title: "",
                        body: "",
                        last_edited: "",
                        color: "grey",
                        pinned: false,
                        label: ""
                    }
                    : notes.filter(note => note.id==props.id)[0];

        setNote(temp);
    }, [])
    
    // open/close note 
    const toggleNote = () => {
        props.toggleNote(null);
    }

    // delete a note 
    const deleteNote = () => {
        // first close the note
        toggleNote();

        // then delete the note
        dispatch(noteDeleted(note.id));
    }
    
    // save changes made to note
    const saveNote = () => {

        const date = new Date();

        const day = date.getDate();
        const month = MONTHS[date.getMonth()];
        
        const newNote = {
            ...note,
            last_edited: day+" "+month,
        }

        props.newNote 
            ? dispatch(noteAdded(newNote))
            : dispatch(noteUpdated(newNote));
    }

    // change note pinned status
    const changeNoteStatus = () => {
        setNote(prev => ({
            ...prev,
            pinned: !prev.pinned
        }));
        // dispatch(notePinned(note.id));
    }

    // handle changes made to the note 
    const changeHandler = (e) => {
        const { name, value } = e.target;

        setNote(prev => (
            {
                ...prev,
                [name]: value,
            }
        ));
    }

    // const { id, title, body, label, color, pinned, last_edited } = note;

    return (
        <article className="Note">

            {note &&
                <div 
                    className="Note__container"
                    style={{backgroundColor: note.color}}
                >

                    <header className="Note__header" >

                        <BiLeftArrowAlt 
                            className="icons back-btn"
                            onClick={toggleNote}
                        />

                        {
                            note.pinned 
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
                        name="title"
                        value={note.title}
                        onChange={changeHandler}
                        placeholder="Title"
                    />

                    <textarea 
                        className="Note__body"
                        name="body"
                        value={note.body}
                        onChange={changeHandler}
                        placeholder="Lorem ispum..."
                    />

                    <footer className="Note__footer">

                        <section className="Note__footer1">
                        
                            <div className="Note__edited">

                                {note.last_edited &&
                                    <span>Edited {note.last_edited}</span>
                                }

                            </div>

                        </section>

                        <section className="Note__footer2">

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

                            <span 
                                className="Note__save"
                                onClick={saveNote}
                            >
                                Save
                            </span>

                        </section>

                    </footer>

                </div>
            }

        </article>
    );
}

export default Note;