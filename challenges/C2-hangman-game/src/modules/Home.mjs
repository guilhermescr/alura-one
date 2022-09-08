import { root } from "../App.js";

function Home() {
  root.innerHTML = '';
  
  function renderWelcomeContainer() {
    const WELCOME_CONTAINER = document.createElement('div');
    WELCOME_CONTAINER.classList.add('welcome_container');

    WELCOME_CONTAINER.innerHTML = `
    <h1>Hangman Game</h1>
    <p>Welcome to Hangman Game! Before we start, please, tell me your name:</p>
    <form id="usernameForm">
      <input id="usernameInput" type="text" placeholder="I.e.: John" autocomplete="off" />
      <button type="submit" id="saveUsernameButton">Save Name</button>
    </form>
    `;

    root.appendChild(WELCOME_CONTAINER);
  }
  renderWelcomeContainer();

  const USERNAME_FORM = document.querySelector('#usernameForm');
  const USERNAME_INPUT = document.querySelector('#usernameInput');
  const SAVE_USERNAME_BUTTON = document.querySelector('#saveUsernameButton');
  let username;

  function confirmUsernameChoice() {
    let validMessage = false;

    while (!validMessage) {
      let saveNameMessage = window.prompt("Are you sure you want to play without a name? Type Y for Yes and N for No.");
      let regexY_test = (/Y/i).test(saveNameMessage);
      let regexN_test = (/N/i).test(saveNameMessage);
      let notValidSaveNameMessage = !regexY_test && !regexN_test;

      if (regexY_test && saveNameMessage.length === 1) {
        alert('By default, your username will be "Player".');
        username = "Player";
        console.log(username);
        validMessage = true;
        return;
      }
      if (regexN_test && saveNameMessage.length === 1) {
        USERNAME_INPUT.focus();
        validMessage = true;
        return;
      }
      if (notValidSaveNameMessage || saveNameMessage.length !== 1) {
        alert("Not a valid value.");
      }
    }
  }

  USERNAME_FORM.addEventListener('submit', function(event) {
    event.preventDefault();
  });

  SAVE_USERNAME_BUTTON.addEventListener('click', function(event) {
    event.preventDefault();
    if (USERNAME_INPUT.value === "") {
      confirmUsernameChoice();
      return;
    }

    username = USERNAME_INPUT.value;
    USERNAME_INPUT.value = '';

    console.log(username);
  })
}

export default Home;