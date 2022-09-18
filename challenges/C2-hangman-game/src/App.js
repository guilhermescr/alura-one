import Home from './modules/Home.mjs';
import ChooseMode from './modules/ChooseMode.mjs';
import DRAW_PARTS from './modules/DrawGallows.mjs';
import RandomWordMode from './modules/RandomWordMode.mjs';
import DrawLetters from './modules/DrawLetters.mjs';
import DrawLettersText from './modules/DrawLettersText.mjs';

const root = document.getElementById('root');
const form = document.getElementById('wordForm');
const wordInput = document.getElementById('wordEntry');
const SUBMIT_WORD_BUTTON = document.querySelector('#submitWordButton');

const word = 'COZINHA';

function validateForm() {
  if (wordInput.value.length !== 1) {
    alert("You can only send one letter at a time! And don't send numbers!");
  } else {
    wordInput.value.toUpperCase();
    DrawLettersText(wordInput.value);
    wordInput.value = '';
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
});

SUBMIT_WORD_BUTTON.addEventListener('click', (event) => {
  event.preventDefault();
  validateForm();
});

function App() {
  // Home();
  // ChooseMode();
  // RandomWordMode();

  const DRAW_PARTS_FUNCTIONS = Object.values(DRAW_PARTS);
  for (let index = 0; index < DRAW_PARTS_FUNCTIONS.length; index++) {
    DRAW_PARTS_FUNCTIONS[index]();
  }

  // draw word spaces in canvas
  DrawLetters(word);
}

/*
function addListeners() {
  let backToChooseModePageButtons = document.querySelectorAll('.backToChooseModePageButton');

  backToChooseModePageButtons.forEach((backToChooseModePageButton) => {
    backToChooseModePageButton.addEventListener('click', ChooseMode)
  })
}
*/

document.body.onload = App();
//root.onclick = addListeners;

export { root, word };