import React from 'react';
import BusOrg from './BusOrg';

const TimeTable = (props) => {
    return(<div className="product-showcase-wrapper">
                <div className="product-showcase">
                    {
                    props.busData.map((bus,i) =>
                            <BusOrg key={i} {...bus} />)
                    }
                </div>
            </div>
        )
};

export default TimeTable;