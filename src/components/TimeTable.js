import React from 'react';
import BusOrg from './BusOrg';

const TimeTable = (props) => {
    return(<div>

                    {
                    props.busData.map((bus,i) =>
                            <BusOrg key={i} {...bus} />)
                    }
            </div>
        )
};

export default TimeTable;