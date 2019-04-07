console.log("Robot Street Dancer!");

class Robot {
	constructor(name) {
		this.name = name
		this.coolness = 10
	}
	left() {
		console.log(`Step to the left`);
	}
	right() {
		console.log(`step to the right`);
	}
	spin() {
		console.log(`I'm spinning!`);
	}
	jump() {
		console.log('jump jump');
	}
}

const game = {
	player1:'',
	player2:'',
	keysPressed: '',
	timer: 0,
	timerID:'',
	chooseCharacter() {
		console.log('chose x character');
		if (event.target.id === 'girlB') {
   		const girlBot = new Robot('The girlB')
    		if (this.player1 === '') {
    			this.player1 = girlBot;
    			console.log(this.player1);
    		} else if(this.player1 !== ''){
    			this.player2 = girlBot;
    			console.log(this.player2);
    		}
    	}	
    	if (event.target.id === 'boyB'){
	   		const boyBot = new Robot('The boyB')
	    	if(this.player1 === '') {
    			this.player1 = boyBot;
    			console.log(this.player1);
    		} else if(this.player1 !== ''){
    			this.player2 = boyBot;
    			console.log(this.player2);
    		}
    	}
    	if (this.player1 !== '' && this.player2 !== '') {
    		$('.characters-box div').hide("puff");
    		$('.metrics-box').css('display', 'flex')
    		$('.players-box').css('display', 'flex')
    		$('#pl1').css('display', 'inline-flex')
    		$('#pl2').css('display', 'inline-flex')
    		$('.arrows-display').css('display', 'flex');
    		this.assignPlayerBot()
    		this.startTime();
    	}
	},
	assignPlayerBot() {
		console.log("assigning player pic");
		console.log(this.player1.name);
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
				//arrown to be displayed at bottom
			console.log("generating arrows");
			let arrows = ['left', 'up','right','down'];
			//console.log(arrows);
			for(let i = 0; i < arrows.length; i++) {
				//console.log(arrows.length);
				let indexNum = Math.floor(Math.random() * 3)+1
				//console.log(indexNum);
				arrowDirection = arrows[indexNum]
				console.log(arrowDirection);
				}
			
			} , 1000)
	}, 
	loweringCoolness() {

	},
	winBattle() {

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
//key lsiteners for movements
$('body').on('keypress', (event) => {
	//console.log(`${event.target} has been pressed`);
	if(['a'].includes(event.key)) {
    game.player1.left();
  	}
  	if(['d'].includes(event.key)) {
    game.player1.right();
  	}
  	if(['w'].includes(event.key)) {
    game.player1.jump();
  	}
  	if(['s'].includes(event.key)) {
    game.player1.spin();
  	}
  	if(['j'].includes(event.key)) {
    game.player2.left();
  	}
  	if(['l'].includes(event.key)) {
    game.player2.right();
  	}
  	if(['w'].includes(event.key)) {
    game.player2.jump();
  	}
  	if(['k'].includes(event.key)) {
    game.player2.spin();
  	}
})



