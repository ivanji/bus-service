import React from 'react';

const BusInfo = (props) => {
  return(
      <div className="list-group">
         {console.log(props)}
          <ul>
              <li>{props.routeVariant}</li>
          </ul>

      </div>
  )
};

export default BusInfo;