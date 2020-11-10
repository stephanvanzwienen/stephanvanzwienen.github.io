//tooltip for mail button
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

//copy mail adress to clipboard
function copyMailToClipboard(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    $('[data-toggle="tooltip"]')
      .attr("data-original-title", "Copied mail adress: " + value)
      .tooltip("show");
  }
  document.querySelector("#Copy").onclick = function () {
    copyMailToClipboard("stephanvanzwienen@gmail.com");
  };
  document.querySelector("#Copy").onmouseout = function () {
    $('[data-toggle="tooltip"]')
      .tooltip("hide")
      .attr("data-original-title", "Copy mail adress")
      .tooltip("show");
  };