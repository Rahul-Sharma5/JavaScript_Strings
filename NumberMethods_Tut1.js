//! JavaScript Number Methods
// number()
// parseInt()
// parseFloat()
// isFinite()
// isInteger()
// toFixed(x)
// toPrecision(x)


//! number()
var a = "99.10"; // true or false
var b = Number(a);
console.log(b);


//! parseInt()

var c = parseInt(a);
console.log(c);


//! parseFloat()
var d = parseFloat(a);
console.log(d);

//! isFinite()
var e = "Hello"; // "Hello" outPut False
var f = isFinite(e);
console.log(f);


//! isInteger()
var g = 100
var h = Number.isInteger(g);
console.log(h);


//! toFixed(x)
var i = 5.6569;
var j = i.toFixed(2);
console.log(j);

//! toPrecision(x)
var k = i.toPrecision(2);
console.log(k);