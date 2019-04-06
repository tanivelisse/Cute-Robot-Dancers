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
	twerk() {
		console.log(`shake it baby`);
	}
	backFlip() {
		console.log(`backflip`);
	}
	breakDance() {
		console.log(`old school!`);
	}
}


const game = {
	player1:'',
	player2:'',
	keysPressed: '',
	chooseCharacter() {
		console.log('chose x character');
		if (event.target.id === 'yellowB') {
   		const yellowBot = new Robot('The yellowB')
    		if (this.player1 === '') {
    			this.player1 = yellowBot;
    			console.log(this.player1);
    		} else if(this.player1 !== ''){
    			this.player2 = yellowBot;
    			console.log(this.player2);
    		}
    	}	
    	if (event.target.id === 'rainbowB'){
	   		const rainbowBot = new Robot('The rainbowB')
	    	if(this.player1 === '') {
    			this.player1 = rainbowBot;
    			console.log(this.player1);
    		} else if(this.player1 !== ''){
    			this.player2 = rainbowBot;
    			console.log(this.player2);
    		}
    	}
    	if (this.player1 !== '' && this.player2 !== '') {
    		$('.characters div').hide("puff");
    		$('.dmvs div').css('display', 'inline-flex')
    	}
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
	$('#start').hide("puff");
	$('#title').hide("puff");
	$('.characters div').css('display','inline-block');;
})

//choosing characters
$('.characters div').on('click', ()=>{
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



