// declarations for convenience
let popupBackground = document.getElementById('popup-background');
let popupBtn = document.getElementById('popup_btn');
let msgWhenOpen = document.getElementById('message-when-open');
let msgWhenClosed = document.getElementById('message-when-closed');
let popup_p = document.getElementById('popup_p');

let btnTopLeft = document.getElementById('btnTopLeft');
let btnMidLeft = document.getElementById('btnMidLeft');
let btnBotLeft = document.getElementById('btnBotLeft');
let btnTopRight = document.getElementById('btnTopRight');
let btnMidRight = document.getElementById('btnMidRight');
let btnBotRight = document.getElementById('btnBotRight');

let btnColumns = document.getElementById('btn-columns');

let zap1 = document.getElementById('lightning_1');
let zap2 = document.getElementById('lightning_2'); // could make this work with 1 zap element
let zap3 = document.getElementById('lightning_3'); // used 3 in case I ever want the flexibility

// prep elements for fade-in
document.getElementById('fadeIn1').className += 'fade-out';
document.getElementById('fadeIn2').className += 'fade-out';
document.getElementById('fadeIn3').className += 'fade-out';
document.getElementById('message-when-closed').className += 'fade-out';
document.getElementById('hey').className += 'fade-out';
document.getElementById('my_name').className += 'fade-out';
document.getElementById('welcome').className += 'fade-out';

const fadeIn = () => {
	let el1 = document.getElementById('hey');
	el1.classList.remove('fade-out');

	let el2 = document.getElementById('my_name');
	el2.classList.remove('fade-out');

	let el3 = document.getElementById('welcome');
	el3.classList.remove('fade-out');

	let el4 = document.getElementById('fadeIn1');
	el4.classList.remove('fade-out');

	let el5 = document.getElementById('fadeIn2');
	el5.classList.remove('fade-out');

	let el6 = document.getElementById('fadeIn3');
	el6.classList.remove('fade-out');
}


window.onload = fadeIn;


