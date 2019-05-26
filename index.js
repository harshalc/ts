var a = 5;
var b = "1";
var isDone = false;
console.log(a);
console.log(isDone);
var list = [1, 2, 3];
console.log(list);
var stringList = ["a", "b", "c"];
console.log(stringList);
var boolArray = [true, false, true];
console.log(boolArray);
var x;
// Initialize it
x = ["hello", 10];
console.log(x);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Bhue"] = 2] = "Bhue";
})(Color || (Color = {}));
console.log(Color.Red);
console.log(Color);
console.log("--------------------------");
var Months;
(function (Months) {
    Months[Months["Jan"] = 30] = "Jan";
    Months[Months["Feb"] = 31] = "Feb";
    Months[Months["March"] = 30] = "March";
    Months[Months["April"] = 31] = "April";
    Months[Months["May"] = 30] = "May";
})(Months || (Months = {}));
;
console.log(Months);
var someValue = 1;
var strlength = someValue.length;
console.log(strlength);
