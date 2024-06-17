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
