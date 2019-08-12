var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput=document.querySelector("#input");
var updating=document.querySelector("#updating");
var teamA=document.querySelector("#a");
var teamB=document.querySelector("#b");
var aInput=document.querySelector("#aInput");
var bInput=document.querySelector("#bInput");
var winningScoreDisplay=document.querySelector("#winningScoreDisplay");
var p1Score=0;
var p2Score=0;
var gameOver=false;
var winningScore=5;

p1Button.addEventListener("click",function(){
if(!gameOver){
	p1Score++;
	if(p1Score === winningScore){
		updating.textContent="'Team-A "+aInput.value+" Won'";
		p1Display.classList.add("winner");
		gameOver=true;
	}
	p1Display.textContent=p1Score;
}
});

p2Button.addEventListener("click",function(){
if(!gameOver){
	p2Score++;
	if(p2Score === winningScore){
		updating.textContent="'Team-B " +bInput.value+ " Won'";
		p2Display.classList.add("winner");
		gameOver=true;
	}
	p2Display.textContent=p2Score;
}
});

resetButton.addEventListener("click",function(){
	reset();
});

function reset(){
	p1Score=0;
	p2Score=0;
	p1Display.textContent=0;
	p2Display.textContent=0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	updating.textContent="Let the Game Begin!!!";
	gameOver= false;

}

numInput.addEventListener("change",function(){
	winningScoreDisplay.textContent=numInput.value;
	winningScore=Number(numInput.value);
	reset();
});

aInput.addEventListener("change",function(){
	teamA.textContent=aInput.value;
	reset();
});

bInput.addEventListener("change",function(){
	teamB.textContent=bInput.value;
	reset();
});
