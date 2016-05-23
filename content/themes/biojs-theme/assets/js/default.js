(function(){
  $(document).ready(function(){
    $(".button-collapse").sideNav();
    $('.carousel').carousel();
    $('.parallax').parallax();
    $('.slider').slider({
      full_width: true,
      indicators: false,
      interval: 1500
    });
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });
})();