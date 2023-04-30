import React from 'react';

// Image component
function Image(props) {
  return (
    <img src={props.src} alt={props.alt} />
  );
}

export default Image;
