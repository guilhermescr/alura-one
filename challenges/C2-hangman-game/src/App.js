import Home from "./modules/Home.mjs";

const root = document.getElementById('root');

function App() {
  Home();
}

document.body.onload = App();

/*
const screenCanvas = document.getElementById('screen');
const pencil = screenCanvas.getContext('2d');
pencil.fillRect(0, 0, 400, 400);
console.log(pencil);
*/

export { root };