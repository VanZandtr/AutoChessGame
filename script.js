let pws = [];
let jace = {
 name: 'Jace',
 health: '20',
 loyalty: '2',
 up: '2',
 down: '0',
 ult: '8',
};
pws.push(jace);

let chandra = {
 name: 'Chandra',
 health: '20',
 loyalty: '4',
 up: '1',
 down: '-2',
 ult: '7',
};
pws.push(chandra)

function start() {
 //clear screen
 document.body.innerHTML = '';

 //get a random planeswalker from list
 ran_num = Math.floor(Math.random()*pws.length)
 var choice1 = pws[ran_num];
 console.log("choice 1", choice1);

 //create new div for choice 1
 var newdiv1 = document.createElement("div")
 newdiv1.className = "C2";
 newdiv1.onclick = function() {
     chosen_planeswalker(choice1);
 };
 var textnode = document.createTextNode(choice1.name);
 newdiv1.appendChild(textnode);

 var linebreak = document.createElement('br');
 newdiv1.appendChild(linebreak);

 var textnode = document.createTextNode("Health: " + choice1.health);
 newdiv1.appendChild(textnode);

 var linebreak = document.createElement('br');
 newdiv1.appendChild(linebreak);

 var textnode = document.createTextNode("Loyalty: " + choice1.loyalty);
 newdiv1.appendChild(textnode);

 var linebreak = document.createElement('br');
 newdiv1.appendChild(linebreak);

 var textnode = document.createTextNode("Uptick: " + choice1.up);
 newdiv1.appendChild(textnode);

 var linebreak = document.createElement('br');
 newdiv1.appendChild(linebreak);

 var textnode = document.createTextNode("Downtick: " + choice1.down);
 newdiv1.appendChild(textnode);

 var linebreak = document.createElement('br');
 newdiv1.appendChild(linebreak);

 var textnode = document.createTextNode("Ultimate: " + choice1.ult);
 newdiv1.appendChild(textnode);

 var linebreak = document.createElement('br');
 newdiv1.appendChild(linebreak);
 
 document.body.appendChild(newdiv1);

 //remove first choice from list
 pws.splice(ran_num, 1);
 console.log("after splice", pws);

 //get second choice
 var choice2 = pws[Math.floor(Math.random()*pws.length)];
 console.log("choice2", choice2);

 //create new div for choice 2
 var newdiv1 = document.createElement("div")
 newdiv1.className = "C2";
 newdiv1.onclick = function() {
     chosen_planeswalker(choice2);
 };
 var textnode = document.createTextNode(choice2.name);
 newdiv1.appendChild(textnode);

 var linebreak = document.createElement('br');
 newdiv1.appendChild(linebreak);

 var textnode = document.createTextNode("Health: " + choice2.health);
 newdiv1.appendChild(textnode);

 var linebreak = document.createElement('br');
 newdiv1.appendChild(linebreak);

 var textnode = document.createTextNode("Loyalty: " + choice2.loyalty);
 newdiv1.appendChild(textnode);

 var linebreak = document.createElement('br');
 newdiv1.appendChild(linebreak);

 var textnode = document.createTextNode("Uptick: " + choice2.up);
 newdiv1.appendChild(textnode);

 var linebreak = document.createElement('br');
 newdiv1.appendChild(linebreak);

 var textnode = document.createTextNode("Downtick: " + choice2.down);
 newdiv1.appendChild(textnode);

 var linebreak = document.createElement('br');
 newdiv1.appendChild(linebreak);

 var textnode = document.createTextNode("Ultimate: " + choice2.ult);
 newdiv1.appendChild(textnode);

 var linebreak = document.createElement('br');
 newdiv1.appendChild(linebreak);
 
 document.body.appendChild(newdiv1);
}

function quit() {
 window.open('','_parent','');
 window.close();
}

function chosen_planeswalker(planeswalker){
 //clear screen
 document.body.innerHTML = '';
 console.log(planeswalker);
}