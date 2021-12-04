// Skapa input för användarnamn
let usernameInp = document.createElement("input");
usernameInp.id = "usernameInp";
usernameInp.placeholder = "Användarnamn";
document.getElementById("credentials").append(usernameInp);


// Skapa input för lösenord
let passwordInp = document.createElement("input");
passwordInp.id = "passwordInp";
passwordInp.placeholder = "Lösenord";
document.getElementById("credentials").append(passwordInp);


// Skapa login-button
let loginBtn = document.createElement("button");
loginBtn.id = "loginBtn";
loginBtn.innerHTML = "Logga in";
document.getElementById("login").append(loginBtn);

// Skapa error-sida för felaktig inloggning
let errorPage = document.createElement("div");
errorPage.id = "errorPage";
errorPage.innerHTML = "<p>Fel användarnamn eller lösenord</p>";
document.getElementById("container").append(errorPage);

// Funktion för att dölja input-fält
function hideInputs() {
    var x = document.getElementById("credentials");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  //Funktion för att dölja error-sidan (vet ej om den kommer behövas)
  function hideErrorPage() {
    var x = document.getElementById("errorPage");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  hideErrorPage();

// Eventlistener för inloggningsnkappen
loginBtn.addEventListener("click", function () {

    // Sparar användarnamn i LS
    let username = usernameInp.value;
    localStorage.setItem("username", username);

    // Sparar lösenord i LS
    let password = passwordInp.value;
    localStorage.setItem("password", password);

    // Uppdaterar sidan
    location.reload(); 
});

// Sparar LS-användarnamn och lösenord som variabler
let username = localStorage.getItem('username');
let password = localStorage.getItem('password');

// If-loop som körs om username är janne och password är test
if (username === "janne" & password === "test") {
    console.log("Hej Janne!");
    hideInputs();

    let userPage = document.createElement("div");
    userPage.id = "userPage";
    userPage.innerHTML = "<p> Du är nu inloggad, välkommen!</p>";
    document.getElementById("container").append(userPage);
    document.getElementById("loginBtn").innerHTML = "Logga ut";

} else {
    console.log("Du är inte Janne...");
}