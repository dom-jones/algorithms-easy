function counter(y, x) {
  var count=0
  for (i=0; i<x.length; i++) {
   if (y<x[i]) {
     count++;
   }
  }
  console.log (count)
}