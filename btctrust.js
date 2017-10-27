/* -- In Bitcoin We Trust ----------------------------------------------
 * Author: Paulo Ferreira Date: 24/10/2017 -                          --
 *                                                                    --
 * - A simple program  to display the message "In bitcoin we trust"   --
 * - In form of animation.                                            --
 * ---------------------------------------------------------------------
 */

 // this array variable holds the message to display
 var bitcoin_trust = ["In", "Bitcoin", "We", "Trust"];
 var startTime;  // the starting time of the clock
 var posX = 100; // X position
 var posY = 150; // Y position
 var size_of_text = 36; // set the size of the text
 var img_coin; // variable to hold the image of silver coin
 var img_addr; // variable to hold the image of bitcoin address QR-Code
 var transparency = 0; // set the transparency of image 
 
// preload the image the image before everything
function preload(){
	img_coin = loadImage("silver-btc.png");
	img_addr = loadImage("btc-qr.png");
}

// reset the animation when this function is called
function reset_animation(){
	posX = 100; 
	posY = 150; 
	size_of_text = 36;
	transparency = 0;
	startTime = millis();
}
 // this function set the message to print
function message(index){
	textSize(size_of_text); // size of the text got from size_of_text var 
	fill(255); // color of text - RGB value
	text(bitcoin_trust[index], posX, posY); // print text in the screen
}
// this function display the message in the screen
function displayMessage(){
	// the interval between 1 second and 2 second after the starting time display the first word
	if(millis() - startTime > 1000 && millis() - startTime < 2000){
		message(0);
	}
	// the interval between 2 second and 3 second after the starting time display the second word
	else if (millis() - startTime > 2000 && millis() - startTime < 3000){
		message(1);
	}
	// the interval between 3 second and 4 second after the starting time display the third word
	else if(millis() - startTime > 3000 && millis() - startTime < 4000){
		message(2);
	}	
	// the interval between 4 second and 5.5 second after the starting time display the fourth word
	else if(millis() - startTime > 4000 && millis() - startTime < 7000){
		message(3);
	}
}
// set the keys to stop, continue and reset the animation
function keyPressed(){
	if(key == "x" || key == "X"){
		noLoop();
	}
	else if(key == "c" || key == "C"){
		loop();
	}
	else if(key == "r" || key == "R"){
		reset_animation();
	}
}
// setting the size of canvas and the starting time
function setup(){
	createCanvas(800, 400);
	startTime = millis();
}
 
function draw(){
	background(0); // background_color
	displayMessage(); // call the function to display the message
	
		// display the bitcoin silver pixel image
		if(millis() - startTime < 11000){ // while the time is less than 10 seconds, display the image
			// fade effect
			if(transparency < 255){ 
				transparency += 0.5;
			}
		
			tint(255, transparency);
			imageMode(CENTER);
			image(img_coin, posX + 450, posY);
		}

		if(transparency == 255){ // reset transparency to zero again
			transparency = 0;
		}
		// display the bitcoin address and QR-Code
		if(millis() - startTime > 12000 && millis() - startTime < 32000){
			// fade effect
			if(transparency < 255){ 
				transparency += 0.5;
			}
		
			tint(255, transparency);
			imageMode(CENTER);
			image(img_addr, posX + 300, posY + 50);
			textSize(10);
			text("Author: Paulo Ferreira [@paulofer]", posX + 220, posY + 230);
			textSize(11);
			text("Press 'X' to Stop Animation", posX - 80, posY - 120);
			text("Press 'C' to Continue Animation", posX - 80, posY -100);
			text("Press 'R' to Reset the Animation", posX - 80, posY - 80);
		}
		
		if(millis() - startTime > 32000){
			reset_animation();
		}
}

