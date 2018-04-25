import React from 'react';

const BusInfo = (props) => {
  return(

              <tr>
                  <td className="bus-id">{props.busId}</td>
                  <td className="bus-route">{props.routeVariant}</td>
                  <td className="bus-status">{props.deviationFromTimetable}</td>
              </tr>


  )
};

export default BusInfo;