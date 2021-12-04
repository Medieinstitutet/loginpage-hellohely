console.log("test");

// Notes to self:
// Localstorage: Använd stringify och parce. 
// Stringify: JSON.stringify(); 
// Localstorage kan BARA spara strings!

// Local Storage: Vi hämtar,vi ändrar, vi sparar

let loginBtn = document.createElement("button");
loginBtn.id = "loginBtn";
loginBtn.innerHTML = "Logga in";
document.getElementById("login").append(loginBtn);

loginBtn.addEventListener("click", function () {
    console.log("Inloggad");

    let userPage = document.createElement("div");
    userPage.id = "userPage";
    userPage.innerHTML = "<p> Du är nu inloggad, välkommen!</p>";
    document.getElementById("login").append(userPage);
    document.getElementById("loginBtn").innerHTML = "Logga ut";
});