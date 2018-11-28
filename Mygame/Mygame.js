var score = 0;
var trials = 1;

x = Math.random() *10;
x = parseInt(x);
//color number

y = Math.random() *10;
y = parseInt(y);
//box number

if (x==1) {
	color = "RED";
}
else if (x==2) {
	color = "SKYBLUE"
}
else if (x==3){
	color = "BROWN";
}
else if (x==4){
	color = "PINK";
}
else if (x==5){
	color = "ORANGE";
}
else if (x==6){
	color = "YELLOW";
}
else if (x==7){
	color = "BLUE";
}
else if (x==8){
	color = "INDIGO";
}
else {
	color = "GREEN";
}
document.querySelector('h2').innerHTML = "Which Box has <u>"+color +"?";

	


function box(n){
	if (n == y) {
		for (var i = 1; i < 10; i++) {
			document.querySelector('.td'+i).innerHTML = "<h1> (^_^) <br>";
			document.querySelector('.td'+i).style.opacity = 0.1;
		}
		document.querySelector('.td'+y).innerHTML = "	You Are Right. I am "+color;	
		document.querySelector('.td'+y).style.backgroundColor =color; 
		document.querySelector('.td'+y).style.opacity = 1;
		score +=1;
		document.querySelector('#score').innerHTML = score;
		
	}

	else{
		for (var i = 1; i < 10; i++) {
			document.querySelector('.td'+i).innerHTML = "<h1> (^_^) <br>";
			document.querySelector('.td'+i).style.opacity = 0.1;
		}
		document.querySelector('.td'+n).innerHTML = "Ooops, You Are Wrong.";
		document.querySelector('.td'+n).style.opacity = 0.9;

		document.querySelector('.td'+y).style.backgroundColor = color;
		document.querySelector('.td'+y).innerHTML = "Here is the Correct Box";
		document.querySelector('.td'+y).style.opacity = 1;
		
		
	}

}

/*
-Game has nine grids
-Should support clicks within the nine grids
-Should ask you to pick a that would reveal
 a particular color

*/