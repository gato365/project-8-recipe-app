const fs = require('fs');

const cuisines = [
    {
      "_id": "616b5a0c29e863b3722b4c4a",
      "name": "Italian",
      "description": "Italian cuisine is known for its simplicity, with many dishes having only four to eight ingredients. The cuisine is heavily influenced by Mediterranean flavors, featuring fresh vegetables, tomatoes, garlic, olive oil, and herbs such as basil and oregano. Pasta is a staple of Italian cuisine, with popular dishes including spaghetti carbonara, lasagna, and linguine with clam sauce. Italian cuisine is also known for its pizza, which originated in Naples, and is often served with fresh mozzarella cheese and tomato sauce."
    },
    {
      "_id": "616b5a0c29e863b3722b4c4b",
      "name": "Mexican",
      "description": "Mexican cuisine is known for its bold and spicy flavors, featuring a mix of indigenous and Spanish influences. Popular dishes include tacos, burritos, and enchiladas, which are often made with beans, rice, and fresh vegetables. Mexican cuisine also features a variety of sauces, including salsa, guacamole, and mole, which are made with a blend of spices and chilies. Traditional Mexican beverages include tequila and mezcal, which are often served with lime and salt."
    },
    {
      "_id": "616b5a0c29e863b3722b4c4c",
      "name": "Chinese",
      "description": "Chinese cuisine is diverse and varied, with regional specialties and cooking styles that vary greatly throughout the country. The cuisine is known for its use of fresh vegetables, meats, and seafood, as well as a variety of herbs and spices. Popular dishes include stir-fry dishes, dumplings, and noodle dishes, which are often served with rice. Chinese cuisine also features a variety of soups, including hot and sour soup and wonton soup, which are often made with a flavorful broth."
    },
    {
      "_id": "616b5a0c29e863b3722b4c4d",
      "name": "Italian",
      "description": "Italian cuisine is known for its simplicity, with many dishes having only four to eight ingredients. The cuisine is heavily influenced by Mediterranean flavors, featuring fresh vegetables, tomatoes, garlic, olive oil, and herbs such as basil and oregano. Pasta is a staple of Italian cuisine, with popular dishes including spaghetti carbonara, lasagna, and linguine with clam sauce. Italian cuisine is also known for its pizza, which originated in Naples, and is often served with fresh mozzarella cheese and tomato sauce."
    },
    {
      "_id": "616b5a0c29e863b3722b4c4e",
      "name": "Japanese",
      "description": "Japanese cuisine is known for its emphasis on fresh and seasonal ingredients, as well as its simple and elegant presentation. The cuisine features a variety of dishes, including sushi, sashimi, and tempura, as well as noodle dishes like udon and soba. Japanese cuisine also features a variety of soups, including miso soup and ramen, which are often made with a flavorful broth. Traditional Japanese beverages include sake and green tea, which are often served with meals."
    },
    {
      "_id": "616b5a0c29e863b3722b4c4f",
      "name": "Indian",
      "description": "Indian cuisine is known for its use of a variety of spices and herbs, which give the dishes their distinct and complex flavors. The cuisine varies greatly from region to region, with popular dishes including curries, biryanis, and naan bread. Indian cuisine also features a variety of vegetarian and vegan options, including dal and chana masala. Traditional Indian beverages include chai tea and lassi, a yogurt-based drink that can be sweet or savory depending on the ingredients used."
  
    },
    {
    "_id": "616b5a0c29e863b3722b4c50",
    "name": "Thai",
    "description": "Thai cuisine is known for its balance of sweet, sour, salty, and spicy flavors, as well as its use of fresh herbs and spices like lemongrass, cilantro, and chili peppers. Popular dishes include curries, noodle dishes like pad thai, and stir-fries, which are often made with a mix of meat or seafood, vegetables, and rice or noodles. Thai cuisine also features a variety of soups, including tom yum and tom kha gai, which are made with a flavorful broth. Traditional Thai beverages include iced tea and fruit smoothies."
    },
    {
    "_id": "616b5a0c29e863b3722b4c51",
    "name": "Vietnamese",
    "description": "Vietnamese cuisine is known for its fresh and light flavors, featuring a mix of fresh herbs, vegetables, and meats or seafood. Popular dishes include pho, a noodle soup made with a flavorful broth and meat or seafood, and banh mi sandwiches, which are often made with pickled vegetables and a variety of meats. Vietnamese cuisine also features a variety of spring rolls, both fresh and fried, which are often served with a peanut sauce or a fish sauce-based dipping sauce. Traditional Vietnamese beverages include iced coffee and fruit smoothies."
    },
    {
    "_id": "616b5a0c29e863b3722b4c52",
    "name": "Korean",
    "description": "Korean cuisine is known for its bold and spicy flavors, featuring a mix of meats, seafood, and vegetables, as well as a variety of spices and fermented foods. Popular dishes include bulgogi, a marinated beef dish, and bibimbap, a rice bowl topped with a mix of vegetables, meat, and a fried egg. Korean cuisine also features a variety of soups and stews, including kimchi jjigae, a spicy kimchi stew. Traditional Korean beverages include soju, a clear distilled liquor, and makgeolli, a rice-based alcoholic beverage."
    },
    {
    "_id": "616b5a0c29e863b3722b4c53",
    "name": "Filipino",
    "description": "Filipino cuisine is a fusion of indigenous, Spanish, and Chinese influences, featuring a mix of meats, seafood, vegetables, and rice. Popular dishes include adobo, a stew made with meat or seafood marinated in vinegar and soy sauce, and lumpia, a type of spring roll. Filipino cuisine also features a variety of soups and stews, including sinigang, a sour soup made with tamarind. Traditional Filipino beverages include San Miguel beer and calamansi juice."
    },
    {
    "_id": "616b5a0c29e863b3722b4c54",
    "name": "Mediterranean",
    "description": "Mediterranean cuisine is known for its use of fresh and healthy ingredients, featuring a mix of fruits, vegetables, seafood, and olive oil. Popular dishes include hummus, a dip made with chickpeas and tahini, and tabbouleh, a salad made with parsley, bulgur wheat, and tomatoes. Mediterranean cuisine also features a variety of grilled meats and seafood, including lamb chops and octopus. Traditional Mediterranean beverages include red wine and ouzo, an anise-flavored liqueur."
  
  },
  {
  "_id": "616b5a0c29e863b3722b4c55",
  "name": "Ethiopian",
  "description": "Ethiopian cuisine is known for its use of spices and herbs, featuring a mix of meats, vegetables, and grains. Popular dishes include injera, a sourdough flatbread that is used to scoop up stews and other dishes, and doro wat, a spicy chicken stew made with berbere, a spice mix that includes chili peppers and other spices. Ethiopian cuisine also features a variety of lentil dishes and vegetable stews. Traditional Ethiopian beverages include tej, a honey wine, and coffee, which is often served with popcorn."
  },
  {
  "_id": "616b5a0c29e863b3722b4c56",
  "name": "Peruvian",
  "description": "Peruvian cuisine is known for its blend of indigenous and Spanish influences, featuring a mix of meats, seafood, and vegetables. Popular dishes include ceviche, a dish made with raw fish marinated in lime juice, and lomo saltado, a stir-fry made with beef, onions, and tomatoes. Peruvian cuisine also features a variety of soups, including chupe de camarones, a shrimp soup made with potatoes and corn. Traditional Peruvian beverages include pisco sour, a cocktail made with pisco, a clear brandy, and lime juice."
  },
  {
  "_id": "616b5a0c29e863b3722b4c57",
  "name": "Spanish",
  "description": "Spanish cuisine is known for its use of fresh and seasonal ingredients, featuring a mix of meats, seafood, and vegetables. Popular dishes include paella, a rice dish made with saffron and a variety of meats and seafood, and tapas, a selection of small dishes that are often shared. Spanish cuisine also features a variety of soups, including gazpacho, a cold soup made with tomatoes and peppers. Traditional Spanish beverages include red wine and sangria, a fruit-based wine punch."
  },
  {
  "_id": "616b5a0c29e863b3722b4c58",
  "name": "French",
  "description": "French cuisine is known for its sophistication and attention to detail, featuring a mix of meats, seafood, and vegetables, as well as a variety of cheeses and breads. Popular dishes include coq au vin, a stew made with chicken and red wine, and quiche, a savory pastry filled with cheese and vegetables. French cuisine also features a variety of soups, including onion soup, which is often topped with melted cheese. Traditional French beverages include wine and champagne."
  },
  {
  "_id": "616b5a0c29e863b3722b4c59",
  "name": "German",
  "description": "German cuisine is known for its hearty and filling dishes, featuring a mix of meats, potatoes, and sauerkraut. Popular dishes include bratwurst, a type of sausage, and schnitzel, a breaded and fried meat dish. German cuisine also features a variety of soups, including potato soup and lentil soup. Traditional German beverages include beer and schnapps, a clear spirit made from fruit."
  },
  {
  "_id": "616b5a0c29e863b3722b4c5a",
  "name": "Moroccan",
  "description": "Moroccan cuisine is known for its use of spices and herbs, featuring a mix of meats, vegetables, and grains. Popular dishes include couscous, a type of semolina pasta that is often served with meat and vegetables, and tagine, a stew made with meat, vegetables, and spices that is cooked in a special clay pot. Moroccan cuisine also features a variety of soups, including harira, a lentil and vegetable soup that is often served during Ramadan. Traditional Moroccan beverages include mint tea and orange blossom water."
  },
  {
  "_id": "616b5a0c29e863b3722b4c5b",
  "name": "Greek",
  "description": "Greek cuisine is known for its use of fresh and healthy ingredients, featuring a mix of meats, seafood, and vegetables, as well as a variety of cheeses and olives. Popular dishes include moussaka, a baked dish made with eggplant and ground meat, and spanakopita, a savory pastry filled with spinach and feta cheese. Greek cuisine also features a variety of soups, including avgolemono, a lemon and egg soup. Traditional Greek beverages include ouzo, a clear anise-flavored liqueur, and retsina, a white wine flavored with pine resin."
  },
  {
  "_id": "616b5a0c29e863b3722b4c5c",
  "name": "Lebanese",
  "description": "Lebanese cuisine is known for its use of fresh and healthy ingredients, featuring a mix of meats, seafood, and vegetables, as well as a variety of herbs and spices. Popular dishes include shawarma, a type of sandwich made with roasted meat and vegetables, and tabbouleh, a salad made with parsley, bulgur wheat, and tomatoes. Lebanese cuisine also features a variety of soups, including lentil soup and chicken and rice soup. Traditional Lebanese beverages include arak, a clear anise-flavored liquor, and Lebanese coffee."
  }
  ]
  


const cuisinesWithoutIds = cuisines.map(({ _id, ...rest }) => rest);

// Write the JSON to a file
fs.writeFileSync('cuisines.json', JSON.stringify(cuisinesWithoutIds));