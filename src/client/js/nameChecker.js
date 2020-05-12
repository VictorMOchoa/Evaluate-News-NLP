const urlRegexQuery = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
let verifyURL = (userInput)  => {
  if (userInput.match(urlRegexQuery)) {
    return true;
  } else {
    alert("Please enter a valid URL");
    return false;
  }
}

export { verifyURL }
