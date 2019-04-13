#CUTE ROBOT DANCERS


First project for the SEI course at General Assembly Chicago.

Online game built using Javascript for the logic, CSS for the layout, and HTML5 for the structure.

Objectives

My goal was to build a simple game that was fun to play and that could have more featueres added in time. 

I was inspired by games like "Dance Dance Revolution" and "Just Dance", and then adapted it to a keyboard friendly game.

#RULES

The goal of CRD is to follow randomly generated arrows and try to match them with the assigned letters on the keyboards that make the robot characters dance. 

The user is given a starting coolness score of 0, which will either increase if the entered move matches the expected move, or decrease if it doesn't.

The user that increases his coolness score to go up to ten wins the round.



#PLANING

MVP

1. The game must have a start page with the instructions and the start button.
2. The game must have a minimum of two characters for the player to choose. 
3. The players should be able to use the keyboard to match the arrows on the game.
4. The robots move at the same time the player presses the keys to match the arrows.  
5. The game should have a least one round.

Extras

1. There is music on the background to create a more fun experience. 
2. The screen clears to announce the winner at the end of the game. 

Forthcoming Features

1. A larger variety of characters for the users to choose from.
2. Animations that alert the users of their performance throughout the game.
3. Freestyle section for users to just have fun with the robot animations. 
4. A computer player to play against with for only one user. 
5. Different levels of diffuculty



#DEVELOPMENT

Beginning with the start button every interaction of the user with the game is translated to an animation on the screen to create a dynamic experience. Most of the animations that affect the display of the game elements are created using jQuery's `.css()` method, affecting the display properties in different components of the HTML structure to display specific content depending on the stage of the game. This way the user is transported from the start , to the characters screen, to the game and finally the winner display. 

The robot characters are created using a class and instantiated once the player has chosen the specific character. Using the jQuery `.append()` method each character is assign its initial image. Inside the class we have the methods for the robots moves. Each method has the images that represent each one of characters moves. For each move the images are replaced using the jQuery `replaceWith()`method to create the animation of the robot characters. 


To generate the arrows I used and array with the directions and a function with a for loop that uses Math.floor(Math.random()) to generate the random integer for index of the array.  
```
arrows:['left', 'up','right','down'],

generateArrows(arr) {
		for (let i = 0; i <1; i++) {
			let indexNum = Math.floor(Math.random() * 3)
			this.arrowDirection = arr[indexNum]
			this.displayArrows();
			this.playAudio();
		}			

```
As you can see this function calls the function that displays the arrows on the screen and the function that starts the audio as well. This the music starts as soon as the arrows are generated and the player becomes aware that the game has begun. Bellow you can see the display arrows function. Using the jQuery UI fadeIn and fadeOut method we are able to create the animation effect of the arrows constantly reappearing on the screen, even if they are in the same direction and avoid for them to look static.  
```
	displayArrows() {
		let whichArrow;
		let $element = $('#arrows-display');
		$element.fadeIn(200);
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
		$element.fadeOut(200);
	},
```
Using jQuery event listeners I specified the players keys, the arrow direction it represented, called the function for the robots moves and called the function that confirm if there was a match for that specific player. All the factors that are affected by the user's manipulations of the keys are attached to the listeners. 
``` 
$('body').on('keydown', (event) => {
	if (['a'].includes(event.key)) {
		game.leftKey1 = true;
		game.player1Match();
    	game.player1.left();
```






