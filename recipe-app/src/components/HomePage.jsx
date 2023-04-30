import React from 'react';
import Image from './Image';
import Section from './Section';
import Article from './Article';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <Image src="recipe.jpg" alt="Recipe Image" />

      <div className="section-container">
        <Section title="Top Stories">
          <Article image="story1.jpg" title="Story Title 1" content="Story content goes here." />
          <Article title="Story Title 2" content="Story content goes here." image="story2.jpg" />
          <Article image="story3.jpg" title="Story Title 3" content="Story content goes here." />
        </Section>

        <div className="vertical-line"></div>

        <Section title="Stories">
          <Article title="Story Title 4" content="Story content goes here." image="story4.jpg" />
          <Article image="story5.jpg" title="Story Title 5" content="Story content goes here." />
          <Article title="Story Title 6" content="Story content goes here." image="story6.jpg" />
        </Section>

        <div className="vertical-line"></div>

        <Section title="Features">
          <Article image="feature1.jpg" title="Feature Title 1" content="Feature content goes here." />
          <Article title="Feature Title 2" content="Feature content goes here." image="feature2.jpg" />
          <Article image="feature3.jpg" title="Feature Title 3" content="Feature content goes here." />
        </Section>
      </div>
    </div>
  );
}

export default HomePage;
