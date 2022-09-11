import Home from './modules/Home.mjs';
import ChooseMode from './modules/ChooseMode.mjs';
import DRAW_PARTS from './modules/DrawGallows.mjs';
import RandomWordMode from './modules/RandomWordMode.mjs';
import DrawLetters from './modules/DrawLetters.mjs';

const root = document.getElementById('root');
const form = document.getElementById('wordForm');
const wordInput = document.getElementById('wordEntry');
const SUBMIT_WORD_BUTTON = document.querySelector('#submitWordButton');

form.addEventListener('submit', (event) => {
  event.preventDefault();
});

SUBMIT_WORD_BUTTON.addEventListener('click', (event) => {
  event.preventDefault();
  DrawLetters(wordInput.value);
  wordInput.value = '';
});

function App() {
  // Home();
  // ChooseMode();
  // RandomWordMode();

  const DRAW_FUNCTIONS = Object.values(DRAW_PARTS);
  for (let index = 0; index < DRAW_FUNCTIONS.length; index++) {
    DRAW_FUNCTIONS[index]();
  }
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

export { root };