"use strict";

var styleSaved = false;
var look = [];
var animEnergy = "";
var alienStyle = [];
var timer = 0;
var idQ = questions.length - 1;
var buttBool = 0, endBool = false;
var divQuestions = document.getElementById("questions");
var divScores = document.getElementById("scores");
var divRound = document.getElementById("round");
var interval = "";

/**
 * Restart the view of elements and calls logic for reset questions.
 */
function initialView(){
	resetQuestions();
	switchDiv("scores");
	document.getElementById("timer-desktop").innerHTML = "100%";
	document.getElementById("timer-mobile").innerHTML = "100%";
	document.getElementById("stats-bars").innerHTML = "";
	document.getElementById("current-letter").innerHTML = "";
	document.getElementById("input").maxLength = 6;

	for(var i = 0; i < questions.length; i++){
		var element = document.getElementById("_" + questions[i].letter);
		element.style.background = alienStyle[i].bg;
		element.style.backgroundSize= alienStyle[i].bgSize;
		element.style.filter = alienStyle[i].filter;
	}
	timer = totalMilisecs * 0.001;
	document.documentElement.style.setProperty('--animTime', timer + "s");
	
	divQuestions.innerHTML = "¿Como te llamas?";
	animEnergy.classList.remove("anim");
	(name === "PlayerX") ? document.getElementById("input").value = "" : document.getElementById("input").value = name;
	divScores.innerHTML = "<div class='logo'></div>";
	changeStats();
}

/**
 * Listener of logic states, calls functions to change views.
 */
messenger.listen(function (st) {
	document.getElementById("input").value = "";
	if (Array.isArray(st)){
		if (typeof st[0] === "number"){
			var i = "_" + q[st[0]].letter;
			changeAliens(i, st[1]);
			changeStats();
		} else {
			showScores(st);
		}
	} else if (typeof st === "number"){
		var current = q[st].letter.toUpperCase();
		if (current === "NY") current = "Ñ";
		document.getElementById("current-letter").innerHTML = current;
	} else if (typeof st === "boolean" && st === true){
		initialView();
	} else {
		divQuestions.innerHTML = st;
	}
});

/**
 * Switch visible divs in "screen".
 * 
 * @param {String} div from html 
 */
function switchDiv(div){

	if (div === "round") {
        divRound.style.display = "flex";
        divScores.style.display = "none";
    } else {
    	divScores.style.display = "block";
        divRound.style.display = "none";
    }

}

/**
 * Prevent extra clicking when name entered.
 * 
 * @param {Number} button - only works when number is equal to 1.
 */
function enterName(button){
	if (buttBool === 1) {
		document.getElementById("input").maxLength = 20;
		var p = "";
		if (button === 1) {
			p = "";
		} else if (button === 0){
			p = "exit";
		} else {
			p = document.getElementById("input").value;
        }

		switch (p){
			case "":
				name = "PlayerX";
				divScores.innerHTML = "<h1>Buenas!!</h1>";
				setTimeout(function() { start(); },2000);
				break;
			case "exit":
				divQuestions.innerHTML = endMessage();
				buttBool = 0;
				divScores.innerHTML = "";
				break;
			default:
				name = p;
				divScores.innerHTML = "<h1>Buenas " + name + "!!!</h1>";
				setTimeout(function() { start(); },2000);
				break;
		}
	}
}

/**
 * If enter key is pressed, act as the Enter button (bEnter).
 * 
 * @param {KeyboardEvent} event - pressed key 
 */
function enter(event) {
    if (event.keyCode === 13) { bEnter() }
}

/**
 * Enter button behaviour.
 */
function bEnter() {
    var inputValue = document.getElementById("input").value;
	if (exitBool) {
		end(false);	
		exitBool = false;
	} else buttonManager(inputValue);
}

/**
 * Pass button calls.
 */
function bPass() { buttonManager(1) }

/**
 * Exit button calls.
 */
function bExit() { buttonManager(0) }

/**
 * Manages buttons behaviour, depending of the game status.
 * 
 * @param {Number | String} param - used to know witch button has been pressed.
 */
function buttonManager(param) {
	if (endBool) {
		endBool = false;
		setTimeout(function() { initialView(); }, 500);
	} else if (exitBool) {
		exitBool = false;
		end(true);
	} else if (divRound.style.display === "flex") {
		answer(param);
	} else if (divScores.style.display === "block"){
		buttBool ++;
		enterName(param);
	}
	document.getElementById("input").focus();
}

/**
 * Changes view when game is going to start.
 */
