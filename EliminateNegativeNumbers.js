function EliminateNegativeNumber(x) {
  for (i=0; i<x.length; i++) {
    if (x[i]<0) {
      x[i]=0;
    }
  }
  return x;
}

var test=[10,5,-9,-2]
EliminateNegativeNumber (test)