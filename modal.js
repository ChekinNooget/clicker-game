// Get the modal
var modal = document.getElementById("myModal");
var settingsModal = document.getElementById("settingsModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var settingsBtn = document.getElementById("settingsBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
//var settingsSpan = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal settingsBtn
btn.onclick = function () {
  modal.style.display = "block";
};
settingsBtn.onclick = function () {
  settingsModal.style.display = "block";
}; //close button modal broekn

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
span.onclick = function () {
  settingsModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == settingsModal) {
    settingsModal.style.display = "none";
  }
};
