describe("Tests for check login function",() =>{

    describe("Test to pass", () =>{
        it(" should use the md5Encrypt function, and return the Boolean true if the username and the password match a known username and matching password. ",()=>{
            
            var correctUsr= 'BassilYounes';
            var correctPwd = 'Testpass123';
            expect(checkLogin(correctUsr,correctPwd)).toEqual(true);

        })
})
    describe("Test to fail", ()=>{


        it("should return Invalid 'Username or '"+ 
        "'Password'. if the username input does not match a known "+
        "username; or the password input does not match a known "+
        "password; or a valid username is input with an invalid password, or "+
        "an invalid username is input with a valid password.",()=>{
            var correctUsr= 'BassilYounes';
            var correctPwd = 'Testpass123';
            var incorrectUsr = "James";
            var incorrectPwd = "Ilikecats123";
            var output = 'Invalid Username or Password';

                expect(checkLogin(incorrectUsr, incorrectPwd )).toEqual(output);
                expect(checkLogin(incorrectUsr, correctPwd )).toEqual(output);
                expect(checkLogin(correctUsr, incorrectPwd )).toEqual(output);

        })
        it("return ‘No username entered.’ if the username is an empty string",() =>{
            var output = 'No username entered.';
            var correctPwd = 'Testpass123';
            expect(checkLogin("", correctPwd)).toEqual(output);
        })
        it("return ‘No password entered.’ if the password is an empty string",() =>{
            var output = 'No password entered.';
            var correctUsr= 'BassilYounes';
            expect(checkLogin(correctUsr,"")).toEqual(output);
        })
    })
})
