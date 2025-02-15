let username = "student123";
let password = "student123";

let loginPage, languageSelectionPage, homeScreen, activityScreen;
let isLoggedIn = false;
let languageSelected = "";

function setup() {
    loginPage = document.getElementById('loginPage');
    languageSelectionPage = document.getElementById('languageSelectionPage');
    homeScreen = document.getElementById('homeScreen');
    activityScreen = document.getElementById('activityScreen');

    document.getElementById('loginBtn').addEventListener('click', checkLogin);
    document.getElementById('language1').addEventListener('click', selectLanguage);
    document.getElementById('language2').addEventListener('click', selectLanguage);
    document.getElementById('exitApp').addEventListener('click', exitApp);
    document.getElementById('reselectLanguage').addEventListener('click', reselectLanguage);
    document.getElementById('activity1').addEventListener('click', startActivity1);
    document.getElementById('backToHome').addEventListener('click', backToHome);
}


function checkLogin() {
    const inputUser = document.getElementById('username').value;
    const inputPass = document.getElementById('password').value;

    if (inputUser === username && inputPass === password) {
        isLoggedIn = true;
        loginPage.style.display = "none";
        languageSelectionPage.style.display = "block";
    } else {
        alert("Invalid credentials!");
    }
}

function selectLanguage(event) {
    languageSelected = event.target.innerText.trim();
    languageSelectionPage.style.display = "none";
    homeScreen.style.display = "block";

    let activityButtons = document.querySelectorAll(".button-container button");

    if (languageSelected === "English") {
        activityButtons.forEach(btn => btn.style.backgroundColor = "white");
        activityButtons.forEach(btn => btn.style.color = "black");
    } 
    else if (languageSelected === "Spanish") {
        activityButtons.forEach(btn => btn.style.backgroundColor = "#ffcc00"); // Yellow (Spanish flag)
        activityButtons.forEach(btn => btn.style.color = "black");
    } 
    else if (languageSelected === "Polish") {
        activityButtons.forEach(btn => btn.style.backgroundColor = "#e0e0e0"); // Light Gray (Polish flag)
        activityButtons.forEach(btn => btn.style.color = "black");
    } 
    else if (languageSelected === "Italian") {
        activityButtons.forEach(btn => btn.style.backgroundColor = "#008C45"); // Green (Italian flag)
        activityButtons.forEach(btn => btn.style.color = "white");
    }
}

function exitApp() {
    alert("Exiting app (window close not allowed in most browsers).");
}

function reselectLanguage() {
    languageSelected = "";
    homeScreen.style.display = "none";
    languageSelectionPage.style.display = "block";
}

function startActivity1() {
    homeScreen.style.display = "none";
    activityScreen.style.display = "block";
}

function backToHome() {
    activityScreen.style.display = "none";
    homeScreen.style.display = "block";
}

// Initialize setup when the window loads
window.onload = setup;