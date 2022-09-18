
var str="werg";
var N=str.length;
var reverse="";
  for(var i=N-1;i>=0;i--){
      reverse+=str[i];
    //   console.log(i);
  }
  if(str==reverse){
      console.log("Yes");
  }
  else{
      console.log("No");
  }