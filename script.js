let tura = "o";

let row1x = [];
let row1o = [];
let row2x = [];
let row2o = [];
let row3x = [];
let row3o = [];

let col1x = [];
let col1o = [];
let col2x = [];
let col2o = [];
let col3x = [];
let col3o = [];

let diag1x = [];
let diag1o = [];
let diag2x = [];
let diag2o = [];

let licznik = 0;

function zmien(x, y)
{
	const el = document.querySelector(x+y);
	
	if(el.style.backgroundImage == "")
	{
	licznik++;
	el.style.cursor = "auto";
	
	//krzyzyk
	if(tura == 'x')	{
		document.getElementById("inf").innerHTML = "Ruch: Kółko";
		el.style.backgroundImage = "url('img/krzyzyk.jpg')";
		tura = 'o';
		//wiersze
		if(x == '.top') row1x.push('a');
		if(x == '.sr') row2x.push('a');
		if(x == '.bottom') row3x.push('a');
		
		//kolumny
		if(y == '.left') col1x.push('a');
		if(y == '.middle') col2x.push('a');
		if(y == '.right') col3x.push('a');
		
		//przekatne
		if((x == '.top' && y == '.left') || (x == '.sr' && y == '.middle') || (x == '.bottom'&& y == '.right')) {
			diag1x.push('a');
		}
		if((x == '.top' && y == '.right') || (x == '.sr' && y == '.middle') || (x == '.bottom'&& y == '.left')) {
			diag2x.push('a');
		}
		
		//wygrana
		if(row1x.length == 3 || row2x.length == 3 || row3x.length == 3 || col1x.length == 3 || col2x.length == 3 || col3x.length == 3 || diag1x.length == 3 || diag2x.length == 3)
		{
				document.getElementById("board").innerHTML = "<div style='font-size: 48px; color: white; font-weight: bold;'>Wygral krzyżyk!<div>";
				document.getElementById("inf").innerHTML = "";
		}
		//remis
		else if(licznik == 9) { document.getElementById("board").innerHTML = "<div style='font-size: 48px; color: white; font-weight: bold;'>Remis!</div>";
		document.getElementById("inf").innerHTML = ""; }
		
	}
	
	//kolko
	else	{ 
		el.style.backgroundImage = "url('img/kolko.jpg')";
		tura = 'x';
		document.getElementById("inf").innerHTML = "Ruch: Krzyżyk";
		//wiersze
		if(x == '.top') row1o.push('a');
		if(x == '.sr') row2o.push('a');
		if(x == '.bottom') row3o.push('a');
		
		//kolumny
		if(y == '.left') col1o.push('a');
		if(y == '.middle') col2o.push('a');
		if(y == '.right') col3o.push('a');
		
		//przekatne
		if((x == '.top' && y == '.left') || (x == '.sr' && y == '.middle') || (x == '.bottom'&& y == '.right')) {
			diag1o.push('a');
		}
		if((x == '.top' && y == '.right') || (x == '.sr' && y == '.middle') || (x == '.bottom'&& y == '.left')) {
			diag2o.push('a');
		}
		
		//wygrana
		if(row1o.length == 3 || row2o.length == 3 || row3o.length == 3 || col1o.length == 3 || col2o.length == 3 || col3o.length == 3 || diag1o.length == 3 || diag2o.length == 3)
		{
				document.getElementById("board").innerHTML = "<div style='font-size: 48px; color: white; font-weight: bold;'>Wygralo kółko!</div>";
				document.getElementById("inf").innerHTML = "";
		}
		//remis
		else if(licznik == 9) {
			document.getElementById("board").innerHTML = "<div style='font-size: 48px; color: white; font-weight: bold;'>Remis!</div>";
			document.getElementById("inf").innerHTML = "";
		}
	}
	}
	
	
}