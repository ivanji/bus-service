import React from 'react';

const BusInfo = (props) => {

    // There are neater ways of accomplishing this, using selectors. (using reselect library).
    // Due to the simplicity of this app, decided to keep it simple. Normally, this would be a dumb component
    function relabelStatus(status) {

        if (status > 300 )
            return <span className="status-late">Late</span>
        else if (status < 0 )
            return <span className="status-early">Early</span>
        else if (status === null)
            return <span className="status-early">Unknown</span>
        else
            return <span>On Time</span>;
    }

    function boldRoute(route) {
        let firstSpaceIdx = route.indexOf(' ');
        let firstWord = route.slice(0,firstSpaceIdx);
        let remainder = route.slice(firstSpaceIdx);

        return '<b>'+ firstWord +'</b>' + remainder;
    }

    return(
          <tr>
              <td className="bus-id">{props.busId}</td>
              <td className="bus-route"><div dangerouslySetInnerHTML={{ __html: boldRoute(props.routeVariant) }} /></td>
              <td className="bus-status">
                  {relabelStatus(props.deviationFromTimetable)}
              </td>
          </tr>

    )
};

export default BusInfo;