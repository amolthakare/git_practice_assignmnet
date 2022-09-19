
var str="madam";
var N=str.length;
var reverse="";
  for(var i=N-1;i>=0;i--){
      reverse+=str[i];
    
  }
  if(str==reverse){
      console.log("Yes");
  }
  else{
      console.log("No");
  }