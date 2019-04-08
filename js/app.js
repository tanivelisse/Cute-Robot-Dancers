console.log("Cute Robot Dancers!");

class Robot {
	constructor(name) {
		this.name = name
		this.coolness = 0
	}
	left() {
		console.log(`Step to the left`);
		if(game.player1.name === 'The boyB'){
			$("#pl1").replaceWith('<img src="https://i.imgur.com/FlhUyk3.gif" height="300px" width:"175px/>');
		}
	}
	right() {
		console.log(`step to the right`);
		if(game.player1.name === 'The boyB'){
			$("#pl1").replaceWith('<img src="https://i.imgur.com/pgvyTKC.gif" height="300px" width:"175px/>');
		}
	}
	spin() {
		console.log(`I'm spinning!`);
		if(game.player1.name === 'The boyB'){
			$("#pl1").replaceWith('<img src="https://i.imgur.com/aGpa5Pk.gif" height="300px" width:"200"px/>');
		}
	}
	jump() {
		console.log('jump jump');
		if(game.player1.name === 'The boyB'){
			$("#pl1").replaceWith('<img src="https://i.imgur.com/nDnTz3V.gif" height="300px" width:"200"px/>');
		}
	}
}

const game = {
	player1:'',
	player2:'',
	arrows:['left', 'up','right','down'],
	arrowDirection:'',
	leftArrow:false,
	upArrow: false,
	rightArrow: false,
	downArrow: false,
	leftArrow2:false,
	upArrow2: false,
	rightArrow2: false,
	downArrow2: false,
	timer: 0,
	timerID:'',
	chooseCharacter() {
		if (event.target.id === 'girlB') {
   		const girlBot = new Robot('The girlB')
    		if (this.player1 === '') {
    			this.player1 = girlBot;
    			//console.log(this.player1);
    		} else if(this.player1 !== ''){
    			this.player2 = girlBot;
    			//console.log(this.player2);
    		}
    	}	
    	if (event.target.id === 'boyB'){
	   		const boyBot = new Robot('The boyB')
	    	if(this.player1 === '') {
    			this.player1 = boyBot;
    			//console.log(this.player1);
    		} else if(this.player1 !== ''){
    			this.player2 = boyBot;
    			//console.log(this.player2);
    		}
    	}
    	if (this.player1 !== '' && this.player2 !== '') {
    		$('.characters-box div').hide("puff");
    		$('.metrics-box').css('display', 'flex')
    		$('.players-box').css('display', 'flex')
    		$('#pl1').css('display', 'inline-flex')
    		$('#pl2').css('display', 'inline-flex')
    		$('.display').css('display', 'flex');
    		this.assignPlayerBot()
    		this.startTime();
    	}
	},
	assignPlayerBot() {
		if (this.player1.name === 'The girlB') {
			$('#pl1').append('<img src="https://i.imgur.com/DAf01TN.gif" height="300px" width:"175px/>');
		}else if (this.player1.name === 'The boyB') {
			$('#pl1').append('<img src="https://i.imgur.com/70OM2rc.gif" height="300px" width:"175px/>');
		}
		if (this.player2.name === 'The girlB') {
			$('#pl2').append('<img src="https://i.imgur.com/DAf01TN.gif" height="300px" width:"175px/>');
		}else if (this.player2.name === 'The boyB') {
			$('#pl2').append('<img src="https://i.imgur.com/70OM2rc.gif" height="300px" width:"175px/>');
		}
	},
	startTime(){
	this.timerID = setInterval( () => {
			this.timer ++;
			this.generateArrows(this.arrows);
			$('#pl1Metric').text(`Coolness level: ${this.player1.coolness}`)
			$('#pl2Metric').text(`Coolness level: ${this.player2.coolness}`)
			} , 3000)
	},
	generateArrows(arr) {//arrows to be displayed at bottom
		console.log("generating arrows");
		for(let i = 0; i <1; i++) {
			let indexNum = Math.floor(Math.random() * 3)
			this.arrowDirection = arr[indexNum]
			this.displayArrows();
		}			
	}, 
	displayArrows() {
			console.log(this.arrowDirection);
		if (this.arrowDirection === "left"){
			$('#arrows-display').append('⇦')
		}else if (this.arrowDirection === "up"){
			$('#arrows-display').append('⇧')
		}else if (this.arrowDirection === "right"){
			$('#arrows-display').append('⇨')
		} else if (this.arrowDirection === "down"){
			$('#arrows-display').append('⇩')
		}
	},
	playerMATCH() {
		//IF PLAYER PRESSES KEY WHEN ARROW IS DISPLAYED AND IS CORRECT KEY IS A MATCH
		//IF IS INCORRECT KEY LOWER SCORE
		if(this.arrowDirection === "left" && this.leftArrow === true && this.player1.coolness !== 10) {
			this.player1.coolness ++;
			this.leftArrow = false;
			console.log("Match!");
		} else if(this.arrowDirection === "left" && this.leftArrow === false && this.player1.coolness !== 0) {
			this.player1.coolness--;
			console.log("wrong!");
		}
		if(this.arrowDirection === "up" && this.upArrow === true && this.player1.coolness !== 10) {
			this.player1.coolness ++;
			this.upArrow = false;
			console.log("Match!");
		} else if(this.arrowDirection === "up" && this.upArrow === false && this.player1.coolness !== 0) {
			this.player1.coolness--;
			console.log("wrong!");
		}
		if(this.arrowDirection === "right" && this.rightArrow === true && this.player1.coolness !== 10) {
			this.player1.coolness ++;
			this.rightArrow = false;
			console.log("Match!");
		} else if(this.arrowDirection === "right" && this.rightArrow === false && this.player1.coolness !== 0) {
			this.player1.coolness--;
			console.log("wrong!");
		}
		if(this.arrowDirection === "down" && this.downArrow === true && this.player1.coolness !== 10) {
			this.player1.coolness++;
			this.downArrow = false
			console.log("Match!");
		} else if(this.arrowDirection === "down" && this.downArrow === false && this.player1.coolness !== 0) {
			this.player1.coolness--;
			console.log("wrong pl2!");
		}
		if(this.arrowDirection === "left" && this.leftArrow2 === true && this.player2.coolness !== 10) {
			this.player2.coolness ++;
			this.leftArrow2 = false;
			console.log("Match pl2!");
		} else if(this.arrowDirection === "left" && this.leftArrow2 === false && this.player2.coolness !== 0) {
			this.player2.coolness--;
			console.log("wrong pl2!");
		}
		if(this.arrowDirection === "up" && this.upArrow2 === true && this.player2.coolness !== 10) {
			this.player2.coolness ++;
			this.upArrow2 = false;
			console.log("Match pl2!");
		} else if(this.arrowDirection === "up" && this.upArrow2 === false && this.player2.coolness !== 0) {
			this.player2.coolness--;
			console.log("wrong pl2!");
		}
		if(this.arrowDirection === "right" && this.rightArrow2 === true && this.player2.coolness !== 10) {
			this.player2.coolness ++;
			this.rightArrow2 = false;
			console.log("Match pl2!");
		} else if(this.arrowDirection === "right" && this.rightArrow2 === false && this.player2.coolness !== 0) {
			this.player2.coolness--;
			console.log("wrong pl2!");
		}
		if(this.arrowDirection === "down" && this.downArrow2 === true && this.player2.coolness !== 10) {
			this.player2.coolness ++;
			this.downArrow2 = false;
			console.log("Match pl2!");
		} else if(this.arrowDirection === "down" && this.downArrow2 === false && this.player2.coolness !== 0) {
			this.player2.coolness--;
			console.log("wrong pl2!");
		}
		this.winBattle();
	},
	winBattle() {
		//clearInterval when player reaches 10
		if (game.player1.coolness === 11){
			clearInterval(this.timerID);
		}
		if (game.player2.coolness === 11){
			clearInterval(this.timerID)
		}

	}

}

