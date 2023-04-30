import React from 'react';
import Image from './Image';
import Section from './Section';
import Article from './Article';

function HomePage() {
  return (
    <div>
      <Image src="recipe.jpg" alt="Recipe Image" />

      <Section title="Top Stories">
        <Article title="Story Title 1" content="Story content goes here." />
        <Article title="Story Title 2" content="Story content goes here." />
        <Article title="Story Title 3" content="Story content goes here." />
      </Section>

      <Section title="Stories">
        <Article title="Story Title 4" content="Story content goes here." />
        <Article title="Story Title 5" content="Story content goes here." />
        <Article title="Story Title 6" content="Story content goes here." />
      </Section>

      <Section title="Features">
        <Article title="Feature Title 1" content="Feature content goes here." />
        <Article title="Feature Title 2" content="Feature content goes here." />
        <Article title="Feature Title 3" content="Feature content goes here." />
      </Section>
    </div>
  );
}

export default HomePage;
