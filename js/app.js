console.log("Cute Robot Dancers!");

class Robot {
	constructor(name) {
		this.name = name
		this.coolness = 0
	}
	left() {
		//console.log(`Step to the left`);
		if (game.player1.name === 'The boyB' && game.leftKey1 === true) {
			$("#move-pl1").replaceWith('<img id="move-pl1" src="https://i.imgur.com/FlhUyk3.gif" height="300px" width:"175px/>');
		} else if (game.player1.name === 'The girlB' && game.leftKey1 === true) {
			$("#move-pl1").replaceWith('<img id="move-pl1" src="https://i.imgur.com/cBhKQxA.gif" height="300px" width:"175px/>');
		}
		if (game.player2.name === 'The boyB' && game.leftKey2 === true) {
			$("#move-pl2").replaceWith('<img id="move-pl2" src="https://i.imgur.com/FlhUyk3.gif" height="300px" width:"175px/>');
		} else if (game.player2.name === 'The girlB' && game.leftKey2 === true) {
			$("#move-pl2").replaceWith('<img id="move-pl2" src="https://i.imgur.com/cBhKQxA.gif" height="300px" width:"175px/>');
		}
	}
	right() {
		//console.log(`step to the right`);
		if (game.player1.name === 'The boyB' && game.rightKey1 === true) {
			$("#move-pl1").replaceWith('<img id="move-pl1" src="https://i.imgur.com/pgvyTKC.gif" height="300px" width:"175px/>');
		} else if (game.player1.name === 'The girlB' && game.rightKey1 === true) {
			$("#move-pl1").replaceWith('<img id="move-pl1" src="https://i.imgur.com/gGa4WMX.gif" height="300px" width:"175px/>');
		}
		if (game.player2.name === 'The boyB' && game.rightKey2 === true) {
			$("#move-pl2").replaceWith('<img id="move-pl2" src="https://i.imgur.com/pgvyTKC.gif" height="300px" width:"175px/>');
		} else if (game.player2.name === 'The girlB' && game.rightKey2 === true) {
			$("#move-pl2").replaceWith('<img id="move-pl2" src="https://i.imgur.com/gGa4WMX.gif" height="300px" width:"175px/>');
		}
	}
	toeTouch() {
		//console.log(`Fabulous toe touch!`);
		if (game.player1.name === 'The boyB' && game.downKey1 === true) {
			$("#move-pl1").replaceWith('<img id="move-pl1" src="https://i.imgur.com/aGpa5Pk.gif" height="300px" width:"200"px/>');
			console.log('Toe Touch was pressed');
		} else if (game.player1.name === 'The girlB' && game.downKey1 === true) {
			$("#move-pl1").replaceWith('<img id="move-pl1" src="https://i.imgur.com/lH6Uxwb.gif" height="300px" width:"175px/>');
		}
		if (game.player2.name === 'The boyB' && game.downKey2 === true) {
			$("#move-pl2").replaceWith('<img id="move-pl2" src="https://i.imgur.com/aGpa5Pk.gif" height="300px" width:"200"px/>');
			console.log('Toe Touch was pressed');
		} else if (game.player2.name === 'The girlB' && game.downKey2 === true) {
			$("#move-pl2").replaceWith('<img id="move-pl2" src="https://i.imgur.com/lH6Uxwb.gif" height="300px" width:"175px/>');
		}
	}
	handsUp() {
		//console.log('Hands Up!');
		if (game.player1.name === 'The boyB' && game.upKey1 === true) {
			$("#move-pl1").replaceWith('<img id="move-pl1" src="https://i.imgur.com/nDnTz3V.gif" height="300px" width:"200"px/>');
			console.log('Hands up was pressed');
		} else if (game.player1.name === 'The girlB' && game.upKey1 === true) {
			$("#move-pl1").replaceWith('<img id="move-pl1" src="https://i.imgur.com/nnYUW2b.gif" height="300px" width:"175px/>');
		}
		if(game.player2.name === 'The boyB' && game.upKey2 === true) {
			$("#move-pl2").replaceWith('<img id="move-pl2" src="https://i.imgur.com/nDnTz3V.gif" height="300px" width:"200"px/>');
			console.log('Hands up was pressed');
		} else if (game.player2.name === 'The girlB' && game.upKey2 === true) {
			$("#move-pl2").replaceWith('<img id="move-pl2" src="https://i.imgur.com/nnYUW2b.gif" height="300px" width:"175px/>');
		}
	}
}

