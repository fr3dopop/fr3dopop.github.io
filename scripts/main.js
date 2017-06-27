var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/donkey-kong.gif') {
		myImage.setAttribute ('src','images/donkey-kong2.jpg');
		} else {
			myImage.setAttribute ('src','images/donkey-kong.gif');
		}

}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Help! Save Me, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Help! Save Me, ' + storedName;

}

myButton.onclick = function() {
	setUserName();
}