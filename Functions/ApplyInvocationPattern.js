/* 
 
 Functions can have methods.
 'apply' method lets us contruct an array of args to use to invoke a function (2nd arg)
 It also lets us choose the value of this (1st arg)

*/


function add(val1, val2) {
    return val1+val2;
}



var num_array = [3,4];
var sum = add.apply(null, num_array); // this, array

console.log(sum);

var Quo = function(string) {
    this.status = string;
};

Quo.prototype.get_status = function() {
    return this.status;
};


var statusObject = {
    status : 'Stat!'
}

// We can invole get_status even though it is not bound to statusObject
var status = Quo.prototype.get_status.apply(statusObject)
console.log(status);