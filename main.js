var smallMe = document.getElementById('smallMe');
var hiddenContainer = document.getElementById('hiddenContainer');

smallMe.onclick = function() {
  hiddenContainer.style.display = "block";
}

var spanClose = document.getElementById("close");
spanClose.onclick = function() {
  hiddenContainer.style.display = "none";
}

var footerText = document.getElementById('footerText');
var footerButton = document.querySelector('#footerButton');
footerButton.onmouseover = function() {
  footerText.style.fontSize = "1em";
}
footerButton.onmouseout = function() {
  footerText.style.fontSize = "0.9em";
}

window.onload = function(){
  document.onclick = function(e){
    if(e.target.id !== 'smallMe') {
        hiddenContainer.style.display = 'none';
    }
  };
};

function toggleLinks() {
  let navlinks = document.querySelector('.navlinks');
  navlinks.classList.toggle('navlinksToggleShow');
}

document.querySelector('#burgerMenu')
  .addEventListener('click', toggleLinks);
