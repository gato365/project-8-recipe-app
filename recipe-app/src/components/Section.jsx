import React from 'react';

function Section(props) {
  return (
    <section>
      <h2>{props.title}</h2>

      {/* Render the articles in a two-column layout */}
      <div className="article-container">
        {props.children.map((article, index) => (
          <div className="article" key={index}>
            {/* Render the image if it exists */}
            {article.props.image && <img src={article.props.image} alt={article.props.title} />}

            {/* Render the title and content */}
            <h3>{article.props.title}</h3>
            <p>{article.props.content}</p>
          </div>
        ))}
      </div>

      {/* Add a vertical line to separate the sections */}
      <div className="vertical-line"></div>
    </section>
  );
}

export default Section;
