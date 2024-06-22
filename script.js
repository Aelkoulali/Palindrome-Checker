// Get Element By Id
const userInput = document.getElementById('text-ipnut');
const checkButton = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

//Function to check for palindrome

const checkForPalindrome = input => {
    const originalInput = input; // Store for later output
  
    if (input === '') {
      alert('Please input a value');
      return;
    }
    }