function arrayValuesGreaterThanY (inputArray, threshold) {
  var count=0
  for (i=0; i<inputArray.length; i++) {
   if (inputArray[i]>threshold) {
     count++;
   }
  }
  console.log ("there were" , count+" values greater than," ,threshold+" in the array.");
}