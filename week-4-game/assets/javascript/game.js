

var redCrystal;
var blueCrystal;
var greenCrystal;
var yellowCrystal;
var gameNumber = "";

var winCount = 0;
var lossCount = 0;
var yourNum = 0;
var gameOver='false';

$(document).ready(function() {
	initializeGame();
	$("#randomnNum").text(gameNumber);


	//function startGame(){
	
		$('.btn').on("click", function(){
			if(yourNum == gameNumber){
				winCount++;
				$("#winCounter").text(winCount);
				
				initializeGame();
				$("#randomnNum").text(gameNumber);
			}
			else if(yourNum > gameNumber){
				lossCount++;
				console.log("loser");
				
				$("#lossCounter").text(lossCount);
				initializeGame();
				$("#randomnNum").text(gameNumber);
			}
			if(this.id == 'button-red'){
				yourNum += redCrystal;
				console.log(yourNum + " " + redCrystal);

			}
			else if(this.id == 'button-blue'){
				yourNum += blueCrystal;
				console.log(yourNum + " " + blueCrystal);

			}
			else if(this.id == 'button-green'){
				yourNum += greenCrystal;
				console.log(yourNum + " " + greenCrystal);

			}
			else if(this.id == 'button-yellow'){
				yourNum += yellowCrystal;
				console.log(yourNum + " " + yellowCrystal);

			}
			$("#scoreCounter").text(yourNum);


		});

	function initializeGame(){
		gameNumber=0
		gameNumber = Math.floor((Math.random()*120)+1);
		redCrystal = Math.floor((Math.random()*12)+1);
		blueCrystal = Math.floor((Math.random()*12)+1);
		greenCrystal = Math.floor((Math.random()*12)+1);
		yellowCrystal = Math.floor((Math.random()*12)+1);
		yourNum=0;
	}


});
