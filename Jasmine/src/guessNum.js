function guessNum(guess) {
    "use strict";
    var secretGuess = 4;//set value of correct number

    //Output messages
    var returnMessage = "";
    var noNumber = "A number was not input.";
    var noInput = "A value was not entered.";
    var outOfRange = "Way off!!!! Pick between 1 and 10.";
    // outOfRange is incorrect. was: "Way off! Pick between 1 and 10." changed to: "Way off!!!! Pick between 1 and 10.", there are four exclamation marks as stated in the functional specifications. -Bassil Younes (31-01-2023)
    var correct = "You guessed it!";
    var validIncorrect = "Guess again.";

    //Validate input and assign a return message
    if (isNaN(guess) === true) {
        returnMessage = noNumber;

    } else if (guess === "") {
        returnMessage = noInput;

    } else if (guess < 1 || guess > 10) { // else if statement was incorrect. was: (guess <= 1 || guess >= 10) corrected to: (guess < 1 || guess > 10), This is because the function should be inclusive between 1 and 10 as stated in the functional specifications. -Bassil Younes (31-01-2023)
        returnMessage = outOfRange;

    } else {
        if (parseInt(guess) === secretGuess) {
            returnMessage = correct;
        } else {
            returnMessage = validIncorrect;
        }
    }

    return returnMessage;
}