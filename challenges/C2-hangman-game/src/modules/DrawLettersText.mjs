import { word } from "../App.js";
import { PENCIL, spaces } from "./DrawLetters.mjs";

function DrawLettersText(letter) {
  if (word.includes(letter)) {
    PENCIL.fillText(letter, spaces, 180, 30);
  }
}

export default DrawLettersText;