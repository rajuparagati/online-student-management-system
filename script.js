document.getElementById("studentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let roll = document.getElementById("roll").value;
  let course = document.getElementById("course").value;

  let table = document.getElementById("studentTable");
  let row = table.insertRow();

  row.insertCell(0).innerText = name;
  row.insertCell(1).innerText = roll;
  row.insertCell(2).innerText = course;

  document.getElementById("studentForm").reset();
});
