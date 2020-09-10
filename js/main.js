/*
 _     _        _          _  _
| |_  (_)      | |_   ___ | || | ___
|   \ | |      |   \ / -_)| || |/ _ \
|_||_||_|      |_||_|\___||_||_|\___/
*/

document.getElementById("resume").innerHTML = "resume";
document.getElementById("contact").innerHTML = "contact";
document.getElementById("other").innerHTML = "other";

var textSelection = document.getElementById("text-selection");
textSelection.style.display = 'none';
var body = document.getElementById("allBody");

anime({
	targets: 'section',
	translateY: 100,
});

window.addEventListener('load', function(){
	textSelection.style.display = 'flex';
	anime({
  	targets: ['div.resume', 'div.contact', 'div.other'],
  	translateY: 100,
  	delay: anime.stagger(50)
	});	
});

function mouseHover(x) {
  anime({
    targets: x,
    scale: 1.05
  });
}

function mouseLeave(x) {
  anime({
    targets: x,
    scale: 1
  });
}

/*
anime({
  targets: ['div.resume', 'div.contact', 'div.other'],
  translateY: 100,
  delay: anime.stagger(50)
});
*/