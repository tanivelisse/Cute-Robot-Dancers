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
		console.log;(`I'm spinning!`)
	}
	jump() {
		console.log('Jump Jump');
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

$('.characters div').on('click', ()=>{
	console.log('Character clicked');
	game.chooseCharacter();
})



