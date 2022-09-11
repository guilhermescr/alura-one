const lettersCanvas = document.getElementById('letters');
const pencil = lettersCanvas.getContext('2d');
pencil.fillStyle = 'white';
pencil.font = '100px sans-serif';

function clearCanvas() {
  pencil.clearRect(0, 0, 1200, 800);
}

function DrawLetters(word) {
  clearCanvas();

  let spaces = 10;
  let lineIsFull = false;
  word = word.toUpperCase();

  function drawLetter() {
    pencil.fillRect(spaces, 200, 30, 10);
  }
  
  word.split('')
  .map(letter => {
    if ((letter === ' ' || letter === '-') && !lineIsFull) {
      pencil.fillRect(spaces, 150, 30, 10);
      spaces += 50;
      return;
    }

    if ((letter === ' ' || letter === '-') && lineIsFull) {
      if (spaces === 10) return;
      pencil.fillRect(spaces, 350, 30, 10);
      spaces += 50;
      return;
    }
    
    if (!lineIsFull) {
      drawLetter();
      pencil.fillText(letter, spaces, 180, 30);
    }

    if (spaces === 1160) {
      lineIsFull = true;
      spaces = 10;
      return;
    }
    if (lineIsFull) {
      pencil.fillRect(spaces, 400, 30, 10);
      pencil.fillText(letter, spaces, 380, 30);
    }
    spaces += 50;
  });
}

export default DrawLetters;