function answerfunction() {
    var answer=document.getElementById("answercheck").value;
	if (answer=="false"||answer=="False"){
		document.getElementById("next").className="nextunlocked";
		document.getElementById("next").value="Nächstes Kapitel";
		document.getElementById("buttonhref").href="/Operatoren";
	}
}
