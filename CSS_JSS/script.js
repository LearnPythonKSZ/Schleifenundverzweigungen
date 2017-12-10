function Question(name){
	var elements = document.getElementsByName(name);
	var bool = elements[0].getAttribute( 'id' );
	if (bool=="true"){
		document.getElementById("answer1").className="answer";
		document.getElementById("answer2").className="answer";
		document.getElementById("answer3").className="answer";
		document.getElementById("answer4").className="answertrue";
		document.getElementById("next").className="nextunlocked";
		document.getElementById("next").value="Nächstes Kapitel";
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
		document.getElementById("next").className="nextunlocked";
		document.getElementById("next").value="Nächstes Kapitel";
	}
}
function gap() {
	var answer=document.getElementById("codebox1").value;
	var solution=document.getElementById("codebox1").name;
	if (answer==solution){
		document.getElementById("next").className="nextunlocked";
		document.getElementById("next").value="Nächstes Kapitel";
	}
}