const game = {
	player1:'',
	player2:'',
	arrows:['left', 'up','right','down'],
	arrowDirection:'',
	leftKey1:false,
	upKey1: false,
	rightKey1: false,
	downKey1: false,
	leftKey2:false,
	upKey2: false,
	rightKey2: false,
	downKey2: false,
	timer: 0,
	timerID:'',
	chooseCharacter() {
		if (event.target.id === 'girlB') {
   			const girlBot = new Robot('The girlB')
    		if (this.player1 === '') {
    			this.player1 = girlBot;
    			//console.log(this.player1);
    		} else if (this.player1 !== '') {
    			this.player2 = girlBot;
    			//console.log(this.player2);
    		}
    	}	
    	if (event.target.id === 'boyB') {
	   		const boyBot = new Robot('The boyB')
	    	if (this.player1 === '') {
    			this.player1 = boyBot;
    			//console.log(this.player1);
    		} else if (this.player1 !== '') {
    			this.player2 = boyBot;
    			//console.log(this.player2);
    		}
    	}
    	if (this.player1 !== '' && this.player2 !== '') {
    		$('.characters-box div').hide("puff");
    		$('.metrics-box').css('display', 'flex');
    		$('.players-box').css('display', 'flex');
    		$('#pl1').css('display', 'inline-flex');
    		$('#pl2').css('display', 'inline-flex');
    		$('.display').css('display', 'flex');
    		this.assignPlayerBot();
    		this.startTime();
    	}
	},
	assignPlayerBot() {
		if (this.player1.name === 'The girlB') {
			$('#pl1').append('<img id="move-pl1" src="https://i.imgur.com/DAf01TN.gif" height="300px" width:"175px/>');
			console.log($("#pl1"));
		} else if (this.player1.name === 'The boyB') {
			$('#pl1').append('<img id="move-pl1" src="https://i.imgur.com/70OM2rc.gif" height="300px" width:"175px/>');
		}
		if (this.player2.name === 'The girlB') {
			$('#pl2').append('<img id="move-pl2" src="https://i.imgur.com/DAf01TN.gif" height="300px" width:"175px/>');
		} else if (this.player2.name === 'The boyB') {
			$('#pl2').append('<img id="move-pl2" src="https://i.imgur.com/70OM2rc.gif" height="300px" width:"175px/>');
		}
	},
	startTime(){
	this.timerID = setInterval( () => {
			this.timer ++;
			this.generateArrows(this.arrows);
			$('#pl1Metric').text(`Coolness level: ${this.player1.coolness}`);
			$('#pl2Metric').text(`Coolness level: ${this.player2.coolness}`);
			} , 700)
	},
	playAudio() { 
  		document.getElementById('audio').play();
	}, 
	pauseAudio() { 
  		document.getElementById('audio').pause(); 
	},
	generateArrows(arr) {
		//console.log("generating arrows");
		//console.log(this.player1);
		for (let i = 0; i <1; i++) {
			let indexNum = Math.floor(Math.random() * 3)
			this.arrowDirection = arr[indexNum]
			this.displayArrows();
			this.playAudio();
		}			
	}, 
	displayArrows() {
		//console.log(this.arrowDirection);
		let whichArrow;
		let $element = $('#arrows-display');
		$element.fadeIn();

		if (this.arrowDirection === "left") {
			whichArrow = '⇦'
		} else if (this.arrowDirection === "up") {
			whichArrow = '⇧'
		} else if (this.arrowDirection === "right") {
			whichArrow = '⇨'
		} else if (this.arrowDirection === "down") {
			whichArrow = '⇩'
		} 

		$element.text(whichArrow);
		$element.fadeOut();
	},
	player1Match() {
		if (this.arrowDirection === "left" && this.leftKey1 === true && this.player1.coolness !== 10) {
			this.player1.coolness ++;
			console.log("Match!");
		} else if (this.arrowDirection === "left" && this.leftKey1 === false && this.player1.coolness !== 0) {
			this.player1.coolness--;
			console.log("wrong!");
		}
		if (this.arrowDirection === "up" && this.upKey1 === true && this.player1.coolness !== 10) {
			this.player1.coolness ++;
			console.log("Match!");
		} else if (this.arrowDirection === "up" && this.upKey1 === false && this.player1.coolness !== 0) {
			this.player1.coolness--;
			console.log("wrong!");
		}
		if (this.arrowDirection === "right" && this.rightKey1 === true && this.player1.coolness !== 10) {
			this.player1.coolness ++;
			console.log("Match!");
		} else if (this.arrowDirection === "right" && this.rightKey1 === false && this.player1.coolness !== 0) {
			this.player1.coolness--;
			console.log("wrong!");
		}
		if (this.arrowDirection === "down" && this.downKey1 === true && this.player1.coolness !== 10) {
			this.player1.coolness++;
			console.log("Match!");
		} else if (this.arrowDirection === "down" && this.downKey1 === false && this.player1.coolness !== 0) {
			this.player1.coolness--;
			console.log("wrong pl2!");
		}
		this.winBattle();
	},
	player2Match() {
		if (this.arrowDirection === "left" && this.leftKey2 === true && this.player2.coolness !== 10) {
			this.player2.coolness ++;
			//console.log("Match pl2!");
		} else if (this.arrowDirection === "left" && this.leftKey2 === false && this.player2.coolness !== 0) {
			this.player2.coolness--;
			//console.log("wrong pl2!");
		}
		if (this.arrowDirection === "up" && this.upKey2 === true && this.player2.coolness !== 10) {
			this.player2.coolness ++;
			//console.log("Match pl2!");
		} else if (this.arrowDirection === "up" && this.upKey2 === false && this.player2.coolness !== 0) {
			this.player2.coolness--;
			//console.log("wrong pl2!");
		}
		if (this.arrowDirection === "right" && this.rightKey2 === true && this.player2.coolness !== 10) {
			this.player2.coolness ++;
			//console.log("Match pl2!");
		} else if (this.arrowDirection === "right" && this.rightKey2 === false && this.player2.coolness !== 0) {
			this.player2.coolness--;
			//console.log("wrong pl2!");
		}
		if (this.arrowDirection === "down" && this.downKey2 === true && this.player2.coolness !== 10) {
			this.player2.coolness ++;
			//console.log("Match pl2!");
		} else if (this.arrowDirection === "down" && this.downKey2 === false && this.player2.coolness !== 0) {
			this.player2.coolness--;
			//console.log("wrong pl2!");
		}

		this.winBattle();
	},
	winBattle() {
		console.log("calling winBattle");
		//clearInterval when player reaches 10
		if (game.player1.coolness === 10) {
			//console.log("player1 won");
			$('.metrics-box').css('display', 'none');
    		$('.players-box').css('display', 'none');
    		$('#pl1').css('display', 'none');
    		$('#pl2').css('display', 'none');
    		$('.display').css('display', 'none');
    		$("#player1-wins").css('display','flex')
    		this.pauseAudio();
    		clearInterval(this.timerID);
		}
		if (game.player2.coolness === 10) {
			$('.metrics-box').css('display', 'none');
    		$('.players-box').css('display', 'none');
    		$('#pl1').css('display', 'none');
    		$('#pl2').css('display', 'none');
    		$('.display').css('display', 'none');
    		$("#player2-wins").css('display','flex')
    		clearInterval(this.timerID);
    		this.pauseAudio();
		}

	}

}

