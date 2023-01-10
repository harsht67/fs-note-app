import "./SmallNote.scss";

function SmallNote(props) {

    const { id, title, color } = props.data;

    const toggleNote = () => {
        props.toggleNote(id);
    }

    return (
        <article 
            className="SmallNote"
            style={{backgroundColor:color}}
            onClick={toggleNote}
        >

            <h1 className="SmallNote__title">
                {title}
            </h1>

        </article>
    );
}

export default SmallNote;