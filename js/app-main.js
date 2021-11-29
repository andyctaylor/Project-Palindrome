// Pseudo code
// --------------------------------------------------
// 1. Get the user input from the string they provide.
// 2. Loop through the string
// 3. make sure that only strings can be used and remove any space from the inpt 
// 4. If the string is a Palindrome then print a congrats message to the sceen. 
// 5. Else print a fail message Palindrome to the screen
// --------------------------------------------------

// Get the user input from the string they provide.
// controller function 
function getValue() {

    // Geting the user input from the string they provide.
    let userString = document.getElementById('user-string').value;

    // Get the value of the user's revirsed string
    let palindromeString = checkPalindrone(userString);

    // Display to the screen. 
    displayMessage(palindromeString);
}

function checkPalindrone(userString) {

    // Clean up all of the spaces and special characters in the user input. 
    let cleanRev = userString.replace(/\s/g, "");
    // Reverse the user input
    let reversed = cleanRev.split("").reverse().join("");
    // Empty string to save the output message 
    let palindromeString = "";

    // The conditional statement to test the user input  
    if (userString == reversed) {
        palindromeString = `Yay you did it, Your word: ${reversed} is a Palindrome`;
    } else {
        palindromeString = `Aww sorry your word: ${cleanRev} is not a Palindrome`;
    }
    // return the output message
    return palindromeString;
}

// Display the string in the alert on the page
// View function 
function displayMessage(palindromeString, revString) {

    // Get the string message element 
    const stringMessage = document.getElementById('resultString');

    // Write to the page 
    stringMessage.innerText = palindromeString;

    // Make the String Message area visable
    stringResults.classList.remove('invisible');
}

// Sellect the the Palindrome? bution and run the program. 
const submitBtn = document.getElementById('btn-submit');

// on lcick the Palindrome? button will run he program
submitBtn.addEventListener('click', function () {
    getValue();
})