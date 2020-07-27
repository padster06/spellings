var button;

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
   button = document.getElementById('go');
   console.log(button);
   begin();
}

function begin() {
   button.textContent = 'start';
   console.log(button.value);
}

function speak() {
   button.textContent = 'next';

   var msg = new SpeechSynthesisUtterance(
      spellings[Math.floor(Math.random() * spellings.length)]
   );
   window.speechSynthesis.speak(msg);
   console.log('spoke');
}
