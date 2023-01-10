import "./Note.scss";

function Note(props) {

    const { title, body, label, color, pinned, edited } = props.data;

    return (
        <article 
            className="Note"
            style={{backgroundColor:color}}
        >

            <h1 className="Note__title">
                {title}
            </h1>

        </article>
    );
}

export default Note;