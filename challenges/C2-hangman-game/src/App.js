import Home from './modules/Home.mjs';
import ChooseMode from './modules/ChooseMode.mjs';
import DRAW_PARTS from './modules/DrawGallows.mjs';

const root = document.getElementById('root');
// Words API:
// https://api.dictionaryapi.dev/api/v2/entries/en/
// Use it for Random Mode

function App() {
  // Home();
  // ChooseMode();
}

function addListeners() {
  let backToChooseModePageButtons = document.querySelectorAll('.backToChooseModePageButton');

  backToChooseModePageButtons.forEach((backToChooseModePageButton) => {
    backToChooseModePageButton.addEventListener('click', ChooseMode)
  })
}

document.body.onload = App();
//root.onclick = addListeners;

/*
const {drawGallowsStructure, drawHead, drawBody, drawRightArm, drawLeftArm, 
      drawRightLeg, drawLeftLeg, drawDeadFace} = DRAW_PARTS;
*/
const DRAW_METHODS = Object.values(DRAW_PARTS);
let timer = 1000;
for (let index = 0; index < DRAW_METHODS.length; index++) {
  setTimeout(DRAW_METHODS[index], timer);
  timer += 1000;
}

export { root };