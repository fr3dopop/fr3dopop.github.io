var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/donkey-dong.png') {
		myImage.setAttribute ('src','images/bowser-porn.png');
		} else {
			myImage.setAttribute ('src','images/donkey-dong.png');
		}

}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Fuck My Lizard Hole, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Fuck My Lizard Hole, ' + storedName;

}

myButton.onclick = function() {
	setUserName();
}