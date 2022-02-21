var modal = document.getElementById("myModal");
  
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

  
/* Get the modal microphone*/

  
  var microphone = document.getElementById("microphone-Modal");
  
  var myBtn = document.getElementById("bot");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName( "multiplied")[0];
  
  // When the user clicks the button, open the modal 
  myBtn.onclick = function() {
    microphone.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
   microphone.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == microphone) {
      microphone.style.display = "none";
    }
  }
  
  

