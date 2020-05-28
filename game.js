var CANVAS = document.getElementById('canvas');
var context = this.canvas.getContext('2d')

var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;
var mouseX = (window.innerWidth - SCREEN_WIDTH -10);
var mouseY = SCREEN_HEIGHT + 10;

var enemies = [];

function Game() {
  //REGISTER EVENT LISTENER
  document.addEventListener('mousemove', function (event) {
    mouseX = event.clientX - (window.innerWidth - SCREEN_WIDTH) * .5;
    mouseY = event.clientY - (window.innerHeight - SCREEN_HEIGHT) * .5;
  }, false);

  // MAP
  this.map = new Map()
  this.map.create()

  //PLAYER
  this.player = new Player()

  //ENEMIES QUANTITY
  for (let i = 0; i < 30; i++) {
    const x = Math.random() * (SCREEN_WIDTH*2);
    const y = Math.random() * -SCREEN_HEIGHT;
    this.enemies.push(new Enemy({ x, y }));
  }

  //START GAME
  setInterval(function () {
    //RESPONSIVE MAP
    if (SCREEN_WIDTH != window.innerWidth || SCREEN_HEIGHT != window.innerHeight) {
      SCREEN_WIDTH = window.innerWidth;
      SCREEN_HEIGHT = window.innerHeight;
      // console.log(SCREEN_WIDTH)
      map.resize()
    }
    //ELEMENTS MOVES
    context.clearRect(0, 0, CANVAS.width, this.CANVAS.height);
    this.enemies.forEach ( enemy => {
      enemy.create();
    })
    this.player.create()
  }, 10);

}
