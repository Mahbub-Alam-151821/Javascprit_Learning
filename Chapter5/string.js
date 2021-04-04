// Chapter Five
// String in Javascript

// What is String?

// var str = "something"; //(string literal)
// var str2 = string("something"); //(string constrictor)

// var n = 10;
// var str = String(n);
// console.log(str);

// **** Escape Notation

// var str = "This is a 'String'";
// var str = "This is a 'String'";
// var str = "This is a \nString";
// var str = "This is a \tString";
// var str = "This is a \\String";
// console.log(str);

// ***** String Comparison ****** //

// var a = "aaaaaaZ";
// var b = "aaaaaaz";

// console.log(a > b);

// console.log("a" > "Z");

// console.log("001" == 1);

// var a = "I am";
// var b = "Mahbub Alam";

// var c = a.concat(" ", b);
// var d = c.substr(5, 4);
// console.log(d);
// console.log(c.charAt(0))
// console.log(c.startsWith("I am"));
// console.log(c.endsWith("Nay6556"));
// console.log(a.toUpperCase());
// console.log(b.toLowerCase());
// console.log("     fsdsfsddsf     ".trim());
// console.log(c.split(" "));

var str = "HM Nayem";

var length = 0;

while (true) {
  if (str.charAt(length) == "") {
    break;
  } else {
    length++;
  }
}

console.log(length);
console.log(str.length);
console.log("somnetyhinfdssdfdsfdsfdsaf".length);
