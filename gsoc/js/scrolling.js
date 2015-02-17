var links = ["conserved-patterns", "team", "meet-the-mentors", "how-to-apply", "biojs-integration", "bam-file-viewer",
  "phylogenetic-tree", "msa-viewer", "project-ideas", "taxononmy-viewer", "human-genetic-viewer", "your-idea"
];

function scrollToElement(selector, time, verticalOffset) {
  time = typeof(time) != 'undefined' ? time : 1000;
  verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
  element = $(selector);

  offset = element.offset();
  offsetTop = offset.top + verticalOffset;
  $('html, body').animate({
    scrollTop: offsetTop
  }, time);
}

function scrollToElementWrapper(event) {
  event.preventDefault();
  scrollToElement(event.data.name);
}

document.addEventListener("DOMContentLoaded", function() {
  for (index = 0; index < links.length; ++index) {
    $("#link-" + links[index]).on('click', {
      name: "#" + links[index]
    }, scrollToElementWrapper);
  }
});
