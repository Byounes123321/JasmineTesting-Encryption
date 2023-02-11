/** 
*Check login function will take the users User name and password
 *convert it to an encrypted hash and compare it to stored valid 
 *username and password 
 * @param {string} userName 
 * @param {string} password
 */
// set login credentials
    window.onload = () =>{
        alert("hi");
    }

 function checkLogin(userName, password) {
    "use strict";
    var savedUser = md5Encrypt("BassilYounes");
    var savedPass = md5Encrypt("Testpass123");

    // console.log("username: " + savedUser, "password: "+ savedPass);

    if (userName == "") {
    return "No username entered.";
    } 
   else if (password == ""){
    return "No password entered.";
   }

    var encryptUser = md5Encrypt(userName);
    var encryptPass = md5Encrypt(password);

     if(encryptUser == savedUser && encryptPass == savedPass){
        return true;
    } else {
        return 'Invalid Username or Password';
    }
}