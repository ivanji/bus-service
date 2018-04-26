import React from 'react';

class Notes extends React.Component {
    // created a functional component to allow for Save Notes.

    constructor(props) {
        super(props);

        this.saveNote = this.saveNote.bind(this);
        this.handleSubmi = this.handleSubmit.bind(this);
    }

    saveNote(event) {
        // Fun way of saving notes locally. Keeping it simple. I've decided to exclude these values from state.
        const textArea = document.getElementsByTagName('textarea');
        localStorage.setItem(event.target.id, event.target.value);
    }

    handleSubmit(event) {
        // We're actually saving notes onChange. This is mainly aa way to provide feedback to the user.
        alert("Your Notes have been saved");
        event.preventDefault();
    }

    render() {

        return(
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <textarea id={ this.props.label.organisation} className="form-control"
                                  placeholder="Enter notes here"
                                  defaultValue={localStorage.getItem( this.props.label.organisation)}
                                  onChange={this.saveNote}
                        >
                        </textarea>
                    </div>
                    <button type="submit"
                            className="btn btn-primary">Save Notes</button>
                </form>

            </React.Fragment>



        )
    }
}

export default Notes;