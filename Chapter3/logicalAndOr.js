var name = "";
var fullname = "";
if (name.length == 0) {
  fullname = "Mahbub Alam";
} else {
  fullname = name;
}

var name = "Tonmoy";
var fullname = name || "Mahbub Alam";
console.log(fullname);

var name = "";
var fullname = name || "Mahbub Alam";
console.log(fullname);

var isOk = true;
if (isOk) {
  console.log("everything is ok");
}

var isOk = true;

isOk && console.log("Everything is OK");
var isOk = false;

isOk && console.log("Everything is OK");
