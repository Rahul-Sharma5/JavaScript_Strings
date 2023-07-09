//! concat() mergeing to sentances

var str = "JavaScript is a Great Language";
var str2 = "Hello";
var str3 = "Java";
var a = str.concat(" " + str2 + "," + str3);
console.log(a);

//! split() Methods means break

var b = str.split(" ");
console.log(b);

//! repeat() Methods
var c = str.repeat(2);
console.log(c);

//! slice() Methods
var d = str.slice(4,10);
console.log(d);

//! substr() Methods
var e = str.substr(0,4);
console.log(e);

//! subString()
var f = str.substring(3,5)
console.log(f);

//! toString()
var g = 50;
var h = g.toString();
console.log(h + 20);

//! valueOf()
var i = str.valueOf();
console.log(i);