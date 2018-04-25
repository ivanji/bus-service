import React from 'react';
import BusInfo from "./BusInfo";
import Notes from './Notes';

const BusOrg = (props) => {
    const date = new Date().toJSON().slice(0,10).split('-').reverse().join('/');
    console.log(date);
    return(
        <React.Fragment>

            <h2> { props.organisation} - {date}</h2>

            <div className="table-responsive">

                <table className="table table-responsive table-striped">
                    <thead>
                    <tr>
                        <th>Bus ID</th>
                        <th>Route Variant</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        props.busData.map((bus,i) =>
                            <BusInfo key={i} {...bus} />)
                    }
                    </tbody>
                </table>
            </div>
            <Notes />

        </React.Fragment>

    )
};

export default BusOrg;