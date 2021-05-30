

const html = document.querySelector('html');
html.setAttribute('data-theme','theme-1');
function themeOne(){
 html.setAttribute('data-theme','theme-1');
}
function themeTwo(){
html.setAttribute('data-theme','theme-2');
}
function themeThree(){
html.setAttribute('data-theme','theme-3');
}

function dis(val){
    document.getElementById("result").value+=val;


}
function clr(){
  document.getElementById("result").value="";
}
function DEL(){
  str = document.getElementById("result").value;
  str=str.slice(0,-1);
  document.getElementById("result").value=str;

}
function solve(){
  x=document.getElementById("result").value;
  x=x.replace("x","*");
  y=eval(x);
  document.getElementById("result").value=y;
}
