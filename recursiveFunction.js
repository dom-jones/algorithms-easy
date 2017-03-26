var num = 10;
function domTenThruOne(num){
   if (num<1){
   return num;
  }
return num + domTenThruOne(num-1);
  }
domTenThruOne(num);