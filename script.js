window.onload = function() {
  document.addEventListener('keydown', changeDirection);
  setInterval(loop, 1000/60); // 60 FPS
}

var
  canv 				= document.getElementById('mc'), // canvas
