const LETTERS_CANVAS = document.getElementById('letters');
const PENCIL = LETTERS_CANVAS.getContext('2d');
PENCIL.fillStyle = 'white';
PENCIL.font = '100px sans-serif';

let spaces = 10;

function clearCanvas() {
  PENCIL.clearRect(0, 0, 1200, 800);
}

function DrawLetters(word) {
  clearCanvas();

  function drawLetterSpace() {
    PENCIL.fillRect(spaces, 200, 30, 10);
  }
  
  word.split('')
  .map(letter => {
    if (letter === ' ' || letter === '-') {
      PENCIL.fillRect(spaces, 150, 30, 10);
      spaces += 50;
      return;
    }
    drawLetterSpace();
    spaces += 50;
  });
}

export default DrawLetters;
export { LETTERS_CANVAS, PENCIL, spaces }