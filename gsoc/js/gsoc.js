function gsocFadeIn(element, marginDifference, magnify, timeForEvent) {
  var gsocMarginTop = $(element).css("marginTop").replace('px', '');
  var gsocHeight = $(element).css("height").replace('px', '');
  $(element).css("marginTop", (gsocMarginTop - marginDifference) + "px")
  $(element).css("height", (gsocHeight * magnify) + "px");

  $(element).animate({
    marginTop: gsocMarginTop + "px",
    height: gsocHeight + "px",
    opacity: "toggle"
  }, timeForEvent, "swing", function() {
    $(this).css("marginTop", "")
    $(this).css("height", "");

  });
}

function getInternetExplorerVersion() {
  var rv = -1; // Return value assumes failure.
  if (navigator.appName == 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null)
      rv = parseFloat(RegExp.$1);
  }
  return rv;
}

document.addEventListener("DOMContentLoaded", function() {
  if (typeof jQuery === 'undefined') {
    // jQuery is NOT available
    document.getElementById("gsoc-google-logo").style.display = "block";
    console.log("somehow the config is weird");
  } else {
    // jQuery is available
  }

  var pedestal = 1;
  $('#gsoc-flipbox').hover(
    function() {
      if (blocking === 0) {
        blocking = 1;
        if (pedestal === 1) {
          $(this).stop().rotate3Di('flip', 250, {
            direction: 'clockwise',
            sideChange: mySideChange,
            complete: unblocker
          });
        } else {
          $(this).stop().rotate3Di('unflip', 250, {
            direction: 'clockwise',
            sideChange: mySideChange,
            complete: unblocker
          });
        }
      }
    },
    function() {
      if (blocking === 0) {
        blocking = 1;
        if (pedestal === 1) {
          $(this).stop().rotate3Di('flip', 250, {
            direction: 'clockwise',
            sideChange: mySideChange,
            complete: unblocker
          });
        } else {
          $(this).stop().rotate3Di('unflip', 250, {
            direction: 'clockwise',
            sideChange: mySideChange,
            complete: unblocker
          });
        }
      }
    }
  );


  function mySideChange() {
    if (pedestal == 0) {
      $(this).parent().find('div.front').show();
      $(this).parent().find('div.back').hide();
      pedestal = 1;
    } else {
      $(this).parent().find('div.front').hide();
      $(this).parent().find('div.back').show();
      pedestal = 0;
    }
  }



  function unblocker() {
    setTimeout(function() {
      blocking = 0
    }, 300);
  }



  // everybody hates you!
  ieversion = getInternetExplorerVersion();
  if (ieversion > 0 && ieversion < 9) {

    var gsocImages = ["gsoc-google-logo", "gsoc-orange-flag", "gsoc-red-flag", "gsoc-blue-flag"];
    for (index = 0; index < gsocImages.length; ++index) {
      $("#" + gsocImages[index]).css("paddingTop", "7px");
    }

  }

  // auto animate
  setTimeout(function() {
    gsocFadeIn("#gsoc-google-logo", 10, 1.4, 300);
  }, 800);

  setTimeout(function() {
    gsocFadeIn("#gsoc-blue-flag", 10, 1.3, 300);
  }, 1300);


  setTimeout(function() {
    gsocFadeIn("#gsoc-red-flag", 10, 1.5, 300);
  }, 1800);

  setTimeout(function() {
    gsocFadeIn("#gsoc-orange-flag", 10, 1.3, 300);
  }, 2300);

  setTimeout(function() {
    gsocFadeIn("#gsoc-flipbox", 10, 1.3, 300);
  }, 2800);

  var blocking = 0;
});
