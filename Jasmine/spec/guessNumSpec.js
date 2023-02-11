describe("Test guess number", () => {

    // Test to pass
    describe("guessNum test to pass", () => {
        //test if answer is correct
        it("should return ‘You guessed it!’ when the correct number is entered (4)", () => {
            let testNum = 4;
            expect(guessNum(testNum)).toEqual("You guessed it!");
        });
        //test if answer is incorrect 
        it("should return ‘Guess again.’ for any number between 1 and 10 (inclusive) that is not the correct answer (5)", () => {
            let testNum = 5;
            expect(guessNum(testNum)).toEqual("Guess again.");
        });

        it("should return ‘A number was not input.’ if the value entered is not a number (A)", () => {
            let testNum = "A";
            expect(guessNum(testNum)).toEqual("A number was not input.");
        });

        it("should return ‘A value was not entered.’ if it receives an empty string ('')", () => {
            let testNum = "";
            expect(guessNum(testNum)).toEqual("A value was not entered.");
        });
    });// end of test to pass



    // Test to fail
    describe("guessNum test to fail", () => {
        it("should not return ‘You guessed it!’ when the incorrect number is entered (5)", () => {
            let testNum = 5;
            expect(guessNum(testNum)).not.toEqual("You guessed it!");
        });

        it("should not return ‘Guess again.’ for any number between 1 and 10 (inclusive) that is the correct answer (4)", () => {
            let testNum = 4;
            expect(guessNum(testNum)).not.toEqual("Guess again.");
        });

        it("should not return ‘A number was not input.’ if the value entered is a number (5)", () => {
            let testNum = 5;
            expect(guessNum(testNum)).not.toEqual("A number was not input.");
        });

        it("should not return ‘A value was not entered.’ if it receives an string ('Hello World')", () => {
            let testNum = "Hello World";
            expect(guessNum(testNum)).not.toEqual("A value was not entered.");
        });
    });// end of test to fail


    // boundary testing
    describe("guessNum boundary testing", () => {

        it("should return ‘Way off!!!! Pick between 1 and 10.’ if the value entered is a number outside of the allowed range of guessing values (11)", () => {
            let testNum = 11;
            expect(guessNum(testNum)).toEqual("Way off!!!! Pick between 1 and 10.");
        });

        it("should return ‘Way off!!!! Pick between 1 and 10.’ if the value entered is a number outside of the allowed range of guessing values (0)", () => {
            let testNum = 0;
            expect(guessNum(testNum)).toEqual("Way off!!!! Pick between 1 and 10.");
        });

        it("should return ‘Guess again.’ for any number between 1 and 10 (inclusive) that is not the correct answer (1)", () => {
            let testNum = 1;
            expect(guessNum(testNum)).toEqual("Guess again.");
        });

        it("should return ‘Guess again.’ for any number between 1 and 10 (inclusive) that is not the correct answer (10)", () => {
            let testNum = 10;
            expect(guessNum(testNum)).toEqual("Guess again.");
        });

        it("should return ‘Guess again.’ for any number between 1 and 10 (inclusive) that is not the correct answer (3)", () => {
            let testNum = 3;
            expect(guessNum(testNum)).toEqual("Guess again.");
        });

        it("should return ‘Guess again.’ for any number between 1 and 10 (inclusive) that is not the correct answer (5)", () => {
            let testNum = 5;
            expect(guessNum(testNum)).toEqual("Guess again.");
        });



    });// end of boundary testing

})// End of main test block