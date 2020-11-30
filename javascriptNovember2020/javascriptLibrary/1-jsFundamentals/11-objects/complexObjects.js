/*
OBJECTS  - Video #1 of Week #3, Part #1
*/

let netflix= {
    id: 9,
    name: 'Super Store',
    season1: {
        seasonInfo: {
            episodeInfo: [
                {episode: 1, episodeName: 'Pilot'},
                {episode: 2, episodeName: 'Magazine Profie'},
                {episode: 3, episodeName: 'Shots and Salsa'},
                {episode: 4, episodeName: 'Mannequin'},
                {episode: 5, episodeName: 'Shoplifter'},
                {episode: 6, episodeName: 'Secret Shopper'},
                {episode: 7, episodeName: 'Color Wars'},
                {episode: 8, episodeName: 'Wedding Day Sale'},
                {episode: 9, episodeName: 'All Nighter'},
                {episode: 10, episodeName: 'Demotion'},
                {episode: 11, espisodeName: 'Labor'}
            ]
        }
    },
    season2: {},
    season3: {}
}

console.log(netflix); //logs, outputs contents of netflix array but not the details of the final array....
console.log(netflix.season1.seasonInfo); //logs, outputs "entire" contents of "netflix" array verbatim...
console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName);  //logs, outputs just the specific item #3 down inside the nested array "episodeInfo"

//---------------CHALLENGE-------------
//pick an episode to log in the terminal...
//using dot notation, walk through the netflix object and print off both the episode number and the episode name
console.log(netflix.season1.seasonInfo.episodeInfo[10].episode, netflix.season1.seasonInfo.episodeInfo[10].episodeName);



//---------VIDEO TWO of Week #3 Part#1
//JSON --> JavaScript Object Notation
//var json = {
    //tons of input that teacher showed ... talking about how JSON converts items from JS to text for transporting across web to be translated back to JS when it reaches other side...
//}

console.log(Object.keys(netflix));
console.log(Object.keys(netflix.season1));
console.log(Object.keys(netflix.season1).toString());


//---another example-----
let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

console.log(garden.vegetable);

let inc = 'fruit';

console.log(garden[inc]);  //will output "grape" which is the definition of key-value "fruit"


//--------another example-------
let baking = {};
baking['zucchini'] = 'better make some bread!';  //adds key value pairs using square bracket notation (i.e. a key called 'zucchini'... defined as 'better make some bread!')
baking.bestKeyEver = 'zucchini';  //adds key value pair using dot "." notation

console.log(baking.zucchini); //logs, outputs 'better make some bread!'
console.log(baking.bestKeyEver); //logs, outputs 'zucchini!'
console.log(baking[baking.bestKeyEver]); 

//-----------another example-----------
let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

let g = 'water';

Object.keys(garden).forEach(key => {
    if (key == g) {
        console.log(garden[key]);  //logs, outputs definition of key item water which is 'true'
    }
})



