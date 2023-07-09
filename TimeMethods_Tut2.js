//! JavaScript SET {Date Or Time} Methods


//! setDate()
var now = new Date();
var a = now.setDate(20)
console.log(a);


//! setFullYear()
var b = now.setFullYear(2023)
console.log(b);


//! setMonth()
var c = now.setMonth(5)
console.log(c);


//! setHours()
var d = now.setHours(11)
console.log(d);


//! setMinutes()
var e = now.setMinutes(12)
console.log(e);


//! setSeconds()
var f = now.setSeconds(23)
console.log(f);


//! setMilliseconds()
var g = now.setMilliseconds(45)
console.log(g);


//! Print Full Date
var h = (now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear());
console.log(h);