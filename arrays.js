var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']; 

function addElementToBeginningOfArray(array, element) {
<<<<<<< HEAD
  var newArray = [element, ...array];
  return newArray;  
=======
  var x = array.unshift(element);
  return x 
>>>>>>> bbcc781ed07041070d76908d56e40a2de51c730e
}
  
function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element); 
    return array;  
}

function addElementToEndOfArray(array, element) {
<<<<<<< HEAD
  var newArray = [...array, element];
  return newArray; 
=======
  var x = array.push(element);
  return x; 
>>>>>>> bbcc781ed07041070d76908d56e40a2de51c730e
}

function destructivelyAddElementToEndOfArray(array, element) {
 array.push(element); 
 return array;  
}

function accessElementInArray(array, index) {
<<<<<<< HEAD
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(array[0]); 
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array; 
}

function removeElementFromEndOfArray(array) {
  var newArray = array.slice(0, array.length - 1);
  return newArray; 
}
=======
  
}

function removeElementFromEndOfArray(array) {
  
}

>>>>>>> bbcc781ed07041070d76908d56e40a2de51c730e
