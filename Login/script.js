window.onload = function () {
    // alert("hi");
    var formHandle = document.forms.userAuth__form;

    formHandle.onsubmit = processForm;
    function processForm() {

        var userName = formHandle.userAuth__username;
        var password = formHandle.userAuth__password;
        var showOutput = document.getElementById("output");
        var userOutput = document.getElementById("output__username");
        var passOutput = document.getElementById("output__password");


        if (userName.value === "") {
            userName.classList.add("user-auth__item_modified-red");
            userName.focus();
            return false;
        }

        if (password.value === "") {
            password.classList.add("user-auth__item_modified-red");
            password.focus();
            return false;
        }

        var output = checkLogin(userName.value, password.value);
        if(output == true){
            output = "Welcome back!";
        }
        
        showOutput.style.display = "block";
        showOutput.innerHTML = output;
        userOutput.innerHTML = userName.value;
        passOutput.innerHTML = password.value;
        return false;

       
    }
};