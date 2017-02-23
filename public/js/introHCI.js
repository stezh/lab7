'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

  var likebutton = document.getElementsByClassName("likeBtn")

  for (var i = 0; i < likebutton.length; i++) {
	   likebutton[i].addEventListener("click", handleClick);
  }
}

function handleClick() {
  ga('send', 'event', 'like', 'click')
}
