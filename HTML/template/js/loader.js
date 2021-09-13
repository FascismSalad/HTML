// Variable for the number of milliseconds to wait before executing the command.
var loaderTimeout;

function loaderFunction() {
  loaderTimeout = setTimeout(showPage, 1500); // Waits 1.5s before fading out the loading animation.
  loaderTimeout = setTimeout(makeInteractable, 2500); // Once fully faded out, the loading animation is set to become hidden, allowing the user to click through it.
}


// These two functions both add specific classes to the loader, making it fade out and being able to be clicked through, respectively.
function showPage() {
  document.body.classList.add("fadeout");
}

function makeInteractable() {
  document.body.classList.add("loaded")
}