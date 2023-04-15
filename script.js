// 1a
const jPDinos = ["Velociraptors, Tyrannosaurus Rex, Diplophosaurus"];

// 1b
function seeDinos(a,...b){
    console.log(a);
    console.log(b);
};
seeDinos(...jPDinos);

// 2a
const jPCharacters = {
    alanGrant: "Sam's Neill",
    ellieSattler: "Laura Dern",
    ianMalcolm: "Jeff Goldblum",
    newman: `Newman`,
};

// 2b
seeCharacters = ({ellieSattler}) => console.log(ellieSattler);

seeCharacters(jPCharacters);

// BONUS
// 3a
const jurrasicParkMovies = [
    {
        one: 'Jurassic Park',
        two: 'The Lost World: Jurassic Park',
        three: 'Jurassic Park III',
    },
    {
        four: 'Jurassic World',
        five: 'Jurassic World: Fallen Kingdom',
        six: 'Jurassic World: World Dominion',
    }
];
console.log(jurrasicParkMovies);

// seeJPMovies(...jurrasicParkMovies);
// OR
// seeJPMovies(jurrasicParkMovies[0], jurrasicParkMovies[1]);

// 3b
seeJPMovies = ({one, two, three}, {four, five, six}) => {
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
};


seeJPMovies(jurrasicParkMovies);