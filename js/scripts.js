document.addEventListener('DOMContentLoaded', function () {
  var waterfallDisplay = document.getElementsByClassName('waterfall')[0];
  var totalWaterfallHieght = waterfallDisplay.clientHeight;
  var nav = document.getElementsByTagName('nav')[0];
  var shadowMoment = totalWaterfallHieght * 0.75;
  if(waterfallDisplay.getBoundingClientRect.bottom <= 0 ){
    nav.classList.add("active");
  }


  window.onscroll = function waterfallHandler(){
    console.log("checking the height of the display for visibility");
    console.log(waterfallDisplay.getBoundingClientRect().bottom);
    console.log(shadowMoment);
    if(waterfallDisplay.getBoundingClientRect().bottom <= 0 ){
      nav.classList.add("active");
      console.log("Waterfall is off screen");
      return true;
    }
    // console.log(waterfallDisplay.bottom);
    if(waterfallDisplay.getBoundingClientRect().bottom < shadowMoment){
      nav.classList.add("active");
    } else {
      if( nav.classList.contains("active") ) {
        nav.classList.remove("active");
      }
    }
  };

});
