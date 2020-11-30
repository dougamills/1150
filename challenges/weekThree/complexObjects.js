let netflix = {
    id: 1,
    name: "The Office",
    season1: {
      seasonInfo: {
        episodeInfo: [
          {
            episode: 1,
            episodeName: "Pilot",
          },
          {
            episode: 2,
            episodeName: "Diversity Day",
          },
          {
            episode: 3,
            episodeName: "Health Care",
          },
          {
            episode: 4,
            episodeName: "The Alliance",
          },
          {
            episode: 5,
            episodeName: "Basketball",
          },
        ],
      },
    },
    season2: {},
    season3: {},
  };

  console.log(netflix.season1.seasonInfo.episodeInfo[1].episodeName);  //logs, outputs Diversity Day (the specific item drilled down too)

  //-----------------------------------------------

  /*
    JSON OBJECTS

        - JSON stands for JavaScript Object Notation
        - The JSON syntax is derived from JavaScript Object Notation syntax, but the JSON format is text only
        - JSON exists as a string — useful when you want to fetch data from a server. It needs to be converted to a native JavaScript object if you want to access the data.

        - show them what JSON data looks like in browser ---> https://rickandmortyapi.com/api/character/
        - https://jsonformatter.org/ --- > paste in text from above

        - we will talk more about JSON data when we start working with API's
*/

/*
************
OBJECT BRACKET NOTATION/PROPERTY ACCESSORS 
************
    - Property accessors provide access to an object's properties by using the dot notation or the bracket notation.

    MDN Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

   https://docs.google.com/forms/d/e/1FAIpQLScvGgqArq0MC0-LnFcSiDon1wwUnwkbitNRlWL2nZhb5hHAPA/viewform
*/

let dog = {};

dog['name'] = 'Luna';
dog['breed'] = 'Siberian Husky';


console.log(dog);
console.log(dog['name'], dog['breed']);

// all keys in objects are strings, although they are not wrapped in quotes
let test = Object.keys(dog);
console.log(test);
console.log(typeof test[0]);

// Using square brackets is a good idea when you may not be able to use dot notatation to dig through an object
// I personally haven't ran into many situations where I haven't been able to use dot notation, but we still want to teach this to you guys so you're aware

// about the only time you would need to use object bracket notation is if the key you're trying to grab has spaces in it
let testObj = {
    "Spaces Here": true,
    noSpaces: true
}

console.log(testObj.noSpaces);
// notice how VSCode automatically correct us and places our key in brackets when we try to grab the key 'Spaces Here' using dot notation
console.log(testObj["Spaces Here"]);

//11-24-20 CLASS -- Challenge right off the bat...
let restaurantData = {
  restaurantName: "McDonalds",
  yearBuilt: 2020,
  seating: "20-90",
  carryOut: true,
  softDrinks: ["Coke", "Mr.Pibb"]
};

console.log(restaurantData);

// 11/24/20 Class Challenge   GIT TO KNOW ME
let gitToKnowMe = {
  name: "Doug",
  age: 43,
  graduatedHSYear: 1995,
  pets: true,
  petNames: "Jama",
  mostRecentMovieWatched:"Diehard",
  carsOwned: [{make:"Dodge", model:"Ram"}],
  favoritePotato: "fried",
};

console.log(gitToKnowMe);

//---Group challenge-----
let group1 = {
  Aj: {
    name: "Aj White",
    age: 38,
    graduatedHSYear: 1999,
    pets: true,
    petNames: ["Ruby", "Georgia"],
    recentMovieWatched: "The Great Outdoors",
    carsOwned: [{ make: "Jeep", model: "Wrangler" }],
    favoritePotato: "Sweet Potato",
  },
  Amy: {
    name: "Amy Melangton",
    age: 41,
    graduatedHSYear: 1997,
    pets: true,
    petNames: ["Jazzy"],
    recentMovieWatched: "Elf",
    carsOwned: [{ make: "Kia", model: "Sedona" }],
    favoritePotato: "Sweet Potato",
  },
  Ryan: {
    name: "Ryan Eckerle",
    age: 39,
    graduationHSYear: 2000,
    pets: true,
    petNames: ["Bella"],
    recentMovieWatched: "The Titans",
    carsOwned: [{make: "Dodge", model: "Ram"}],
    favoritePotato: "Baked",
  },
  Doug: {
    name: "Doug",
    age: 43,
    graduatedHSYear: 1995,
    pets: true,
    petNames: "Jama",
    recentMovieWatched: "Diehard",
    carsOwned: [{ make: "Dodge", model: "Ram" }],
    favoritePotato: "fried",
  },
};

console.log(group1);
console.log(
  group1.Aj.recentMovieWatched,
  group1.Amy.recentMovieWatched,
  group1.Ryan.recentMovieWatched,
  group1.Doug.recentMovieWatched,
);

let moviesWatched = [];

console.log(
  moviesWatched.push(
    group1.Aj.recentMovieWatched,
  group1.Amy.recentMovieWatched,
  group1.Ryan.recentMovieWatched,
  group1.Doug.recentMovieWatched,
  )
);

console.log(moviesWatched);

//Rob's solution-------little different



