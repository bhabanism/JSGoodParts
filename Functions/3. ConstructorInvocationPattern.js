/* 
    JS is a prototypal inheritance language, objects can inherit properties from other objects

    If a function is involed with the 'new' prefix, then a new object will be created with a 
    hidden link to the value of the function's prototype member, and 'this' will be bound to the new object

    This pattern is bad practice! 

*/ 

var Quo = function(string) {
    this.status = string;
};

Quo.prototype.get_status = function() {
    return this.status;
};

// new instance of Quo
var MYQUO = new Quo("confused"); // constructor, ALL CAPS NAME

console.log(MYQUO.get_status());
