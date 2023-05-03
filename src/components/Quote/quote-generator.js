const quotes = [
  "Food is an important part of a balanced diet. - Fran Lebowitz",
  "Cooking is like love. It should be entered into with abandon or not at all. - Harriet Van Horne",
  "There is no sincerer love than the love of food. - George Bernard Shaw",
  "A recipe has no soul. You as the cook must bring soul to the recipe. - Thomas Keller",
  "Good food is very often, even most often, simple food. - Anthony Bourdain",
  "The only real stumbling block is fear of failure. In cooking you've got to have a what-the-hell attitude. - Julia Child",
  "I cook with wine, sometimes I even add it to the food. - W. C. Fields",
  "Cooking is like passion on a plate. - Kristen Michelle",
  "Food is a celebration of life. - Joel Robuchon",
  "The kitchen is where we create our souls. - Chef Pino Luongo",
  "Food is symbolic of love when words are inadequate. - Alan D. Wolfelt",
  "A good cook is like a sorceress who dispenses happiness. - Elsa Schiaparelli",
  "Cooking is about creating something delicious for someone else. - Charlie Trotter",
  "Cooking is an act of love, a gift, and a way of sharing. - Fannie Farmer",
  "Food is not just fuel, it's information. It talks to your DNA and tells it what to do. - Dr. Mark Hyman",
  "The kitchen is a sacred space where art meets science and magic happens. - Chef José Andrés",
  "Cooking is like telling a story, and every ingredient is a character. - Michal Korkosz",
  "Food is essential to life, therefore make it good. - S. Truett Cathy",
  "A chef is only as good as his last dish. - Jean-Georges Vongerichten",
  "Cooking with love provides food for the soul. - Raaz",
  "To me, food is as much about the moment, the occasion, and the company as it is about the taste. - Heston Blumenthal",
  "Cooking is like music: you can tell when someone puts their heart and soul into it. - Emeril Lagasse",
  "Cooking is like magic; it can transform the mundane into something extraordinary. - Laura Esquivel",
  "The art of cooking is like poetry, it speaks to all the senses. - Chef John Besh",
  "Cooking is not just about the ingredients or the recipe, it's about the love and the passion that goes into it. - Chef Michael Symon",
];

function generate_quote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export { generate_quote };
