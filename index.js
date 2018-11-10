function takeANumber(addToArray, person){
  addToArray.push(person);
  var arrayLength = addToArray.length;
  var personPosition = 1 + addToArray.indexOf(person);
  return `Welcome, ${person}. You are number ${personPosition} in line.`;
}

function nowServing(addToArray) {
  if(addToArray.length < 1) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + addToArray[0];
    addToArray.shift(addToArray[0]);
  }
}
