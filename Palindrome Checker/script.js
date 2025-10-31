document.getElementById("checkBtn").addEventListener("click", () => {
  const userInput = document.getElementById("textInput").value;
  console.log(userInput, userInput.length);

  const reverse = userInput.split("").reverse().join("");
  console.log(reverse);

  if (userInput === reverse) {
    document.getElementById("result").innerHTML = `${userInput} is a Palindrome`;
    }
    else{
      document.getElementById("result").innerHTML = `${userInput} is not Palindrome`;
    }
});
