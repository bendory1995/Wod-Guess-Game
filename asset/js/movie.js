
// list of letters. may not use. 
var movies = ["AVENGERS", "SPIDERMAN", "AVATAR", "INCREDIBLES", "TITANIC", "JUMANJI", "DEADPOOL", "MINIONS", "AQUAMAN", "SHREK", "INCEPTION", "ROCKY", "SUPERMAN", "CINDERELLA", "BATMAN", "PINOCCHIO", "SHREK", "JAWS", "FROZEN", "TRANSFORMERS", "ZOOTOPIA", "UP", "ALADDIN", "PSYCHO", "GOODFELLAS", "GLADIATOR", "BAMBI", "ALIEN", "CASABLANCA", "GHOSTBUSTERS", "MISERY", "SEVEN", "SCARFACE", "ROBOCOP", "TOOTSIE", "TOMBSTONE", "BRAVEHEART", "THOR", "INTERSTELLAR", "UNBREAKABLE", "ARRIVAL", "DUMBO", "SKYFALL", "WATCHMEN", "TAKEN", "TROY", "MIRACLE", "ARMAGEDDON", "RUSHMORE"];
// this finds a random movie name.
var gameWord = movies[Math.floor(Math.random() * movies.length)];
// how many letters there are in the movie.
var numberOfSpace = gameWord.length;
//creating an array named wordByLetter
var wordByLetter = [];
// filling the array with each letter in a movie
wordByLetter = gameWord.split("");
// creating a blank array 
var blank = [];
// increasing the size of the array by letter number
blank.length = numberOfSpace;
//how many guesses are remained in a game
blank.fill('_');
var guessRemained = 7;
// number of losses 
var losses = 0;
// number of wins
var wins = 0;
var count = numberOfSpace;
var lettersUsed = [];

// playing if there are number of guesses remained 
if (guessRemained > 0) {
    //when key is pressed
    document.onkeydown = function (event) {
        // getting the key letter
        var keyPressed = String.fromCharCode(event.keyCode);
        //pringin the guess remained on the page
        document.getElementById('gr').innerHTML = guessRemained;
        // giving a condition if an array has the key user pressed
        if (wordByLetter.includes(keyPressed)) {
            count--;
            //finding where the letter is in an array
            var numb = wordByLetter.indexOf(keyPressed);
            //filling the blank array with corresponding letters 
            blank[wordByLetter.indexOf(keyPressed)] = keyPressed;
            //changing the original letters to 0.
            wordByLetter[numb] = 0;
            //printing the filled array
            document.getElementById('array').innerHTML = blank.join(" ");
        }
        //when the user got it wrong
        else {
            lettersUsed.push(keyPressed);
            document.getElementById('lu').innerHTML = lettersUsed;
            guessRemained--;
            document.getElementById('gr').innerHTML = guessRemained;
        }
        if (count == 0) {
            lettersUsed = [];
            document.getElementById('lu').innerHTML = lettersUsed;
            wins++;
            document.getElementById('wins').innerHTML = wins;
            blank = [];
            wordByLetter = [];
            gameWord = movies[Math.floor(Math.random() * movies.length)];
            // reseting the movie name with letters.
            wordByLetter = gameWord.split("");
            // reseting the guess remained for the user.
            //giving the length of an array 
            blank.length = wordByLetter.length;
            blank.fill('_');
            document.getElementById('array').innerHTML = blank.join(" ");
            count = blank.length;
            guessRemained = 7;
            document.getElementById('gr').innerHTML = guessRemained;


        }
        // when there are no more remaining guesses left
        if (guessRemained == 0) {
            //when user cannot make anymore guesses, increase loss amount
            losses++;
            //reseting to a blank array
            blank = [];
            //reseting to a blank array
            wordByLetter = [];
            lettersUsed = [];
            document.getElementById('lu').innerHTML = lettersUsed;
            //printing the losses on the screen
            document.getElementById('losses').innerHTML = losses;

            //setting a new movie name for next round.
            gameWord = movies[Math.floor(Math.random() * movies.length)];
            // reseting the movie name with letters.
            wordByLetter = gameWord.split("");
            //giving the length of an array 
            blank.length = wordByLetter.length;
            blank.fill('_');
            document.getElementById('array').innerHTML = blank.join(" ");
            count = blank.length;
            // reseting the guess remained for the user.
            guessRemained = 7;
            document.getElementById('gr').innerHTML = guessRemained;
        }
    }
}



