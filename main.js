function renderLaTeX() {
  var input = document.getElementById("latexInput").value;
  var output = document.getElementById("output");
  try {
    // Default display mode to true
    var displayMode = true;

    // Check if input is wrapped with $
    if (
      input.startsWith("$") &&
      input.endsWith("$") &&
      !(input.startsWith("$$") && input.endsWith("$$"))
    ) {
      displayMode = false;
      input = input.slice(1, -1); // Remove the $ delimiters
    } else if (input.startsWith("$$") && input.endsWith("$$")) {
      input = input.slice(2, -2); // Remove the $$ delimiters
    }

    katex.render(input, output, {
      throwOnError: false,
      displayMode: displayMode,
    });
  } catch (e) {
    output.textContent = e.message;
  }
}

document.getElementById("latexInput").addEventListener("input", renderLaTeX);

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
