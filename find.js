var canvas = document.querySelector('canvas#find');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight*0.9;

var ctx = canvas.getContext('2d');



function update(progress,e) {
    
};
function draw() {
};

function loop(timestamp) {
  var progress = timestamp - lastRender;

  update(progress);
  draw();

  lastRender = timestamp;
  window.requestAnimationFrame(loop);
};
var lastRender = 0;
window.requestAnimationFrame(loop);