let processplant = 1;
let imgplant = "claim0"+processplant+".png";

function entplant() {
	if(processplant < 5) {
		processplant += 1;
	}
	if(processplant > 4) {
		processplant = 1;
	}
	//imgplant = "claim0"+processplant+".png"
	//document.getElementById("plant").src = "./public/"+imgplant;
}



function claimplant() {
	if(processplant < 4) {
		console.log(`error`);
	}
	if(processplant == 4) {
		console.log(`claim`);
	}
}