// Funktion för att ta emot användarinput och använda den för inloggning
function loginForm() {

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
  }

// Kollar om LS username är null. I så fall visas inloggningsformuläret.
if (localStorage.getItem("username") === null) {
  console.log("LS är tomt");
  loginForm();
}

// Sparar LS-användarnamn och lösenord som variabler
let username = localStorage.getItem('username');
let password = localStorage.getItem('password');

// Kollar om username är janne och password är test, och visar inloggningssida
if (username === "janne" & password === "test") {

  // Skapar användarsida
  let userPage = document.createElement("div");
  userPage.id = "userPage";
  userPage.innerHTML = "<p> Du är nu inloggad, välkommen!</p>";
  document.getElementById("container").append(userPage);

  // Skapar utloggningsknapp
  let logoutBtn = document.createElement("button");
  logoutBtn.id = "logoutBtn";
  logoutBtn.innerHTML = "Logga ut";
  document.getElementById("login").append(logoutBtn);

  // Eventlistener för utloggningsknapp
  logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("password");
    localStorage.removeItem("username");

     // Uppdaterar sidan
     location.reload(); 
  });

  // Om användare inte är janne/test och inte null/null
} else if (username !== null & password !== null){
  let errorPage = document.createElement("div");
  errorPage.id = "errorPage";
  errorPage.innerHTML = "<p>Felaktigt användarnamn eller lösenord. Försök igen!</p>";
  document.getElementById("container").append(errorPage);
  loginForm();

  // Tömmer LS om man laddar om sidan vid tidigare felaktigt inloggningsförsök
  window.onload = (event) => {
    localStorage.removeItem("password");
    localStorage.removeItem("username");
  };
}

