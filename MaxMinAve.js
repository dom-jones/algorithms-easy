    var max=0;
    var min=0;
    var sum=0;
function MaxMinAve(x) {
    for(i=0; i<x.length; i++) {
       if (x[i]>max){
           max=x[i];
       } 
       if (x[i]<min){
           min=x[i];
    }  
        var avg=0;
        sum += x[i];
        var avg=sum/x.length;
    

     }
     console.log(max + min + avg);
     
}

var test=[56,2,69,45]; 
MaxMinAve(test)

    
    
