import React from 'react';

const Notes = () => {
    return(
        <React.Fragment>
            <form>
                <div className="form-group">
                    <textarea className="form-control">

                    </textarea>
                </div>
                <button type="button" className="btn btn-primary">Save Note</button>
            </form>

        </React.Fragment>
        
        
        
    )
};

export default Notes;