function scrollToElement(selector, time, verticalOffset) {
  time = typeof(time) != 'undefined' ? time : 1000;
  verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
  element = $(selector);

  console.log(element);

  var offset = element.offset();
  var offsetTop = offset.top + verticalOffset;
  $('html, body').animate({
    scrollTop: offsetTop
  }, time);
}

function scrollToElementWrapper(event) {
  scrollToElement(event.data.el);
  event.preventDefault();
  event.stopPropagation();
  return false;
}

document.addEventListener("DOMContentLoaded", function() {
  $("#apply-right-sidebar").children().filter("ul").first().find("li").each(function(i, e) {
    var el = $(e);
    el.on('click', {
      el: el.find("a").attr("href")
    }, scrollToElementWrapper);
  });
});
