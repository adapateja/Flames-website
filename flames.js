function check(){
let love=document.getElementById("heart");
love.style.display="none"
let n1=document.getElementById("boy").value;
let n2=document.getElementById("girl").value;
let b=document.getElementById("showboy");
let g=document.getElementById("showgirl");
let res=document.getElementById("result");
b.innerHTML=n1+" Has crush on "+n2;
g.innerHTML=n2+" Future relation with "+n1+" is --";
n1=n1.toLowerCase();
n2=n2.toLowerCase();
n1=n1.replaceAll(" ","");
n2=n2.replaceAll(" ","");
for(let i=0;i<n1.length;i++){
    for(let j=0;j<n2.length;j++){
        if(n1[i]==n2[j]){
		n1=replacing(n1,i,'@');
		n2=replacing(n2,j,'@');
        }
    }
}
var n=0;
for(var i=0;i<n1.length;i++)
{
	if(n1[i]!='@')
	{
		n++;
	}
}
for(var i=0;i<n2.length;i++)
{
	if(n2[i]!='@')
	{
		n++;
	}
}
if(n==3 || n==5 || n==14 || n==16 || n==18 || n==21 || n==23){
    res.innerHTML="Friends";
}
else if(n==19 || n==10){
    res.innerHTML="Lovers";
}
else if(n==13 || n==17 || n==8 || n==12){
    res.innerHTML="Affections";
}
else if(n==6 || n==15 || n==11){
    res.innerHTML="Marriage";
}
else if(n==2 || n==4 || n==7 || n==9 || n==20 || n==22 || n==24 || n==25){
    res.innerHTML="Enemies";
}
else if(n==1){
    res.innerHTML="Sibblings";
}
else{
    res.innerHTML="Both Are Same Names";
}
let lb=document.getElementById("lasb");
let lg=document.getElementById("lasg");
lb.innerHTML=n1;
lg.innerHTML=n2;
}
function replacing(s, n, ch) {
      return s.substring(0, n) + ch + s.substring(n + 1);
}
