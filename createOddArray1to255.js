function createOddArray1To255() {
 y=[];
  for (i=0; i<=255; i++) {
   if (i%2===1) {
     y.push(i);
   }
    
  }
  return y;
}
createOddArray1To255();