window.addEventListener("load", function(){
	var span = document.createElement("span");
	span.style.float = "right";
	span.innerHTML = "<a target=\"_blank\" href=\"https://github.com/ConorOBrien-Foxx/blog/commits/gh-pages.atom\">Subscribe!</a>";
	document.querySelector("header").appendChild(span);
});


// egg of easter
console.send = (function(){
	var timeline = null;
	var lower;
	var upper;
	var guess;
	var guesses = 0;
	return function(msg){
		if(msg === "start") timeline = 0;
		switch(timeline){
			case 0:
				console.log("Enter a number, using console.send.");
				break;
			case 1:
				lower = +msg;
				console.log("Enter another number.");
				break;
			case 2:
				upper = +msg;
				guess = Math.floor(Math.random() * (upper - lower + 1)) + lower;
				console.log("Alright, guess a number between " + lower + " and " + upper);
				break;
			case null:
				console.log("...");
				break;
			default:
				guesses++;
				if(msg > guess)
					console.log("It's lower than that.");
				else if(msg < guess)
					console.log("It's more than that.");
				else if(msg === guess){
					console.log("You got it in " + guesses + " guess" + (guesses === 1 ? "" : "es" ) + "! Send start to go again.");
					timeline = null;
				}
				break;
		}
		if(timeline !== null)
		timeline++;
	}
})();

console.log("ohai! I see you are opening up the console on my page.");
console.log("Try console.send(\"start\").");