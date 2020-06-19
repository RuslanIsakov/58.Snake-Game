﻿window.onload = function() {
  document.addEventListener('keydown', changeDirection);
  setInterval(loop, 1000/60); // 60 FPS
}

var
  canv 				= document.getElementById('mc'), // canvas
 ctx					= canv.getContext('2d'), // 2d context
  gs = fkp			= false, // game started && first key pressed (initialization states)
  speed = baseSpeed 	= 3, // snake movement speed
  xv = yv				= 0, // velocity (x & y)
 px 					= ~~(canv.width) / 2, // player X position
  py 					= ~~(canv.height) / 2, // player Y position
pw = ph				= 20, // player size
  aw = ah				= 20, // apple size
  apples				= [], // apples list
trail				= [], // tail elements list (aka trail)
  tail 				= 100, // tail size (1 for 10)
  tailSafeZone		= 20, // self eating protection for head zone (aka safeZone)
cooldown			= false, // is key in cooldown mode
  score				= 0; // current score

// game main loop
function loop()
{
  // logic
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canv.width, canv.height);
 // force speed
  px += xv;
  py += yv;
 // teleports
  if( px > canv.width )
    {px = 0;}
if( px + pw < 0 )
    {px = canv.width;}
if( py + ph < 0 )
    {py = canv.height;}

  if( py > canv.height )
    {py = 0;}
// paint the snake itself with the tail elements
  ctx.fillStyle = 'lime';
for( var i = 0; i < trail.length; i++ )
  {
    ctx.fillStyle = trail[i].color || 'lime';
    ctx.fillRect(trail[i].x, trail[i].y, pw, ph);
  }
 trail.push({x: px, y: py, color: ctx.fillStyle});

  // limiter
  if( trail.length > tail )
  {
    trail.shift();
  }
// eaten
  if( trail.length > tail )
  {
    trail.shift();
  }
