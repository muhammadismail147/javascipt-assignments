var uinput=parseInt(prompt("write a num"));
var num=Math.ceil(uinput);
var text="This is some dummy text";
var slice=text.slice(0,4);
var reverse='';
for(var i=slice.length-1;i>=0;i--){
   reverse+=slice[i];
   console.log(reverse)
  
}
alert(reverse)