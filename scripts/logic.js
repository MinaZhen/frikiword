"use strict";

var totalMilisecs = 200000;
var score = [], q = [];
var id = questions.length - 1;
var ok = 0, pasapalabra = 0, wrong = 0, toAnswer = 0;
var name = "";
var boolInGame = false, exitBool = false, externalBool = false;
var timeAlert = "";

var messenger = {
	current: undefined,
	listen: function listen(st) {
		this.current = st;
	},
	change: function change(st) {
		this.current(st);
	}

}

/**
 * For starting the game, gets questions and choose randomly one of each letter.
 */
function resetQuestions(){ 
	q = [];
	id = questions.length - 1;
	toAnswer = questions.length;
	ok = 0;
	pasapalabra = 0;
	wrong = 0;
	name = "";
	boolInGame = false;
	exitBool = false;
	for(var x = 0; x < questions.length; x++){
		var num = Math.floor(Math.random()*4); 
		var obj = {letter: "", answer: "", status: 0, pre:"", question: ""};
		obj.letter = questions[x].letter;
		obj.answer = questions[x].answer[num];
		obj.status = questions[x].status;
		obj.question = questions[x].question[num];
		obj.pre = questions[x].pre;
		q[x] = obj;
	}
	return q;
}

/**
 * First time inizializes timer if not external and updates the id and checks is game is over or call new question.
 * 
 * @returns {ranking | newQuestion} 
 */
function round() {
	if (!boolInGame && !externalBool) timeAlert = setTimeout(function(){ alert("Time is over"); }, totalMilisecs);
	boolInGame = true;
	switch(q[id].status) {
		case 3: 
			q.splice(id, 1);
			break;
		default:
			id ++;
			id %= q.length;
			break;
	}
	if (q.length === id) id = 0;
	if (q.length === 0) return ranking(); 
	
	return newQuestion();
}

/**
 * Returns the question of the current id.
 * 
 * @returns {String} - Current question.
 */
function newQuestion() { 
	var quest = q[id].pre + "  " + q[id].question;
	messenger.change(id);
	messenger.change(quest);
	return quest;
}

/**
 * Modifies received answer if is string and checks if is right, wrong or to jump question.
 * 
 * @param {String | Number} input - parameter sended to check as answer
 */
function answer(input) {
	
	if (typeof input === "string") {
		input = input.toLowerCase().split(""); 
		let from = "àáäâèéëêìíïîòóöôùúüû.-_"
		let to   = "aaaaeeeeiiiioooouuuu   ".split("") 
		
		for(var i = 0; i < input.length; i++){
			if (from.indexOf(input[i]) > -1) {
				input[i] = to[from.indexOf(input[i])]
			} 
		}

		input = input.join("").replace(/\s/g, "");
	}

	switch (input){
		
		case undefined:
			throw Error("Not answer defined.")
		case q[id].answer:
			ok ++;
			toAnswer --;
			q[id].status = 3; 
			messenger.change([id, "OK"])
			return round();	
		case 1:
			pasapalabra ++;
			q[id].status += 1;
			messenger.change([id, "PASS"])

			if (q[id].status === 3) {
				wrong ++;
				toAnswer --;
				messenger.change([id, "WRONG"]);
			};
			return round();		
		case 0:	
			messenger.change(endMessage());
			break;
		default:
			wrong ++;
			toAnswer --;
			q[id].status = 3; 
			messenger.change([id, "WRONG"])
			return round();
	}
	
}

/**
 * Check punctuation and returns message also sends to messenger this string and the scores in memory.
 * 
 * @returns {String} - Message about punctuation.
 */
function ranking(){
	var txt = "";
	boolInGame = false;
	var sc = ((ok * 100)-(pasapalabra*20)); 
	score.push({n : name, s : sc});
	if (ok === questions.length) { txt = "TE LLEVARÍAS EL BOTE!!<br>" } 

	if (name) txt = txt + name + ", has hecho " + sc + " puntos";
	else txt = txt + "Has hecho " + sc + " puntos";
	
	if (score.length > 1){ score.sort(function(a, b){return a.s - b.s;});}

	var arr = [txt]
	messenger.change(arr.concat(score.reverse()));
	return txt;
}

/**
 * Changes boolean and returns confirmation text to leave page.
 * 
 * @returns {String} 
 */
function endMessage() {
	exitBool = true;
	return "Quieres salir? <br> <small> Pulsa Pass o Exit para salir o Enter para continuar. </small>"
}

/**
 * If user wants to exit redirects to another page, else continues.
 * 
 * @param {Boolean} boolean 
 */
function end(boolean) { 
	if (boolean){
		return window.location.href = 'http://minazhen.blogspot.com';
	} else (boolInGame) ? newQuestion(id) : messenger.change(true); 
}


