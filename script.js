// Get Element By Id
const textInput = document.getElementById('text-ipnut');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

//Function Alert
checkButton.addEventListener("click",() => {
  if (textInput.value === ""){
    alert("Please input a value")
  } else if (textInput.value.length === 1){
    result.innerText = `${textInput.value} is a palindrome`
 }  else if (textInput.value.length === [...textInput.value].reverse().join("")){
    result.innerText = `${textInput.value} is a palindrome`
 }
});