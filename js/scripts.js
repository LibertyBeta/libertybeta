document.addEventListener('DOMContentLoaded', function () {


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
