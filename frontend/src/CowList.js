import React from 'react';

var CowList = (props) => {
  return (
    <div>
      {props.cows.map((cow) => (
        <div key={cow.id}>
          <h5>{cow.name}</h5>
        </div>
      ))}
    </div>
  )
};

export default CowList;