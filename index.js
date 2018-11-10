function takeANumber(currentLine, person){
  currentLine.push(person);
  var arrayLength = currentLine.length;
  var personPosition = 1 + currentLine.indexOf(person);
  return `Welcome, ${person}. You are number ${personPosition} in line.`;
}

function nowServing(currentLine) {
  if(currentLine.length < 1) {
    return "There is nobody waiting to be served!"
  } else {
    console.log "Currently serving " + currentLine[0] + ".";
    currentLine.shift(currentLine[0]);
  }
}
