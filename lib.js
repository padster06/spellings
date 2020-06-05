var points;
var answer;
var spellings = [];
var submit;
var upload;
var loop;
var voices = [];
var msg;
var currentWord;

function init() {
	begin();
	loop = setInterval(mainloop, 0);

}

function begin() {
	
	msg = new SpeechSynthesisUtterance();
	msg.text = 'hello';
	spellings = ['build', 'none', 'hello'];
	currentWord = Math.floor(Math.random()*spellings.length);
	speechSynthesis.addEventListener('voiceschanged', makeVoices)
	answer = document.getElementById('answer');
	submit = document.getElementById('answered');
	submit.addEventListener('click', clicked);

}

function mainloop() {
	
}

function setData() {

}

function getData() {

}

function clicked() {
	currentWord = Math.floor(Math.random()*spellings.length);
	msg.text = spellings[currentWord];

	speechSynthesis.speak(msg);
}

function makeVoices() {
	voices = this.getVoices();
	console.log(voices);
	msg.text = spellings[currentWord];
	speechSynthesis.speak(msg);

}