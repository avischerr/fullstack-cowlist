import React from 'react';

var Cow = (props) => {
  return (
    <div>
      <h4>{props.cow.name}</h4>
      <p>{props.cow.description}</p>
    </div>
  )
};

export default Cow;