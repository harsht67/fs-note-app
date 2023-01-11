import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    entities: [
        {
            id: 1,
            title: "Title of pinned",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            last_edited: "Jan 6",
            color: "teal",
            pinned: true,
            label: "money" 
        },
        {
            id: 2,
            title: "title two of pinned",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            last_edited: "Feb 9",
            color: "purple",
            pinned: true,
            label: "book" 
        },
        {
            id: 3,
            title: "title three of pinned",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            last_edited: "Jan 10",
            color: "maroon",
            pinned: true,
            label: "coding" 
        },
        {
            id: 4,
            title: "title of other",
            body: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            last_edited: "Jan 10",
            color: "maroon",
            pinned: false,
            label: "coding" 
        },
        {
            id: 5,
            title: "title two of other",
            body: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            last_edited: "Feb 20",
            color: "teal",
            pinned: false,
            label: "money" 
        }
    ],
    status: null,
};

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        noteAdded(state, action) {},
        noteDeleted(state, action) {
            const id = action.payload;

            state.entities = state.entities.filter(note => note.id!=id);
        },
        noteUpdated(state, action) {},
        notePinned(state, action) {
            const id = action.payload;

            state.entities = state.entities.map(note => {
                if(note.id==id) {
                    return {
                        ...note,
                        pinned: !note.pinned,
                    };
                }
                return note; 
            });
        }
    }
});

export const { noteDeleted, notePinned } = notesSlice.actions;

export default notesSlice.reducer;