var credits = [
  "Hello",
  "Welcome.",
  "These are the Credits.",
  "To Exit, Click anywhere.",
  "First, I would like to thank the fine folks over at MaterializsCSS.",
  "They were a massive help.",
  "Also, a thank you to the a100 for making me add this feature.",
  "Its totally awesome and neat."
];
var timeouts = [];
var line = 0;
var sample = "This is a test statement";
var sampleWords = sample.split('');
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

  function animateString(string, target){
    var words = string.split(' ');

    setTimeout(function () {

        typeWord();
    }, 1000);
    for (var word in words) {
      if (object.hasOwnProperty(word)) {
        var characters = word.split('');

      }
    }
  };



});


function typeParagraph(symbols){

  var timeoutElement = setTimeout(function (symbols) {
      // typeWord(symbols[0].splice(''));
      // console.log("Symbols being types are"  + symbols[0])
      creditsContent.innerHTML = creditsContent.innerHTML + symbols[0];
      // console.log(timeouts);
      console.log(symbols[0]);
      symbols.shift();
      if(symbols.length > 0){
        // console.log("symbols longer!");
        typeParagraph(symbols);
      } else {
        typeLine();
        return true;
      }
  }, 100, symbols);
  timeouts.push(timeoutElement);
};

function typeLine() {
  var timerId = setTimeout(function () {
    console.log("Line to type is " + credits[line]);
    line++;
    if(credits.length >= line){
      creditsContent.innerHTML = creditsContent.innerHTML + '<br/>';
      typeParagraph(credits[line].split(''));;
    } else {
      line = 0;
      return true;
    }

  }, 500);
  timeouts.push(timerId);
};

function playCredits() {
  creditsContent.innerHTML = '';
  creditDiv.classList.remove("hidden");
  typeLine();
}

function killCredits() {
  console.log("killing credits");
  creditDiv.classList.add("hidden");
  console.log(timeouts);
  for (var timer in timeouts) {
    console.log(timer);
    window.clearTimeout(timer);
  }
}
