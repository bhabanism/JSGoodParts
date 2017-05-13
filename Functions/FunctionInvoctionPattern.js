/* 

Function is not a property of an object but bound to global object


Note : Inner functions don't share method's the access to the object
Workaround is to assign a variable in the outer method to 'this', convention is to name the variable as 'that'

*/ 

// function bound to global object
function add(val1, val2) {
    return val1+val2;
}

var sum = add(3,4);  // function invocation pattern
console.log(sum);


var myObject = {
    value : 3,
    getValue : function() {
        return this.value;
    }
};


myObject.double = function() {
    var that = this; //workaround to give access to inner function

    var helper = function() { //inner function
        that.value = add(that.value, that.value);
    }

    helper(); // function invocation pattern
}

myObject.double();
console.log(myObject.getValue());