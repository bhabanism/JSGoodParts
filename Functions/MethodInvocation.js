/*

When a function is stored as a property of an object, we call it method.
Invocation is bound to that object.

*/

var myObject = {
    value : 0,
    increment : function(inc) { //method
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

myObject.increment(); //method invocation pattern
console.log(myObject.value);

myObject.increment(2);
console.log(myObject.value);