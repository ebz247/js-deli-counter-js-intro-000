function takeANumber(currentPeople, person){
  var arrayLength = currentPeople.length;
  var personPosition = 1 + currentPeople.indexOf(person);

  if(currentPeople.length < 1) {
    currentPeople[0] = person;
  } else {
    currentPeople.push(person);
  }


  return `Welcome, ${person}. You are number ${personPosition} in line.`;
}

function nowServing(currentPeople) {
  if(currentPeople.length < 1) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + currentPeople[0];
    currentPeople.shift(currentPeople[0]);
  }
}
