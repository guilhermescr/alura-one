import { root } from "../App.js";
import AddYourWordMode from "./AddYourWordMode.mjs";
import RandomWordMode from "./RandomWordMode.mjs";

function ChooseMode() {
  root.innerHTML = '';

  function renderChooseModeContainer() {
    const CHOOSE_MODE_CONTAINER = document.createElement('div');
    CHOOSE_MODE_CONTAINER.classList.add('choose_mode_container');

    CHOOSE_MODE_CONTAINER.innerHTML = `
    <h2>Choose your mode</h2>
    <p>Hey, <span id="playerName">Player</span>! Now, I'm giving you two options:</p>
    <ul id="modes_list">
      <li role="button" id="startRandomWordModeButton" class="modes__item">- Random Word</li>
      <li role="button" id="startAddYourWordModeButton" class="modes__item">- Add Your Word</li>
    </ul>
    <p>Please, select one option, so you can start playing my game :)</p>
    `;
    root.appendChild(CHOOSE_MODE_CONTAINER);
  }
  renderChooseModeContainer();

  const START_RANDOM_WORD_MODE_BUTTON = document.getElementById('startRandomWordModeButton');
  const START_ADD_YOUR_WORD_MODE_BUTTON = document.getElementById('startAddYourWordModeButton');

  START_RANDOM_WORD_MODE_BUTTON.addEventListener('click', RandomWordMode);
  START_ADD_YOUR_WORD_MODE_BUTTON.addEventListener('click', AddYourWordMode);
}

export default ChooseMode;