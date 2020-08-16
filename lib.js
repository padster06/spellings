var button;
var spelling;
var points = 0;
var input;
var answer;
var form;
var index = 0;
var dropdown;
var spellings = [
   'accommodate',
   'accompany',
   'according',
   'achieve',
   'aggressive',
   'amateur',
   'ancient',
   'apparent',
   'appreciate',
   'attached',
];

function init() {
   input = document.getElementById('answer');
   form = document.getElementById('form');
   button = document.getElementById('go');
   dropdown = document.getElementById('dropDown');

   setInterval(loop, 1);
   begin();
}

function begin() {
   form.addEventListener('submit', speak);

   shuffle(spellings);

   button.value = 'START';
}

function speak() {
   event.preventDefault();
   if (button.value != 'START') {
      answer = input.value;
      if (answer == spelling) {
         points++;
      } else {
         points--;
      }
   }
   input.value = null;

   button.value = 'NEXT';
   spelling = spellings[Math.floor(Math.random() * spellings.length)];
   var msg = new SpeechSynthesisUtterance(spelling);
   window.speechSynthesis.speak(msg);
}

function shuffle(array) {
   array.sort(() => Math.random() - 0.5);
}

function loop() {
   if (dropdown.options[dropdown.selectedIndex].value == 'Spelling') {
      window.location = 'spellings.html';
   }
}
