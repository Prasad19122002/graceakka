// Get slide and canvas elements
let firstSlideContainer = document.getElementsByClassName("slide--content")[0];
let secondSlideContainer = document.getElementsByClassName("slide--content--one")[0];
let secondCanvas = document.getElementsByClassName("second--canvas")[0];
let thirdCanvas = document.getElementsByClassName("third--canvas")[0];

// Create and configure the audio element
let audio = document.getElementById('background-audio');
audio.src = 'src/images/s1.mp3'; // Specify the path to your audio file
audio.loop = true; // Ensure the audio loops
audio.autoplay = true; // Start playing the audio automatically

// Initially hide second slide and canvases
secondSlideContainer.setAttribute("style", "display:none");
secondCanvas.setAttribute("style", "display:none");
thirdCanvas.setAttribute("style", "display:none");

// Show second slide after 2.5 seconds
let containerToggleOne = setTimeout(function() {
  firstSlideContainer.setAttribute("style", "display:none");
  secondSlideContainer.setAttribute("style", "display:block");
}, 2500);

// Remove first slide and show second canvas after 6.5 seconds
let removeFirstSlide = setTimeout(function() {
  document.getElementsByClassName("first--slide")[0].setAttribute("style", "display:none;");
  secondCanvas.setAttribute("style", "display:block");
}, 6500);

// Remove second canvas and show third canvas after 9.8 seconds
let removeSecondCanvas = setTimeout(function() {
  secondCanvas.setAttribute("style", "display:none");
  thirdCanvas.setAttribute("style", "display:block");
}, 9800);
