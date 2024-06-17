document.getElementById("latexInput").addEventListener("input", function () {
  var input = this.value;
  var output = document.getElementById("output");
  try {
    katex.render(input, output, {
      throwOnError: false,
    });
  } catch (e) {
    output.textContent = e.message;
  }
});

document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    var output = document.getElementById("output");
    html2canvas(output).then((canvas) => {
      var link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "latex_output.png";
      link.click();
    });
  });
