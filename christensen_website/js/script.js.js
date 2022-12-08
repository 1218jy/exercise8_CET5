function validateContact() 
  var contactNameInput = document.getElementById("name").value;

  if (contactNameInput.trim() === "") {
    alert("Whoops! You didn’t enter a name!");
    return false;
  }

  return true;
}