var n=10;
function disable(){
   top.disabled=true;
   num1.disabled=true;
   num2.disabled=true;
   ans.disabled=true;
   btn.disabled=true;
   show.disabled=true;
   lev.disabled=true;
}
function quiz(){
val1=Math.round(Math.random()*n);
num1.innerHTML=val1;
val2=Math.round(Math.random()*n);
num2.innerHTML=val2;
}
function AnsCheck(){
    var a=ans.value;
    if(a==(val1+val2)) {
       show.innerHTML="&#x1F3C5;Correct &#x1F3C5; &#128512;";
       start();
    }
    else {
       show.innerHTML="&#128532;!Wrong &#128532; Please Try Again";   
       ans.value="";
    }
}
i=0;
function start(){
 
   top.disabled=false;
   num1.disabled=false;
   num2.disabled=false;
   ans.disabled=false;
   btn.disabled=false;
   show.disabled=false;
   ans.value="";
   lock1.innerHTML="&#10004;"
    if(i==5 || i==10 || i==15 || i==20){
        c=document.getElementsByClassName("lock");
        c.innerHTML="&#10004";
        n=n+90;
    }
   var b= document.getElementsByClassName("boll");
    if(i>0)
      b[i-1].style.background="cyan";
    b[i].style.background="gold";
    i++;
    quiz();
}
//   function level2(){
//       main-box.enable;
//   }