function start() {
	buttBool = 0;
	switchDiv("round");
	round();
	animEnergy.classList.add("anim");
	interval = setInterval(function(){ 
		timer --;
		var percent = (timer - 1) / (totalMilisecs * 0.00001);
		document.getElementById("timer-desktop").innerHTML = Math.ceil(percent) + "%";
		document.getElementById("timer-mobile").innerHTML = Math.ceil(percent) + "%";
	}, 1000);
	document.getElementById("current-letter").innerHTML = "A";
	timeAlert = setTimeout(function(){ timeOver(); }, totalMilisecs);
	animEnergy.style.animationPlayState = "running";
}

/**
 * Called from messenger.listen, reads if is good or wrong answer and changes the current alien view.
 * 
 * @param {String} id - id of the html, composed with _ and a letter.
 * @param {String} order - OK || WRONG || PASS
 */
function changeAliens(id, order){
	if (order !== "PASS"){
		var element = document.getElementById(id);
		var styl = window.getComputedStyle(element).getPropertyValue('background');
		var newStyle = styl.slice(styl.indexOf(",") + 1);
		element.style.background = newStyle;
		
		if (order === "OK"){
			element.style.filter = "hue-rotate(0deg)";
		} else {
			element.style.backgroundPosition = "0px calc(10px + var(--f))"; 
			element.style.filter = "grayscale(100%) contrast(80%) brightness(20%)";
		}
	}
}

/**
 * Changes desktop and mobile stats (string chain in mobile and coloured bars in desktop).
 */
function changeStats() {
	var tp = 1.235 * pasapalabra;
	var to = 100 - 3.7 * ok;
	var tw = 3.7 * wrong;
	var bgPass = document.getElementById("counter-pass");
	var bgOk = document.getElementById("counter-ok");
	var bgWrong = document.getElementById("counter-wrong");
	bgPass.style.background = "linear-gradient(90deg, #006eec "+ tp +"%, transparent "+ (tp + 1) +"%)";
	bgOk.style.background = "linear-gradient(transparent "+ to +"%, #5ce71c "+ (to + 1) +"%)";
	bgWrong.style.background = "linear-gradient(#d41f12 "+ tw +"%, transparent "+ (tw + 1) +"%)";

	if (pasapalabra === 81) bgPass.style.background = "linear-gradient(90deg, #006eec, #006eec)";
	if (ok === 27) bgOk.style.background = "linear-gradient(#5ce71c, #5ce71c)";
	if (wrong === 27) bgWrong.style.background = "linear-gradient(#d41f12, #d41f12)";

	to = ok;
	tw = wrong;
	tp = pasapalabra;
	
	if (ok < 10) to = "0" + ok;
	if (wrong < 10) tw = "0" + wrong;
	if (pasapalabra < 10) tp = "0" + pasapalabra;
	document.getElementById("stats-bars").innerHTML = to + "✔️ " + tw + "❌ " + tp + "💭    ...<small>" + toAnswer + "</small>";

}

/**
 * Once finished the game, clean timers and shows the scores.
 * 
 * @param {Array.<String>} st - First argument is text to show about punctuation and next are scores.
 */
function showScores(st) {
	var scores = "<div class='scores-table'>" +
	"<div class='scores-div span3'><big> Scores</big></div>";
	animEnergy.style.animationPlayState = "paused";
	clearTimeout(timeAlert);
	clearInterval(interval);
	switchDiv("scores");
	divQuestions.innerHTML = st[0];
	st.splice(0, 1)
	
	st.forEach(function(v, i) {
		scores += "<div class='scores-div'>" + i + 
		"</div><div class='scores-div'>" + v.n + 
		"</div><div class='scores-div'>" + v.s + "</div>"
	});
	scores += "</div>";

	divScores.innerHTML = scores;
	endBool = true;
}

/**
 * View when time is over.
 */
function timeOver() {
	switchDiv("scores")
	divScores.innerHTML = "<h1>Se ha acabado el tiempo.</h1>";
	divQuestions.innerHTML = "<h1>" + name + ", <br> has respondido correctamente " + ok + " preguntas.</h1>";
	clearTimeout(timeAlert);
	clearInterval(interval);
	endBool = true;
}

/**
 * Only works once, saves aliens styles and calls initialView().
 */
function firstTime() {
	for(var i = 0; i < questions.length; i++){
		var element = document.getElementById("_" + questions[i].letter);
		var objStyle = {};
		objStyle.bg = window.getComputedStyle(element).getPropertyValue('background');
		objStyle.bgSize = window.getComputedStyle(element).getPropertyValue('background-size');
		objStyle.filter = window.getComputedStyle(element).getPropertyValue('filter');
		alienStyle.push(objStyle);
	}

	externalBool = true;
	animEnergy = document.getElementById("energy");
	animEnergy.style.animationPlayState = "paused";

	initialView();
}

firstTime();