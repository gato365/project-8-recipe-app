import React from 'react';

function Image({ src, alt, width, height }) {
  return (
    <div className="image-container">
      <img src={src} alt={alt} style={{ width: width, height: height }} />
    </div>
  );
}

export default Image;
