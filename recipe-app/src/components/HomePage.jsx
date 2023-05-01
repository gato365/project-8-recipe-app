import React from 'react';
import Image from './Image';
import Section from './Section';
import Article from './Article';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <h1>World's Top Recipe</h1>
      <Image src="recipe.jpg" alt="Delicious Pasta Dish" width="350px" height="350px"/>

      <div className="section-container">
        <Section title="Top Recipes">
          <Article image="pizza.jpg"  title="Mouth-Watering Pizza" content="Try our amazing homemade pizza recipe, topped with fresh ingredients." width="200px" height="200px" />
          <Article title="Delectable Sushi" content="Master the art of sushi-making with our step-by-step guide." image="sushi.jpg" width="200px" height="200px" />
          <Article image="tacos.jpg" title="Tasty Tacos" content="Enjoy a Mexican night with our delicious and easy taco recipe." width="200px" height="200px" />
        </Section>

        <div className="vertical-line"></div>

        <Section title="Top Stories">
          <Article title="Kitchen Innovations" content="Discover the latest kitchen gadgets that will make cooking a breeze." image="kitchen.jpg" width="200px" height="200px" />
          <Article image="baking.jpg" title="The Art of Baking" content="Learn the secrets of professional bakers and impress your friends." width="200px" height="200px" />
          <Article title="Food Sustainability" content="Find out how to reduce waste and support a sustainable food system." image="food_sus.jpg" width="200px" height="200px" />
        </Section>

        <div className="vertical-line"></div>

        <Section title="New Features">
          <Article image="meal_plan.jpg" title="Meal Planner" content="Introducing our new meal planner tool, designed to help you organize your weekly meals." width="200px" height="200px" />
          <Article title="Cooking Tips & Tricks" content="Explore our ever-growing library of cooking tips and tricks from top chefs." image="cooking_tips.jpg" width="200px" height="200px" />
          <Article image="rr.jpg" title="Recipe Roulette" content="Feeling adventurous? Try our Recipe Roulette and discover new dishes to try!" width="200px" height="200px" />
        </Section>
      </div>
    </div>
  );
}

export default HomePage;
