// https://i.pinimg.com/originals/96/17/6a/96176a1cc639c02b465d40f3e0d85df8.png
/*
var canvas = document.getElementById('canvas1');
context = canvas.getContext('2d');
base_image = new Image();

make_base();

function make_base() {
  console.log("here");
  // base_image = new Image();
  base_image.src = 'spaceship.png';
  // base_image.id = "spaceship";
  base_image.onload = function() {
    context.drawImage(base_image, 0, 0);
  }
}
*/
var x_location = 20;
var y_location = 300;

setInterval(onTimer, 500);

var spaceship = document.getElementById("spaceship");
function on_up() {
  console.log("up");
  if (y_location < 375) {
    return;
  }
  y_location = y_location - 50;
  spaceship.style.top = y_location + "px";
}
function on_down() {
  y_location = y_location + 50;
  if (y_location > 600) {
    return;
  }
  spaceship.style.top = y_location + "px";
  console.log("down");
}
function on_left() {
  x_location = x_location - 50;
  if (x_location < 20) {
    return;
  }
  spaceship.style.left = x_location + "px";
  console.log("left");
}
function on_right() {
  if (x_location > 700) {
    return;
  }
  x_location = x_location + 50;
  spaceship.style.left = x_location + "px";
  console.log("right");
}
function reset() {
  x_location = 20;
  y_location = 300;
  spaceship.style.left = x_location + "px";
  spaceship.style.top = y_location + "px";
}
var image = 1;
function onTimer() {
  if (image == 1) {
    image = 2;
    spaceship.src = "spaceship2.png";
  }
  else {
    spaceship.src = "spaceship1.png";
    image = 1;
  }
}