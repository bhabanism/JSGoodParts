/*
    Throwing and Handling Exception in JS
*/

var add = function(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name : 'TypeError',
            message : 'add needs numbers'
        }
    }
    return a + b;
};

//console.log(add(1, 2))

var test_add = function() {
    try {
        console.log(add("one", "two"))
    } catch(e) {
        console.log(e.name + " : " + e.message)
    }
}; 

test_add();
