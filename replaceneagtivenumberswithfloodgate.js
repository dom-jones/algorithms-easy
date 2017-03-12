var Fga = 'Floodgate';
function inputFga(x) {
  for (i=0; i<x.length; i++) {
    if (x[i]<0) {
       x[i] = Fga;
  }
}
 console.log(x);
}

var x = [-9, -23, -6, -1, -3];
inputFga(x);