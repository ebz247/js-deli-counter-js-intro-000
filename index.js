function takeANumber(katzDeliLine, person){
  katzDeliLine.push(person);
  var arrayLength = katzDeliLine.length;
  var personPosition = 1 + katzDeliLine.indexOf(person);
  return `Welcome, ${person}. You are number ${personPosition} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!"
  } else {
    console.log ("Currently serving " + katzDeliLine[0] + ".");
    katzDeliLine.shift(katzDeliLine[0]);
  }
}

function currentLine(katzDeliLine){
 var message = "The line is currently";
 var countdown = katzDeliLine.length
 var i = 0
 while(countdown > 0){
   katzDeliLine[i] = " " + (1+i) + ". " + katzDeliLine[i];
    countdown --;
    i++;
 }
 return `${message} ${katzDeliLine}`;
}