//jQuery 
//start button
$('#start').on('click', (e)=> {
	console.log('Let the games begin!');
	$('h2').hide("puff");
	$('img').hide("puff");
	$('.intro').hide("puff");
	$('.characters-box').css('display','flex');
})

//choosing characters
$('.characters-box div').on('click', ()=>{
	console.log('Character clicked');
	game.chooseCharacter();
})
//key listeners for player moves
$('body').on('keypress', (event) => {
	if(['a'].includes(event.key)) {
		game.leftArrow= true;
		game.playerMATCH();
    	game.player1.left();
  	}
  	if(['d'].includes(event.key)) {
  		game.rightArrow= true;
		game.playerMATCH();
    	game.player1.right();
  	}
  	if(['w'].includes(event.key)) {
  		game.upArrow= true;
		game.playerMATCH();
    	game.player1.jump();
  	}
  	if(['s'].includes(event.key)) {
  		game.downArrow= true;
		game.playerMATCH();
    	game.player1.spin();
  	}
  	if(['j'].includes(event.key)) {
  		game.leftArrow2= true;
		game.playerMATCH();
    	game.player2.left();
  	}
  	if(['l'].includes(event.key)) {
  		game.rightArrow2= true;
		game.playerMATCH();
    	game.player2.right();
  	}
  	if(['w'].includes(event.key)) {
  		game.leftArrow2= true;
		game.playerMATCH();
    	game.player2.jump();
  	}
  	if(['k'].includes(event.key)) {
  		game.leftArrow2= true;
		game.playerMATCH();
    	game.player2.spin();
  	}
})