let faves = [
	"https://github.com/turtelneck/C-Sharp/tree/main/CarInsurance",
	"https://whattimeisitinsouthsudan.azurewebsites.net/",
	"https://github.com/turtelneck/Python-Projects/tree/main/AlbumTracker",
	"https://github.com/turtelneck/turtelneck.github.io/tree/main/js",
	"https://github.com/turtelneck/Personal-Projects/tree/main/dating_bio",
	"https://github.com/turtelneck/Personal-Projects/tree/main/pythagorean-theorum/JS",
	"https://www.youtube.com/watch?v=dQw4w9WgXcQ"
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


// the initial onclick attributes
btnTopLeft.onclick = function () { window.open("https://github.com/turtelneck/C-Sharp/blob/main/README.md",'_blank'); }
btnMidLeft.onclick = function () { window.open("https://github.com/turtelneck/Python-Projects/blob/main/README.md", '_blank'); }
btnBotLeft.onclick = function () { window.open("https://github.com/turtelneck/Personal-Projects/blob/main/README.md", '_blank'); }
btnTopRight.onclick = function () { window.open("https://github.com/turtelneck/Javascript-Projects/blob/main/README.md", '_blank'); }
btnMidRight.onclick = function () { window.open("https://github.com/turtelneck/HTML-and-CSS-Projects/blob/main/README.md", '_blank'); }
btnBotRight.onclick = function () { window.open(faves[getRandomInt(faves.length)], '_blank'); }
// onclick attributes to be set later
function btnTopLeftPalpatine() { window.open("https://www.deviantart.com/oracledk/art/Darth-Plagueis-Death-meme-828238541",'_blank'); }
function btnMidLeftPalpatine() { window.open("https://www.youtube.com/watch?v=oQbFaB-n1gM", '_blank'); }
function btnBotLeftPalpatine() { window.open("https://youtu.be/OCP-Y4u-beQ?t=42", '_blank'); }
function btnTopRightPalpatine() { window.open("https://www.youtube.com/watch?v=ca-e5MrVbVU", '_blank'); }
function btnMidRightPalpatine() { window.open("https://www.reddit.com/r/PrequelMemes/comments/719ml6/when_people_say_ironic_without_realising_it_is_a/", '_blank'); }
function btnBotRightPalpatine() { window.open("https://www.youtube.com/watch?v=_XWomD6TazQ", '_blank'); }


function formValidation() {
	let contct = document.forms["contct"]
	let name = contct["Name"].value;
	let email = contct["Email"].value;
	let phone = contct["Phone"].value;
	// figured I'd leave the rest just in case, but `msg` is the only one in use at the moment
	let msg = contct["Message"].value;

	if (msg == "") {
		alert("you sure you don't want to say anything?");
		return false;
	} else {
		return true;
		returnToPreviousPage();
	}
}


let formOpen = false;


function openForm() {
	if (formOpen) {
		// msgWhenClosed is restored (won't matter after (count >= 18))
		msgWhenClosed.style.removeProperty('Background');
		// popupBackground shrinks
		popupBackground.style.height = "70px";
		
		document.getElementById("my-form").style.display = "none";
		formOpen = false;
	} else {
		if (count < 18) {
			// msgWhenClosed is made effectively transparent
			msgWhenClosed.style.backgroundColor = '#fff0';
			msgWhenClosed.innerHTML = "&nbsp;";
		}
		// popupBackground expands to encompass buttons
		popupBackground.style.height = "326px";
		
		document.getElementById("my-form").style.display = "block";
		formOpen = true;
	}
}


let msgList = [ // length: 20
	"",
	"The main stuff, or click the turtle to see it all -->",
	"Fun, right? Go ahead, have another click.",
	"You're quite good at this! Click again.",
	"I can see you are no ordinary user. Please, click again.",
	"I've removed those pesky buttons. You require focus! <br/>Click again.",
	"Good, very good! Feel the satisfaction of each click. Again!",
	"Yes, you are doing well. Now, again.",
	"Do you feel it? Your power over this button grows. Click again!",
	"Yes, let your desire to click take control! Again!",
	"Your thirst cannot be satisfied! Click again!",
	"Continue, and you will surpass all other button clickers!",
	"You are <i>right</i> to do this! It is your destiny!",
	"To understand the great mystery, one must study all its aspects! <br/>Click again...",
	"Heh heh heh...",
	"Mwahahahaaaa!",
	"Prepare yourself for...",
	"...UNLIMITED <i>POWER!</i>",
	"Now, I may at last reveal...",
	"the <i>true</i> artefacts of my Hegemony..."
];

let btnList = [ // length: 20
	"...on Github",
	"(click again to close)",
	"Yup, buttons are great",
	"Don't mind if I do",
	"Nothin like a nice button",
	"Hmmmm, ok",
	"So satisfying",
	"Aw, shucks, ok",
	"Oh, I can feel it",
	"Yes!",
	"So thirsty!",
	"I will surpass them!",
	"My... Destiny...",
	"I... I understand",
	"I have heard the tragedy...",
	"...of Darth Plagueis The Wise...",
	"...I will do whatever you ask.",
	"So... What now?",
	"Ooooo, reveal what?",
	"Yes, my master"
];


let count = 0;


// this is where the fun begins...
function order66() {
	count++;
	console.log(count);

	if (count < 20) {
		switchMsg();
	}

	// at specific counts, extra functions occur
	if (count === 1) {
		// popup_p fades in 1 second after first open
		setTimeout(function () { popup_p.classList.remove('fade-out'); }, 1*1000);
	} else if (count === 3) {
		popup_p.style.display = 'none';
	} else if (count === 5) {
		// hides buttons
		btnColumns.style.display = 'none';
		// moves msg to center
		msgWhenOpen.style.marginTop = '86px'; 
	} else if (count === 14) {
		screenFlash();
	} else if (count === 15) {
		// lots of lightning
		screenFlash();
		zap3.className = 'lightning_3';
		setTimeout(function () { screenFlash(); }, 300);
		setTimeout(function () { zap3.className = ''; zap2.className = 'lightning_2'; }, 400);
		setTimeout(function () { screenFlash(); }, 600);
		setTimeout(function () { zap2.className = ''; }, 700);
	} else if (count === 17) {
		// more lightning
		screenFlash();
		zap1.className = 'lightning_1';
		setTimeout(function () { screenFlash(); }, 300);
		setTimeout(function () { zap1.className = ''; zap3.className = 'lightning_3'; }, 400);
		// content changes all contained here
		thisIsHowDemocracyDies();
	} else if (count === 18) {
		// moves msg back up
		msgWhenOpen.style.removeProperty('Margin');
		//returns buttons
		btnColumns.style.display = 'block';
	}

	function switchMsg() {
		popupBtn.innerHTML = btnList[count];
		if (formOpen) {
			msgWhenOpen.innerHTML = msgList[count];
		} else {
			msgWhenClosed.innerHTML = msgList[count];
		}
	}

	function screenFlash() {
		let target = document.getElementById('Background');
		target.className = 'Background'; // readies element to have blink added
		setTimeout(function () { target.className = "Background Blink" }, 5);
	}

	function thisIsHowDemocracyDies() {
		// (palpatine unleashed, order 66 executed)
		setTimeout(function () {
			screenFlash();
			zap3.className = '';
			// changes to header
			document.getElementById('hey').innerHTML = "Welcome";
			document.getElementById('my_name').innerHTML = "I have been expecting you";
			document.getElementById('welcome').innerHTML = "...did you ever hear the tragedy of Darth Plagueis the Wise?"
			document.getElementById('Home').style.opacity = '0';
			document.getElementById('Home').style.pointerEvents = 'none';
			// new pics
			document.getElementById('me').src = 'stylesheet/images/family-man.jpg';
			document.getElementById('git').src = 'stylesheet/images/palpatine-zap.jpg';
			document.getElementById('mailbox').src = 'stylesheet/images/tony-boy.jpg';
		}, 600);
		// switch background to palpatine shark
		setTimeout(function () { document.getElementById('Background').style.backgroundImage = 'url(stylesheet/images/palpatine-shark.gif)'; }, 900);

		// bring back the buttons
		btnTopLeft.style.removeProperty('display');
		btnMidLeft.style.removeProperty('display');
		btnBotLeft.style.removeProperty('display');
		btnTopRight.style.removeProperty('display');
		btnMidRight.style.removeProperty('display');
		btnBotRight.style.removeProperty('display');
		// give them new names
		btnTopLeft.innerHTML = 'Offed My Own Master';
		btnMidLeft.innerHTML = 'Hoodwinked The Chosen One';
		btnBotLeft.innerHTML = 'I Am The Senate';
		btnTopRight.innerHTML = 'Supreme Chancellor?? (LOL!)';
		btnMidRight.innerHTML = 'My Red Hot One-Liners';
		btnBotRight.innerHTML = 'My Signature Move';
		// and then new onclick functions from lines 62-67
		btnTopLeft.setAttribute( "onclick", "btnTopLeftPalpatine()");
		btnMidLeft.setAttribute( "onclick", "btnMidLeftPalpatine()");
		btnBotLeft.setAttribute( "onclick", "btnBotLeftPalpatine()");
		btnTopRight.setAttribute( "onclick", "btnTopRightPalpatine()");
		btnMidRight.setAttribute( "onclick", "btnMidRightPalpatine()");
		btnBotRight.setAttribute( "onclick", "btnBotRightPalpatine()");
		/*
		btnBotLeft.onclick = function () { window.open("https://youtu.be/OCP-Y4u-beQ?t=42", '_blank'); }
		btnMidLeft.onclick = function () { window.open("https://www.youtube.com/watch?v=oQbFaB-n1gM", '_blank'); }
		btnTopRight.onclick = function () { window.open("https://www.youtube.com/watch?v=ca-e5MrVbVU", '_blank'); }
		btnMidRight.onclick = function () { window.open("https://www.reddit.com/r/PrequelMemes/comments/719ml6/when_people_say_ironic_without_realising_it_is_a/", '_blank'); }
		btnBotRight.onclick = function () { window.open("https://www.youtube.com/watch?v=_XWomD6TazQ", '_blank'); }
		*/
	}
}
