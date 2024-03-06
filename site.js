function dynamicWelcome() {
    const hours = new Date().getHours() // get the current hour

    const isMorning = hours >= 4 && hours < 12 // is it morning?
    const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
    const isEvening = hours >= 17 || hours < 4 // is it evening?

    const message = document.querySelector("#welcome > p")
    if (isMorning == true) {
        message.textContent = "Good Morning! Welcome you to my website!"
    }
    else if (isAfternoon == true) {
        message.textContent = "Good Afternoon! Welcome you to my website!"
    }
    else if (isEvening == true) {
        message.textContent = "Good Evening! Welcome you to my website!"
    }
}

dynamicWelcome()

// Assignment 4 Code... That doesn't WORK

/*
const mySecretMessage = "If you are reading this, you should totally subscribe to UTF on youtube.com!";
// Not affiliated

// Store the mySecretMessage in local storage under the key "secretMessage"
localStorage.setItem("secretMessage", mySecretMessage);

// Check if the value is stored successfully
var storedMessage = localStorage.getItem("secretMessage");
console.log("Secret message stored:", storedMessage);

// Event listener for the form submission
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from actually submitting

    // Get the input value
    const inputValue = document.getElementById('textInput').value;

    // Check if the input value matches the key phrase
    if (inputValue === 'It\'s a secret to everybody.') {
        // If it matches, replace the content of the secret message p element
        const secretMessage = localStorage.getItem("secretMessage");
        document.getElementById('secretMessage').textContent = secretMessage;
    } else {
        // If it doesn't match, you can handle it accordingly
        alert('Didn\'t seem to do anything.. Maybe try again?');
    }
});
*/

// Assignment 4 Code again
localStorage.setItem("It's a secret to everybody.", "If you are reading this, you should totally subscribe to UTF on youtube.com!");
// STILL Not affiliated
// ...Is this really all I had to do??
