//download resume
document.querySelector("#downloadlink").onclick = function () {
  window.open("./documents/CV Stephan van Zwienen.pdf", "_blank");
};

//include all project carousels
includeHTML();
jQuery(window).load(function () {
  //Stop carousel
  $(".carousel").carousel("pause");
});


