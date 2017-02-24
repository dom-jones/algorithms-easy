function averageArray(inputArray) {
  var sum = 0;
  var length = inputArray.length;
  var avg = 0;
  
  for (i=0; i<length; i++) {
    sum += inputArray[i];
}
  avg = sum/length;
  console.log("average of" +avg);
  
  return;
}
