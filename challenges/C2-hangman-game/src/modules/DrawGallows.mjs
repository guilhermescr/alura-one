const GALLOWS_CANVAS = document.getElementById('gallows');
const PENCIL = GALLOWS_CANVAS.getContext('2d');

function drawEyes() {
  // left eye
  PENCIL.beginPath();
  PENCIL.moveTo(180, 50);
  PENCIL.lineTo(182, 50);
  PENCIL.lineTo(188, 56);
  PENCIL.lineTo(186, 56);
  PENCIL.fill();
  PENCIL.beginPath();
  PENCIL.moveTo(188, 50);
  PENCIL.lineTo(186, 50);
  PENCIL.lineTo(180, 56);
  PENCIL.lineTo(182, 56);
  PENCIL.fill();

  // right eye
  PENCIL.beginPath();
  PENCIL.moveTo(190, 50);
  PENCIL.lineTo(192, 50);
  PENCIL.lineTo(198, 56);
  PENCIL.lineTo(196, 56);
  PENCIL.fill();
  PENCIL.beginPath();
  PENCIL.moveTo(198, 50);
  PENCIL.lineTo(196, 50);
  PENCIL.lineTo(190, 56);
  PENCIL.lineTo(192, 56);
  PENCIL.fill();
}

function drawMouth() {
  PENCIL.lineWidth = 2;
  PENCIL.beginPath();
  PENCIL.arc(189, 63, 3, 0, Math.PI * 2);
  PENCIL.stroke();
}

const DRAW_PARTS = {
  drawGallowsStructure: function() {
    PENCIL.fillStyle = 'black';
    // vertical line ->
    PENCIL.fillRect(100, 0, 2, 200);
    // horizontal line ->
    PENCIL.fillRect(100, 0, 90,2);
    // head rope ->
    PENCIL.fillRect(188, 2, 2, 40);
  },
  drawHead: function() {
    PENCIL.fillStyle = '#ffe0bd';
    PENCIL.lineWidth = 4;

    PENCIL.beginPath();
    PENCIL.arc(189, 57, 15, 0, Math.PI * 2);
    PENCIL.stroke();
    PENCIL.fill();
  },
  drawBody: function() {
    PENCIL.fillStyle = 'black';
    PENCIL.fillRect(188, 72, 2, 70);
  },
  drawRightArm: function() {
    PENCIL.beginPath();
    PENCIL.moveTo(188, 72);
    PENCIL.lineTo(190, 72);
    PENCIL.lineTo(218, 120);
    PENCIL.lineTo(216, 120);
    PENCIL.fill();
  },
  drawLeftArm: function() {
    PENCIL.beginPath();
    PENCIL.moveTo(190, 72);
    PENCIL.lineTo(188, 72);
    PENCIL.lineTo(158, 120);
    PENCIL.lineTo(160, 120);
    PENCIL.fill();
  },
  drawRightLeg: function() {
    PENCIL.beginPath();
    PENCIL.moveTo(188, 142);
    PENCIL.lineTo(190, 142);
    PENCIL.lineTo(200, 170);
    PENCIL.lineTo(198, 170);
    PENCIL.fill();
  },
  drawLeftLeg: function() {
    PENCIL.beginPath();
    PENCIL.moveTo(190, 142);
    PENCIL.lineTo(188, 142);
    PENCIL.lineTo(178, 170);
    PENCIL.lineTo(180, 170);
    PENCIL.fill();
  },
  drawDeadFace: function() {
    drawEyes();
    drawMouth();
  },
};

const DRAW_PARTS_FUNCTIONS = Object.values(DRAW_PARTS);
for (let index = 0; index < DRAW_PARTS_FUNCTIONS.length; index++) {
  DRAW_PARTS_FUNCTIONS[index]();
}

export default DRAW_PARTS;