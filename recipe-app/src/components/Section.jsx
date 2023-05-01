import React from 'react';

function Section(props) {
  return (
    <section>
      <h2>{props.title}</h2>

      {/* Render the articles in a two-column layout */}
      <div className="article-container">
        {props.children.map((article, index) => (
          <div className="article" key={index}>
            {article}
          </div>
        ))}
      </div>

      {/* Add a vertical line to separate the sections */}
      <div className="vertical-line"></div>
    </section>
  );
}

export default Section;
