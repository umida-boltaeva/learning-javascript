function sayThanks(name) {
  console.log(
    "Thank you for your purchase " + name + "! We appreciate your business."
  );
}

sayThanks("Cole");

function monitorCount(rows, columns) {
  return rows * columns;
}
var numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);