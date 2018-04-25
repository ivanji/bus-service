import React from 'react';

const BusInfo = (props) => {
  return(

              <tr>
                  <td>{props.busId}</td>
                  <td>{props.routeVariant}</td>
                  <td>{props.deviationFromTimetable}</td>
              </tr>


  )
};

export default BusInfo;