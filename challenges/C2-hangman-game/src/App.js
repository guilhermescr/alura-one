import Home from './modules/Home.mjs';
import ChooseMode from './modules/ChooseMode.mjs';

const root = document.getElementById('root');
// Words API:
// https://api.dictionaryapi.dev/api/v2/entries/en/
// Use it for Random Mode

function App() {
  // Home();
  ChooseMode();
}

function addListeners() {
  let backToChooseModePageButtons = document.querySelectorAll('.backToChooseModePageButton');

  backToChooseModePageButtons.forEach((backToChooseModePageButton) => {
    backToChooseModePageButton.addEventListener('click', ChooseMode)
  })
}

document.body.onload = App();
root.onclick = addListeners;

/*
const screenCanvas = document.getElementById('screen');
const pencil = screenCanvas.getContext('2d');
pencil.fillRect(0, 0, 400, 400);
console.log(pencil);
*/

export { root };