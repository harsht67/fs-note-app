import "./Notes.scss";
import SmallNote from "./SmallNote";
import notes from "../data";

import { useState } from "react";
import Note from "./Note";

function Notes() {

    const [note, setNote] = useState({
        active: false,
        id: null,
    })

    // open/close note & set current note id 
    const toggleNote = (id) => {
        setNote(prev => (
            {
                ...prev,
                active: !prev.active,
                id: id,
            }
        ))
    }
    
    const pinned_notes = notes.filter(note => note.pinned==true);
    const other_notes = notes.filter(note => note.pinned==false);

    return (
        <article className="Notes">

            <section className="Notes__pinned">

                <h1 className="Notes__title">
                    pinned
                </h1>

                <div className="Notes__container" >
                    {
                        pinned_notes.map(data => (
                            <SmallNote 
                                key={data.id} 
                                data={data} 
                                toggleNote={toggleNote}
                            />
                        ))
                    }
                </div>

            </section>

            <section className="Notes__other">

                <h1 className="Notes__title">
                    others
                </h1>

                <div className="Notes__container" >
                    {
                        other_notes.map(data => (
                            <SmallNote 
                                key={data.id} 
                                data={data} 
                                toggleNote={toggleNote}
                            />
                        ))
                    }
                </div>

            </section>

            {
                note.active && 
                    <Note 
                        id={note.id} 
                        toggleNote={toggleNote}
                    />
            }

        </article>
    );
}

export default Notes;