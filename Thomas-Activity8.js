let names = ["Tom", "Lily", "Jose", "Sarah"];
let height = [65, 60, 72, 68];

let $ = function (id) {
  return document.querySelector("#" + id);
};

document.addEventListener("DOMContentLoaded", function () {
  $("name").focus();
  $("show_results").addEventListener("click", showResults);
  $("add").addEventListener("click", addHeight);
  $("display_height").addEventListener("click", displayHeight);
});

function showResults() {
  let average = height.reduce((a, b) => a + b, 0) / height.length;
  let maxHeight = Math.max(...height);
  let name = names[height.indexOf(maxHeight)];
  $(
    "result"
  ).innerHTML = `<h2>Results</h2><p>Average Height = ${average}</p><p>Highest height = ${name} with a height of ${maxHeight}</p>`;
}

function addHeight() {
  const newName = $("name").value;
  const newHeight = parseInt($("height").value);
  if (isNaN(newHeight) || newHeight < 0 || newHeight > 100)
    alert("you must enter a name and a valid height");
  else {
    names.push(newName);
    height.push(newHeight);
    $("name").focus();
  }
}

function displayHeight() {
  let tableData = "<tr><th>Name</th><th>Heights</th></tr>";
  for (let i = 0; i < names.length; i++) {
    tableData += `<tr><td>${names[i]}</td><td>${height[i]}</td></tr>`;
  }
  $("height_table").innerHTML = tableData;
}
