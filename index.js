function takeANumber(katzDeliLine, person){
  katzDeliLine.push(person);
  var arrayLength = katzDeliLine.length;
  var personPosition = 1 + katzDeliLine.indexOf(person);
  return `Welcome, ${person}. You are number ${personPosition} in line.`;
}