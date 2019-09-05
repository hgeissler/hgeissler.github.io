var smallMe = document.getElementById('smallMe');
var hiddenContainer = document.getElementById('hiddenContainer');
var captionText = document.getElementById('caption');

smallMe.onclick = function() {
  hiddenContainer.style.display = "block";
  captionText.innerHTML = this.alt;
}

var spanClose = document.getElementById("close");
spanClose.onclick = function() {
  hiddenContainer.style.display = "none";
}

var footerText = document.getElementById('footerText');
var footerButton = document.querySelector('#footerButton');
footerButton.onmouseover = function() {
  footerText.style.fontSize = "1.2em"
}
footerButton.onmouseout = function() {
  footerText.style.fontSize = "1.1em"
}
