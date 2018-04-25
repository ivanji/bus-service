import React from 'react';

const BusInfo = (props) => {

    let firstWord = props.routeVariant.indexOf(' ');
    console.log(firstWord);

    function relabelStatus(status) { //there could be neater ways of accomplishing this
        if (status > 300 )
            return <span className="status-late">Late</span>;
        else if (status < 0 )
            return <span className="status-early">Early</span>;
        else if (status === null)
            return <span className="status-early">Unknown</span>
        else
            return <span>On Time</span>;
    }

    return(
          <tr>
              <td className="bus-id">{props.busId}</td>
              <td className="bus-route">{props.routeVariant}</td>
              <td className="bus-status">
                  {relabelStatus(props.deviationFromTimetable)}
              </td>
          </tr>

    )
};

export default BusInfo;