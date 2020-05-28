var CANVAS = document.getElementById('canvas');
var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;
var mouseX = (window.innerWidth - SCREEN_WIDTH -10);
var mouseY = SCREEN_HEIGHT + 10;

function Game() {
  //REGISTER EVENT LISTENER
  document.addEventListener('mousemove', function (event) {
    mouseX = event.clientX - (window.innerWidth - SCREEN_WIDTH) * .5;
    mouseY = event.clientY - (window.innerHeight - SCREEN_HEIGHT) * .5;
  }, false);

  // MAP
  this.map = new Map()
  map.create()

  //PLAYER
  this.player = new Player()

  //START GAME
  setInterval(function () {
    //RESPONSIVE MAP
    if (SCREEN_WIDTH != window.innerWidth || SCREEN_HEIGHT != window.innerHeight) {
      SCREEN_WIDTH = window.innerWidth;
      SCREEN_HEIGHT = window.innerHeight;
      // console.log(SCREEN_WIDTH)
      map.resize()
    }
    //PLAYER MOVES
    player.create()
  }, 1000 / 60);

}
