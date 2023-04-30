import React from 'react';

// Article component
function Article(props) {
  return (
    <article>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </article>
  );
}
