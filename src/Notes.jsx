import Note from "./Note";
import "./Notes.scss";
import { pinned_notes, other_notes } from "./data";

function Notes() {
    return (
        <article className="Notes">

            <section className="Notes__pinned">

                <h1 className="Notes__title">
                    pinned
                </h1>

                <div className="Notes__container" >
                    {
                        pinned_notes.map(data => <Note data={data} />)
                    }
                </div>

            </section>

            <section className="Notes__other">

                <h1 className="Notes__title">
                    others
                </h1>

                <div className="Notes__container" >
                    {
                        other_notes.map(data => <Note data={data} />)
                    }
                </div>

            </section>

        </article>
    );
}

export default Notes;