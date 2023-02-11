describe("Test md5 Encryption", () => {

    // Test to pass
    describe("Encrypt test to pass", () => {
        //test if answer is correct
        it("should return a string", () => {
            let testString = "Younes";
            expect(md5Encrypt(testString)).toBeInstanceOf(String);
        })
        it("Should return 32 hashed string", ()=>{
            let testString = "Younes";
            let countString = md5Encrypt(testString);
            let num = countString.length
            // let numOfString = md5Encrypt(testString).length
            expect(md5Encrypt(testString)).toMatch(/^[a-zA-Z0-9]{32}/);
        })
        });
    })
    describe("Test to fail", ()=>{
        it("should not return the same string it was given", () =>{
            let testString = "Younes";
            expect(md5Encrypt(testString)).not.toEqual("Younes");
    })
})
// End of main test block