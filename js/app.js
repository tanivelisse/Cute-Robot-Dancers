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
	robotsAtPlay:[],
	keysPressed: '',
	chooseCharacter() {
		console.log('chose x character');
		if (event.target.id === 'yellowB'){
   		const yellowBot = new Robot('The yellowB')
    	this.robotsAtPlay.push(yellowBot);
    	//console.log(this.robotsAtPlay);
    	}
    	if (event.target.id === 'rainbowB'){
   		const rainbowBot = new Robot('The rainbowB')
    	this.robotsAtPlay.push(rainbowBot);
    	//console.log(this.robotsAtPlay);
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



