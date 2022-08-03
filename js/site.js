// Get String Value From The Page
function getStringValue() {
  document.getElementById("alert").classList.add("invisible");
  let userString = document.getElementById("userString").value;
  let revString = reverseString(userString);
  displayString(revString);
}

// Reverse The String
function reverseString(userString) {
  let revString = [];
  // Reverse A String Using A For Loop
  for (let i = userString.length - 1; i >= 0; i--) {
    revString += userString[i];
  }
  return revString;
}

// Display Message With Reverse String To The User
function displayString(revString) {
    // write to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;
    // show alert box
    document.getElementById("alert").classList.remove("invisible");
}