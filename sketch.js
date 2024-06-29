let misiu;
let kolor;

function preload() {
  misiu = loadImage('misiu.png'); // załaduj obrazek misia
}

function setup() {
  kolor = color(255, 255, 255); // biały kolor na start
  createCanvas(1920, 1080); // stwórz płótno
  stroke('red'); // czerwony kolor linii
  strokeWeight(40); // grubość linii
  let button = createButton("i'm done");
  button.position(960, 900);

  // Call repaint() when the button is pressed.
  button.mousePressed(repaint);

}

function draw() {
  if (mouseIsPressed) {
    stroke(kolor);
    point(mouseX, mouseY);
    if (dist(mouseX, mouseY, 450, 50) < 20) {
      kolor = color(255,51,102); //rozowy kolor
    }
    if (dist(mouseX, mouseY, 450, 150) < 20) {
      kolor = color(139,110,104); // brazowy kolor
    }
    if (dist(mouseX, mouseY, 450, 100) < 20) {
      kolor = color(243,236,219) // bezowy kolor
    }
  }

  // Oblicz skalę, aby obrazek był widoczny w całości na płótnie
  let scale = min(width / misiu.width, height / misiu.height);

  // Oblicz nowe wymiary obrazka
  let newWidth = misiu.width * scale;
  let newHeight = misiu.height * scale;

  // Oblicz pozycję, aby wyśrodkować obrazek na płótnie
  let x = (width - newWidth) / 2;
  let y = (height - newHeight) / 2;

  // Rysuj obrazek misia na wyliczonej pozycji i w wyliczonych wymiarach
  image(misiu, x, y, newWidth, newHeight);

  // Rysuj punkty kolorów
  stroke('#FF3366');
  point(450, 50);
  stroke('#f3ecdb');
  point(450, 100);
  stroke('#8b6e68');
  point(450, 150);

}


function repaint() {
  window.location.href="https://postupalskasasha.github.io/zirochka/"

}
