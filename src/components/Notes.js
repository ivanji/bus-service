import React from 'react';

const Notes = (props) => {

    function saveNote() { // Just a naive way of saving notes. For fun.
        const textArea = document.getElementsByTagName('textarea');
        // Keeping it simply for this exercise.
        // Allowing to save Notes to local storage only for first text-area
        localStorage.setItem('Notes', textArea[0].value);
    }

    return(
        <React.Fragment>
            <form>
                <div className="form-group">
                    <textarea id={props.label.organisation.trim()} className="form-control"
                              placeholder="Enter notes here"
                              defaultValue={localStorage.getItem('Notes')}>
                    </textarea>
                </div>
                <button type="button"
                        className="btn btn-primary" onClick={saveNote}>Save Notes</button>
            </form>

        </React.Fragment>
        
        
        
    )
};

export default Notes;