// Notes to self:
// Localstorage: Använd stringify och parce. 
// Stringify: JSON.stringify(); 
// Localstorage kan BARA spara strings!
// Local Storage: Vi hämtar,vi ändrar, vi sparar


// - - - - - - - - - - - - - - - - - - 

// Skapa input för användarnamn
let usernameInp = document.createElement("input");
usernameInp.id = "usernameInp";
usernameInp.placeholder = "Användarnamn";
document.getElementById("login").append(usernameInp);


// Skapa input för lösenord
let passwordInp = document.createElement("input");
passwordInp.id = "passwordInp";
passwordInp.placeholder = "Lösenord";
document.getElementById("login").append(passwordInp);


// Skapa login-button
let loginBtn = document.createElement("button");
loginBtn.id = "loginBtn";
loginBtn.innerHTML = "Logga in";
document.getElementById("login").append(loginBtn);

// Eventlistener för inloggning
loginBtn.addEventListener("click", function () {
    console.log("Inloggad");

    // Sparar användarnamn i LS
    let username = usernameInp.value;
    localStorage.setItem("username", username);

    // Sparar lösenord i LS
    let password = passwordInp.value;
    localStorage.setItem("password", password);

    // let userPage = document.createElement("div");
    // userPage.id = "userPage";
    // userPage.innerHTML = "<p> Du är nu inloggad, välkommen!</p>";
    // document.getElementById("login").append(userPage);
    // document.getElementById("loginBtn").innerHTML = "Logga ut";
});