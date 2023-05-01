import React from 'react';

// Article component
function Article({ title, content, image, width, height }) {
  const imgStyle = {
    width: width || 'auto',
    height: height || 'auto'
  };

  return (
    <article>
      {image && <img src={image} alt={title} style={imgStyle} />}
      <h3>{title}</h3>
      <p>{content}</p>
    </article>
  );
}

export default Article;