import React from 'react';



// Section component
function Section(props) {
  return (
    <section>
      <h2>{props.title}</h2>
      {props.children}
    </section>
  );
}