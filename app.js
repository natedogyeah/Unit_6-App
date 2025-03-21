let username = "student123";
let password = "student123";

let loginPage, languageSelectionPage, homeScreen, activityScreen1, activityScreen2, activityScreen3;
let isLoggedIn = false;
let languageSelected = "";
let score = 0;

function setup() {
    loginPage = document.getElementById('loginPage');
    languageSelectionPage = document.getElementById('languageSelectionPage');
    homeScreen = document.getElementById('homeScreen');
    activityScreen1 = document.getElementById('activityScreen1');
    activityScreen2 = document.getElementById('activityScreen2');
    activityScreen3 = document.getElementById('activityScreen3');

    document.getElementById('loginBtn').addEventListener('click', checkLogin);
    document.getElementById('language1').addEventListener('click', selectLanguage);
    document.getElementById('language2').addEventListener('click', selectLanguage);
    document.getElementById('exitApp').addEventListener('click', exitApp);
    document.getElementById('reselectLanguage').addEventListener('click', reselectLanguage);
    document.getElementById('activity1').addEventListener('click', startActivity1);
    document.getElementById('activity2').addEventListener('click', startActivity2);
    document.getElementById('activity3').addEventListener('click', startActivity3);
    document.getElementById('backToHome1').addEventListener('click', backToHome);
    document.getElementById('backToHome2').addEventListener('click', backToHome);
    document.getElementById('backToHome3').addEventListener('click', backToHome);
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
    document.getElementById("welcomeText").textContent = `Welcome, ${languageSelected}!`;
}

function exitApp() {
    alert("Exiting app.");
}

function reselectLanguage() {
    languageSelected = "";
    homeScreen.style.display = "none";
    languageSelectionPage.style.display = "block";
}

function startActivity1() {
    homeScreen.style.display = "none";
    activityScreen1.style.display = "block";

    const phrases = [
        "mineral water",
        "a black coffee",
        "tea with lemon",
        "sugar",
        "milk",
        "salt",
        "pepper",
        "A table for two please.",
        "Here is the menu.",
        "Do you want to order?"
    ];

    const translations = {
        "mineral water": { "Italian": "acqua minerale", "Polish": "woda mineralna" },
        "a black coffee": { "Italian": "un caffè nero", "Polish": "czarna kawa" },
        "tea with lemon": { "Italian": "tè con limone", "Polish": "herbata z cytryną" },
        "sugar": { "Italian": "zucchero", "Polish": "cukier" },
        "milk": { "Italian": "latte", "Polish": "mleko" },
        "salt": { "Italian": "sale", "Polish": "sól" },
        "pepper": { "Italian": "pepe", "Polish": "pieprz" },
        "A table for two please.": { "Italian": "Un tavolo per due, per favore.", "Polish": "Stolik dla dwojga proszę." },
        "Here is the menu.": { "Italian": "Ecco il menu.", "Polish": "Oto menu." },
        "Do you want to order?": { "Italian": "Volete ordinare?", "Polish": "Chcesz zamówić?" }
    };

    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    const translation = translations[randomPhrase][languageSelected];

    activityScreen1.innerHTML = `
        <h2>Speak the English phrase</h2>
        <p>Translate the following phrase to English and speak it:</p>
        <p><strong>${translation}</strong></p>
        <p id="displayedPhrase" style="font-size: 24px; font-weight: bold;">${randomPhrase}</p>
        <button id="recordBtn">Record</button>
        <button id="playBtn">Play Recording</button>
        <button id="goBack">Go Back</button>
        <p id="feedback"></p>
        <p>Score: <span id="score">${score}</span></p>
    `;

    document.getElementById('recordBtn').addEventListener('click', function () {
        mic.start();
        recorder.record(soundFile);
        document.getElementById('feedback').textContent = "Recording... Speak now!";
        document.getElementById('feedback').style.color = "blue";
    });

    document.getElementById('playBtn').addEventListener('click', function () {
        recorder.stop();
        mic.stop();
        soundFile.play();
        document.getElementById('feedback').textContent = "Playing your recording...";
        document.getElementById('feedback').style.color = "green";

        score++;
        document.getElementById('score').textContent = score;
    });

    document.getElementById('goBack').addEventListener('click', function () {
        activityScreen1.style.display = "none";
        homeScreen.style.display = "block";
    });
}

