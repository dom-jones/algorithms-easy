function bubbleSort(x){
  var sort=x.length;
  for(var i=sort-1; i>=0; i--){
    for(var d=1; d<=i; d++){
      if(x[d-1]>x[d]){
        var holder=x[d-1];
        x[d-1] = x[d];
        x[d]=holder;
      }
    }
  }
  return x;
}

bubbleSort([23,14,986,741,20]);

//      Pseudocode //
// 1) want to create a function that sorts the numbers and put them in order by lowest to highest
// 2) Create a loop starting at the end of the array, comapre to last item to second to last item if second to last item. is greater than last item, swap the items, if not keep them as they are.
// 3) Continue going through array until you reach the first item in the array.
// 4) Create another loop going through the array again starting with the item at the beginning of the array.
// 5) If the first item is bigger than the second item, swap the bigger item into second position.
// 6) Continue with comparing items until we reach the last item of array. All items will be in order lowest to highest.

//23, 14, 986, 741, 20             14, 23, 741, 20, 986
//-------------------------       ------------------------
//0,  1,   2,   3,   4              0   1   2   3    4
//--------------------------      ------------------------
//14, 23, 986, 741, 20             14   23  741 20  986
//        741, 986, 20             14   23  20  741 
//             20, 986,            14   20  23  
//14, 23, 741, 20, 986             14   20  23   741 986                    