//jQuery 
//start button
$('#start').on('click', (e)=> {
	console.log('Let the games begin!');
	$('h2').hide();
	$('img').hide();
	$('.intro').hide();
	$('.characters-box').css('display','flex');
})

//choosing characters
$('.characters-box div').on('click', ()=> {
	console.log('Character clicked');
	game.chooseCharacter();
})
//key listeners for player moves
$('body').on('keydown', (event) => {
	if (['a'].includes(event.key)) {
		game.leftKey1 = true;
		game.player1Match();
    	game.player1.left();
  	}
  	if (['d'].includes(event.key)) {
  		game.rightKey1 = true;
		game.player1Match();
    	game.player1.right();
  	}
  	if (['w'].includes(event.key)) {
  		game.upKey1 = true;
		game.player1Match();
    	game.player1.handsUp();
  	}
  	if (['s'].includes(event.key)) {
  		game.downKey1 = true;
		game.player1Match();
    	game.player1.toeTouch();
  	}
  	if (['j'].includes(event.key)) {
  		game.leftKey2 = true;
		game.player2Match();
    	game.player2.left();
  	}
  	if (['l'].includes(event.key)) {
  		game.rightKey2 = true;
		game.player2Match();
    	game.player2.right();
  	}
  	if (['i'].includes(event.key)) {
  		game.upKey2 = true;
		game.player2Match();
    	game.player2.handsUp();
  	}
  	if (['k'].includes(event.key)) {
  		game.downKey2 = true;
		game.player2Match();
    	game.player2.toeTouch();
  	}
})


$('body').on('keyup', (event) => {
	if (['a'].includes(event.key)) {
		game.leftKey1 = false;
  	}
  	if (['d'].includes(event.key)) {
  		game.rightKey1 = false;
  	}
  	if (['w'].includes(event.key)) {
  		game.upKey1 = false;
  	}
  	if (['s'].includes(event.key)) {
  		game.downKey1 = false;
  	}
  	if (['j'].includes(event.key)) {
  		game.leftKey2 = false;
  	}
  	if (['l'].includes(event.key)) {
  		game.rightKey2 = false;
  	}
  	if (['i'].includes(event.key)) {
  		game.upKey2 = false;
  	}
  	if (['k'].includes(event.key)) {
  		game.downKey2 = false;
  	}
})

