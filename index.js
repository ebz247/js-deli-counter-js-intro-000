function takeANumber(katzDeliLine, person){
  katzDeliLine.push(person);
  var arrayLength = katzDeliLine.length;
  var personPosition = 1 + katzDeliLine.indexOf(person);

  if(katzDeliLine.length < 1) {
    katzDeliLine[0] = person;
  } else {
    katzDeliLine.push(person);
  }


  return `Welcome, ${person}. You are number ${personPosition} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeliLine[0];
    katzDeliLine.shift(katzDeliLine[0]);
  }
}