function startActivity2() {
    homeScreen.style.display = "none";
    activityScreen2.style.display = "block";
    document.getElementById('activity2Content').innerHTML = ""; 

    const phrases = [
        "mineral water",
        "a black coffee",
        "tea with lemon",
        "sugar",
        "milk",
        "salt",
        "pepper",
        "A table for two please.",
        "Here is the menu.",
        "Do you want to order?"
    ];

    const translations = {
        "mineral water": { "Italian": "acqua minerale", "Polish": "woda mineralna" },
        "a black coffee": { "Italian": "un caffè nero", "Polish": "czarna kawa" },
        "tea with lemon": { "Italian": "tè con limone", "Polish": "herbata z cytryną" },
        "sugar": { "Italian": "zucchero", "Polish": "cukier" },
        "milk": { "Italian": "latte", "Polish": "mleko" },
        "salt": { "Italian": "sale", "Polish": "sól" },
        "pepper": { "Italian": "pepe", "Polish": "pieprz" },
        "A table for two please.": { "Italian": "Un tavolo per due, per favore.", "Polish": "Stolik dla dwojga proszę." },
        "Here is the menu.": { "Italian": "Ecco il menu.", "Polish": "Oto menu." },
        "Do you want to order?": { "Italian": "Volete ordinare?", "Polish": "Chcesz zamówić?" }
    };

    const images = {
        "mineral water": "images/Water.jpg",
        "a black coffee": "images/a black coffee.jpg",
        "tea with lemon": "images/lemon tea.jpg",
        "sugar": "images/sugar.jpg",
        "milk": "images/milk.jpeg",
        "salt": "images/salt.jpg",
        "pepper": "images/pepper.jpg",
        "A table for two please.": "images/table for two.jpeg",
        "Here is the menu.": "images/menu.jpg",
        "Do you want to order?": "images/order.jpg"
    };

    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    const translation = translations[randomPhrase][languageSelected];
    const imageUrl = images[randomPhrase];
    let revealedPhrase = "_".repeat(randomPhrase.length);
    let incorrectGuesses = 0;

    function updateActivityScreen() {
        document.getElementById('revealedPhrase').textContent = revealedPhrase;
    }

    document.getElementById('activity2Content').innerHTML = `
        <h2>Fill in the blank</h2>
        <p>Translate the following phrase to English:</p>
        <p>${translation}</p>
        <img src="${imageUrl}" alt="${randomPhrase}" style="max-width: 100%; height: auto;">
        <p id="revealedPhrase">${revealedPhrase}</p>
        <input type="text" id="userInput" placeholder="Type your answer here">
        <button id="submitAnswer">Submit</button>
        <p id="feedback"></p>
        <p>Score: <span id="score">${score}</span></p>
    `;

    document.getElementById('submitAnswer').addEventListener('click', function () {
        const userInput = document.getElementById('userInput').value.trim();
        const feedback = document.getElementById('feedback');
        if (userInput === randomPhrase) {
            alert("Correct!");
            feedback.textContent = "Correct!";
            feedback.style.color = "green";

            score++;
            document.getElementById('score').textContent = score;

            setTimeout(startActivity2, 500);
        } else {
            alert("Incorrect. Try again.");
            feedback.textContent = `Incorrect. Try again.`;
            feedback.style.color = "red";
            incorrectGuesses++;
            revealLetter();
            updateActivityScreen();
        }
    });

    function revealLetter() {
        let newRevealedPhrase = "";
        for (let i = 0; i < randomPhrase.length; i++) {
            if (revealedPhrase[i] !== "_") {
                newRevealedPhrase += revealedPhrase[i];
            } else if (incorrectGuesses > 0 && randomPhrase[i] !== " ") {
                newRevealedPhrase += randomPhrase[i];
                incorrectGuesses--;
            } else {
                newRevealedPhrase += "_";
            }
        }
        revealedPhrase = newRevealedPhrase;
    }
}

function startActivity3() {
    homeScreen.style.display = "none";
    activityScreen3.style.display = "block";
    document.getElementById('activity3Content').innerHTML = ""; 

    const phrases = [
        "mineral water",
        "a black coffee",
        "tea with lemon",
        "sugar",
        "milk",
        "salt",
        "pepper",
        "A table for two please.",
        "Here is the menu.",
        "Do you want to order?"
    ];

    const images = {
        "mineral water": "images/Water.jpg",
        "a black coffee": "images/a black coffee.jpg",
        "tea with lemon": "images/lemon tea.jpg",
        "sugar": "images/sugar.jpg",
        "milk": "images/milk.jpeg",
        "salt": "images/salt.jpg",
        "pepper": "images/pepper.jpg",
        "A table for two please.": "images/table for two.jpeg",
        "Here is the menu.": "images/menu.jpg",
        "Do you want to order?": "images/order.jpg"
    };
    let currentPhrase = "";
    let startTime;

    function startNewRound() {
        currentPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        const imageUrl = images[currentPhrase];

        document.getElementById('activity3Content').innerHTML = `
            <h2>Match the word to the image</h2>
            <p>Click on the image that matches the word shown below as quickly as possible!</p>
            <p id="displayedWord" style="font-size: 24px; font-weight: bold;">${currentPhrase}</p>
            <div id="imageContainer" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
                ${phrases.map(phrase => `
                    <img src="${images[phrase]}" alt="${phrase}" data-phrase="${phrase}" style="width: 100px; height: 100px; cursor: pointer; border: 2px solid transparent;">
                `).join('')}
            </div>
            <p id="feedback"></p>
            <p>Score: <span id="score">${score}</span></p>
        `;

        startTime = Date.now();

        document.querySelectorAll('#imageContainer img').forEach(img => {
            img.addEventListener('click', function () {
                const selectedPhrase = img.getAttribute('data-phrase');
                const feedback = document.getElementById('feedback');
                if (selectedPhrase === currentPhrase) {
                    const reactionTime = (Date.now() - startTime) / 1000;
                    alert("Correct! Reaction time: " + reactionTime.toFixed(2) + " seconds.");
                    feedback.textContent = `Correct! Reaction time: ${reactionTime.toFixed(2)} seconds.`;
                    feedback.style.color = "green";
                    score++;
                    document.getElementById('score').textContent = score;
                    setTimeout(startNewRound, 500);
                } else {
                    alert("Incorrect. Try again.");
                    feedback.textContent = "Incorrect. Try again!";
                    feedback.style.color = "red";
                }
            });
        });
    }

    startNewRound();

    document.getElementById('backToHome3').addEventListener('click', function () {
        activityScreen3.style.display = "none";
        homeScreen.style.display = "block";
    });
}

function backToHome() {
    activityScreen1.style.display = "none";
    activityScreen2.style.display = "none";
    activityScreen3.style.display = "none";
    homeScreen.style.display = "block";
}

setup();