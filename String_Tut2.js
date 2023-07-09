//! Includes() Methods In JavaScript
//! to search a words in string methods. it is a case sensitive

var str = "JavaScript is a Great Language for Students for";
var a = str.includes("Great");
console.log(a);


//! StartsWith() Methods

var b = str.startsWith("JavaScript");
console.log(b);


//! endsWith() Methods
var c = str.endsWith("Language");
console.log(c);

//! Search() Methods to finds index in string
var d = str.search("Great");
console.log(d);

//! Match() Methods to finds char or words in strings

var e = str.match(/for/g);
console.log(e);