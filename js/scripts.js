var credits = [
  "Hello",
  "Welcome.",
  "These are the Credits.",
  "To Exit, Click anywhere.",
  "First, I would like to thank the fine folks over at MaterializeCSS.",
  "They were a massive help.",
  "Also, a thank you to the a100 for making me add this feature.",
  "Its totally awesome and neat.",
  "And thank you to my wife for putting up with me.",
  "And the Dogs. They are WAY better for debugging than ducks."
];
var timeouts = [];
var line = 0;
var creditsContent;
var creditDiv;

document.addEventListener('DOMContentLoaded', function () {

  creditsContent = document.getElementById('credits-message');
  creditDiv = document.getElementById('credits');
  creditDiv.onclick = killCredits;

  var waterfallDisplay = document.getElementsByClassName('waterfall')[0];
  var totalWaterfallHieght = waterfallDisplay.clientHeight;
  var nav = document.getElementsByTagName('nav')[0];
  var shadowMoment = totalWaterfallHieght * 0.90;

  if(waterfallDisplay.getBoundingClientRect.bottom <= 0 ){
    nav.classList.add("active");
  }

  window.onscroll = function waterfallHandler(){
    if(waterfallDisplay.getBoundingClientRect().bottom <= 0 ){
      nav.classList.add("active");
      return true;
    }
    if(waterfallDisplay.getBoundingClientRect().bottom < shadowMoment){
      nav.classList.add("active");
    } else {
      if( nav.classList.contains("active") ) {
        nav.classList.remove("active");
      }
    }
  };

});

function typeParagraph(symbols){
  var timeoutElement = setTimeout(function (symbols) {
      creditsContent.innerHTML = creditsContent.innerHTML + symbols.shift();
      if(symbols.length > 0 && creditDiv.classList.contains("hidden") === false){
        typeParagraph(symbols);
      } else {
        typeLine();
        return true;
      }
  }, 90, symbols);
  timeouts.push(timeoutElement);
};

function typeLine() {
  var timerId = setTimeout(function () {
    line++;
    if(credits.length >= line && creditDiv.classList.contains("hidden") === false){
      creditsContent.innerHTML = creditsContent.innerHTML + '<br/>';
      typeParagraph(credits[line].split(''));;
    } else {
      line = 0;
      return true;
    }
  }, 600);
  timeouts.push(timerId);
};

function playCredits() {
  line = 0;
  creditsContent.innerHTML = '';
  creditDiv.classList.remove("hidden");
  typeLine();
};

function killCredits() {
  creditDiv.classList.add("hidden");
  do {
    window.clearTimeout(timeouts.shift());
  } while (timeouts.length != 0);
};
