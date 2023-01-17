import "./NewNote.scss";

import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import Note from "./Note";

function NewNote() {

    const [newNote, setNewNote] = useState({
        display: false,
        id: null,
    });
    
    const createNewNote = () => {
        setNewNote({
            display: !newNote.display,
            id: Math.floor(Math.random()*Math.pow(10, 5)),
        });
    }

    const toggleNote = () => {
        setNewNote(prev => ({
            ...prev,
            display: !prev.display
        }));
    }

    return (
        <>
            <article 
                className="NewNote"
                onClick={createNewNote}
            >

                <AiOutlinePlus className="icons" />

                <p className="NewNote__text"> 
                    Take a new note...
                </p>

            </article>

            {
                newNote.display && <Note id={newNote.id} newNote toggleNote={toggleNote} />
            }
        </>
    );
}

export default NewNote;