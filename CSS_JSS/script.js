var points=0;
var pointgap = 0;
var pointanswerfunction = 0;
var pointquestion=0;
var pointsneeded=2;
var differenz= pointsneeded-points;
function number(){
	document.getElementById("point").innerHTML= points;
	document.getElementById("pointanswerfunction").innerHTML= pointanswerfunction;
	document.getElementById("pointsgap").innerHTML= pointgap;
	if(pointsneeded-points>0){
		differenz= pointsneeded-points;
		document.getElementById("diff").innerHTML=differenz;
	}
	else{
		
		document.getElementById("unlocked").innerHTML="Du hast alle Aufgaben richtig gelöst.";
	}
}
function solution(idbutton){
 	if (idbutton.getAttribute("id")=="solutionbutton1"){
 		var solutiontag=document.getElementById("solutiontag1");
 		var solutionbutton=document.getElementById("solutionbutton1");
 		var solutionspan=document.getElementById("solution1");
 		solutionbutton.style.width = "800px";
 		solutionbutton.style.height = "100px";
 		solutionbutton.style.left="calc(50% - 400px)";
 		solutiontag.style.display="none";
 		solutionspan.style.display="inline";
 	}else if(idbutton.getAttribute("id")=="solutionbutton2"){
 		var solutiontag=document.getElementById("solutiontag2");
 		var solutionbutton=document.getElementById("solutionbutton2");
 		var solutionspan=document.getElementById("solution2");
 		solutionbutton.style.width = "800px";
 		solutionbutton.style.height = "100px";
 		solutionbutton.style.left="calc(50% - 400px)";
 		solutiontag.style.display="none";
 		solutionspan.style.display="inline";
 	}
 }
 function help(idtext,idbutton,scroll){
	var idh = idbutton.getAttribute("id");
 	if (idh == "helpbutton1") {
 	idbutton.style.display = "none" ;
 	idtext.style.display = "block";
 	} else if (idh=="helpbutton2") {
 	idbutton.style.display = "none" ;
 	idtext.style.backgroundColor = "yellow";
	location.href = "#scrollto"; 
	}else{ 
     alert("an error occured pls contact system admin #1");
 	}
 }
function pointunlock() {
	points = pointgap + pointanswerfunction + pointquestion;
	differenz= pointsneeded-points;
	number();
	if (points >= pointsneeded){
		document.getElementById("next").className="nextunlocked";
		document.getElementById("next").value="Weitere Aufgaben";
		document.getElementById("buttonhref").href="/Aufgaben/"
	}
}
function Question(name){
	var elements = document.getElementsByName(name);
	var bool = elements[0].getAttribute( 'id' );
	if (bool=="true"){
		document.getElementById("answer1").className="answer";
		document.getElementById("answer2").className="answer";
		document.getElementById("answer3").className="answer";
		document.getElementById("answer4").className="answertrue";
		number();
		pointquestion=1;
		pointunlock();
	}else{
		switch(name){
			case "button1":
				document.getElementById("answer1").className="answercrossed";
				break;
			case "button2":
				document.getElementById("answer2").className="answercrossed";
				break;
			case "button3":
				document.getElementById("answer3").className="answercrossed";
				break;
			case "button4":
				document.getElementById("answer4").className="answercrossed";
				break;
		}
	}
}
function answerfunction() {
    var answer=document.getElementById("answercheck").value;
	if (answer=="false"||answer=="False"){
		document.getElementById("answercheck").style.border = "solid 3px green";
		pointanswerfunction = 1;
		document.getElementById("pointanswerfunction").innerHTML= pointanswerfunction;
		pointunlock();
	
	}else{
	document.getElementById("answercheck").style.border = "solid 3px red";
	}
}
function gap() {
	var answer=document.getElementById("codebox1").value;
	var solution=document.getElementById("codebox1").name;
	if (answer==solution){
		pointgap = 1;
		document.getElementById("pointsgap").innerHTML= pointgap;
		pointunlock();
		document.getElementById("codebox1").style.border = "solid 1px green";
		document.getElementById("codeboxcolor").style.border = "solid green";
		
	}else{
		document.getElementById("codebox1").style.border = "solid 1px red";
		document.getElementById("codeboxcolor").style.border = "solid red";
	}
}
