import React from 'react';
import BusInfo from "./BusInfo";

const BusOrg = (props) => {
    return(
        <React.Fragment>
            <h2> { props.organisation}</h2>

            {
                props.busData.map((bus,i) =>
                    <BusInfo key={i} {...bus} />)
            }
        </React.Fragment>

    )
};

export default BusOrg;