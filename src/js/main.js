var score = 0; // Define global variable to hold score

function init() {
  var cookie = document.getElementsByClassName('naan')[0].getElementsByTagName('img')[0]; // Get the img element
  var score_div = document.getElementsByClassName('score')[0];
  score_div.innerHTML = score_div.innerHTML + score;

  cookie.addEventListener('click', function() { // This function will run on click!
    score = score + 1; // Increment the score by one
    var score_div = document.getElementsByClassName('score')[0];
    score_div.innerHTML = 'Score: ' + score; // Update the score in the DOM
  })
}

var music = document.getElementById('mySound');

// Music
function PlaySound() {
  music.play();
}

function StopSound() {
  music.pause();
  music.currentTime = 0;
}

init(); // Call the init functions