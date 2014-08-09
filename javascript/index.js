function init() {
	var canvas = document.getElementById('rocket'),
		stage = new createjs.Stage(canvas),
		conterX = canvas.width/2,
		conterY = canvas.height/2,
		w = window.innerWidth,
		h = window.innerHeight;

	if(typeof w != 'number') {
	    if(document.compatMode == 'CSS1Compat' ) {
	        w = document.documentElement.clientWidth;
	        h = document.documentElement.clientHeight;
	    } else {
	        w = document.body.clientWidth;
	        h = document.body.clientHeight;
	    }
	}
	canvas.width = w;
	canvas.height = h;

	var shape = new createjs.Bitmap('images/rocket.png');
	shape.x = conterX;
	shape.y = conterY;
	shape.regX = 11;
	shape.regY = 11;

	stage.addChild(shape);
	createjs.Ticker.setFPS(30);
 	createjs.Ticker.addEventListener('tick',function(){

  		var difX = stage.mouseX - shape.x;
  		var difY = stage.mouseY - shape.y;
	  	shape.x += difX/5;
	 	shape.y += difY/5;


		shape.rotation = Math.atan2(difY, difX) * 180/ Math.PI ;
	 	stage.update();
	 });
}