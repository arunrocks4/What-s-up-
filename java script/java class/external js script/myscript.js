function myfun(){
var mydate = new Date();
	
document.getElementById("p1").innerHTML=mydate.getDate()+"/"+(mydate.getMonth() + 1 )+"/"+mydate.getFullYear();
}