import React from 'react';

import Collapsible from 'react-collapsible';
import BusInfo from "./BusInfo";
import Notes from './Notes';

const BusOrg = (props) => {
    const date = new Date().toJSON().slice(0,10).split('-').reverse().join('/');

    return(
        <React.Fragment>

                    <Collapsible trigger={<div className="panel panel-default">
                        <div className="panel-heading" aria-expanded="false">
                            { props.organisation + ' - ' + date}
                            <span className="caret"></span>
                        </div></div>}>

                        <div className="table-responsive panel-body">

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

                            <Notes label={props} />
                        </div>
                  </Collapsible>





        </React.Fragment>

    )
};

export default BusOrg;