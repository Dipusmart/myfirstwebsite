// Add Numbers
function addNumbers() {

    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;

    first = Number(first);
    second = Number(second);

    let result = first + second;

    document.getElementById("result").value = result;
}


// Add Strings
function addStrings() {

    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;

    let result = first + second;

    document.getElementById("result").value = result;
}


// Add Integers
function addIntegers() {

    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;

    first = parseInt(first);
    second = parseInt(second);

    let result = first + second;

    document.getElementById("result").value = result;
}