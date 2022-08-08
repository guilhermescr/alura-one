let inputWord = document.getElementById("decoder-data");
let resultsData = document.getElementById("results-data");

const encryptBtn = document.getElementById("encryptBtn");
const decryptBtn = document.getElementById("decryptBtn");
const clearDecoderDataBtn = document.getElementById("clearDecoderDataBtn");
const clearResultsBtn = document.getElementById("clearResultsBtn");
const copyTextBtn = document.getElementById("copyTextBtn");

function encryptWord() {
  let encryptedWord = inputWord.value;
  encryptedWord = encryptedWord.replaceAll("e", "enter")
  .replaceAll("i", "imes")
  .replaceAll("a", "ai")
  .replaceAll("o", "ober")
  .replaceAll("u", "ufat");
  resultsData.value = encryptedWord;
}

function decryptWord() {
  let decryptedWord = inputWord.value;
  decryptedWord = decryptedWord.replaceAll("enter", "e")
  .replaceAll("imes", "i")
  .replaceAll("ai", "a")
  .replaceAll("ober", "o")
  .replaceAll("ufat", "u");
  resultsData.value = decryptedWord;
}

function clearTextArea() {
  inputWord.value = "";
  inputWord.focus();
}

function clearResults() {
  resultsData.value = "";
}

function copyTextToClipboard() {
  navigator.clipboard.writeText(resultsData.value);
  console.log(`Copied the text ${resultsData.value} to the clipboard.`);
}

encryptBtn.addEventListener("click", (e) => {
  e.preventDefault();
  encryptWord();
});

decryptBtn.addEventListener("click", (e) => {
  e.preventDefault();
  decryptWord();
});

clearDecoderDataBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearTextArea();
});

clearResultsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearResults();
});

copyTextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  copyTextToClipboard();
});

/*
`A letra "e" é convertida para "enter"`
`A letra "i" é convertida para "imes"`
`A letra "a" é convertida para "ai"`
`A letra "o" é convertida para "ober"`
`A letra "u" é convertida para "ufat"`
*/