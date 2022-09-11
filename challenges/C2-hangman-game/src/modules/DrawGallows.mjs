import { root } from "../App.js";

const gallowsCanvas = document.getElementById('gallows');
const pencil = gallowsCanvas.getContext('2d');

function drawEyes() {
  // left eye
  pencil.beginPath();
  pencil.moveTo(180, 50);
  pencil.lineTo(182, 50);
  pencil.lineTo(188, 56);
  pencil.lineTo(186, 56);
  pencil.fill();
  pencil.beginPath();
  pencil.moveTo(188, 50);
  pencil.lineTo(186, 50);
  pencil.lineTo(180, 56);
  pencil.lineTo(182, 56);
  pencil.fill();

  // right eye
  pencil.beginPath();
  pencil.moveTo(190, 50);
  pencil.lineTo(192, 50);
  pencil.lineTo(198, 56);
  pencil.lineTo(196, 56);
  pencil.fill();
  pencil.beginPath();
  pencil.moveTo(198, 50);
  pencil.lineTo(196, 50);
  pencil.lineTo(190, 56);
  pencil.lineTo(192, 56);
  pencil.fill();
}

function drawMouth() {
  pencil.lineWidth = 2;
  pencil.beginPath();
  pencil.arc(189, 63, 3, 0, Math.PI * 2);
  pencil.stroke();
}

const DRAW_PARTS = {
  drawGallowsStructure: function() {
    pencil.fillStyle = 'black';
    // vertical line ->
    pencil.fillRect(100, 0, 2, 200);
    // horizontal line ->
    pencil.fillRect(100, 0, 90,2);
    // head rope ->
    pencil.fillRect(188, 2, 2, 40);
  },
  drawHead: function() {
    pencil.fillStyle = '#ffe0bd';
    pencil.lineWidth = 4;

    pencil.beginPath();
    pencil.arc(189, 57, 15, 0, Math.PI * 2);
    pencil.stroke();
    pencil.fill();
  },
  drawBody: function() {
    pencil.fillStyle = 'black';
    pencil.fillRect(188, 72, 2, 70);
  },
  drawRightArm: function() {
    pencil.beginPath();
    pencil.moveTo(188, 72);
    pencil.lineTo(190, 72);
    pencil.lineTo(218, 120);
    pencil.lineTo(216, 120);
    pencil.fill();
  },
  drawLeftArm: function() {
    pencil.beginPath();
    pencil.moveTo(190, 72);
    pencil.lineTo(188, 72);
    pencil.lineTo(158, 120);
    pencil.lineTo(160, 120);
    pencil.fill();
  },
  drawRightLeg: function() {
    pencil.beginPath();
    pencil.moveTo(188, 142);
    pencil.lineTo(190, 142);
    pencil.lineTo(200, 170);
    pencil.lineTo(198, 170);
    pencil.fill();
  },
  drawLeftLeg: function() {
    pencil.beginPath();
    pencil.moveTo(190, 142);
    pencil.lineTo(188, 142);
    pencil.lineTo(178, 170);
    pencil.lineTo(180, 170);
    pencil.fill();
  },
  drawDeadFace: function() {
    drawEyes();
    drawMouth();
  },
};

export default DRAW_PARTS;