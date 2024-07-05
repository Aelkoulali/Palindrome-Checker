// Get Element By Id
const textInput = document.getElementById('text-ipnut');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

//Function Alert
checkButton.addEventListener("click",() => {
  const replaced = textInput.value.replace(/[^A-Za-z0-9]/g,"")
  if (textInput.value === ""){
    alert("Please input a value")
  } else if (textInput.value.length === 1){
    result.innerText = `${textInput.value} is a palindrome`
 }  else if (replaced === [...replaced].reverse().join("")){
    result.innerText = `${textInput.value} is a palindrome`
 }
});