let pws = [];
let cards = [];

let jace = {
 name: 'Jace',
 health: 20,
 loyalty: 2,
 up: -2,
 down: 0,
 ult: -8,
};
pws.push(jace);

let chandra = {
 name: 'Chandra',
 health: 20,
 loyalty: 2,
 up: -1,
 down: -2,
 ult: -7,
};
pws.push(chandra)

let snapcaster = {
    name: "Snapcaster Mage",
    attack: 1,
    health: 2,
    ability: "flash",
};
cards.push(snapcaster);
let buy = false;
let bought = 0;



function start() {

 //clear screen
 document.body.innerHTML = '';
 document.body.style.background = "url('background.png')";

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

 var newdiv1 = document.createElement("div")
 newdiv1.className = "Face";
 var textnode = document.createTextNode(planeswalker.name);
 newdiv1.appendChild(textnode);
 newdiv1.ondragover = function(event){
     event.preventDefault();
     buy = true;
 }
 
 var health_button = document.createElement("BUTTON");
 health_button.classList.add("HB");
 health_button.innerHTML = planeswalker.health;

 var loyalty_button = document.createElement("BUTTON");
 loyalty_button.classList.add("LB");
 loyalty_button.innerHTML = planeswalker.loyalty;

 var up_button = document.createElement("BUTTON");
 up_button.classList.add("UB");
 up_button.innerHTML = planeswalker.up;
 up_button.onclick = function() {
    up_button_onclick();
};
 
 var down_button = document.createElement("BUTTON");
 down_button.classList.add("DB");
 down_button.innerHTML = planeswalker.down;
 down_button.onclick = function() {
    down_button_onclick();
};
 
 var ult_button = document.createElement("BUTTON");
 ult_button.classList.add("ULTB");
 ult_button.innerHTML = planeswalker.ult;
 ult_button.onclick = function() {
    ult_button_onclick();
};

 document.body.appendChild(newdiv1);
 document.body.appendChild(health_button);
 document.body.appendChild(loyalty_button);
 document.body.appendChild(up_button);
 document.body.appendChild(down_button);
 document.body.appendChild(ult_button);
 
 buyphase(planeswalker);
 console.log(planeswalker.loyalty);

}

function up_button_onclick(){
 console.log("up clicked");
}

function down_button_onclick(){
console.log("down clicked");
}

function ult_button_onclick(){
console.log("ult clicked");
}

function buyphase(planeswalker){
 
 for(i = 0; i <=7; i++){
    var ran_num = Math.floor(Math.random()*cards.length);
    let card = document.createElement("div");
    card.classList.add("card");

    let id = i;
    
    var get_card = cards[ran_num];
    
    card.innerHTML = get_card.name;
    if(i == 0){
        card.style.marginLeft = "100px";
    }
    card.setAttribute('draggable', true);
    card.ondragstart = function(){
        card_onclick();
    }
    card.ondragend = function(){
        card_upclick(card, get_card);
    }
    document.body.appendChild(card);
    childindex = (Array.prototype.indexOf.call(card.parentNode.children, card));
    document.body.childNodes[childindex].innerHTML += childindex;
    

    
 }

 var add_loyalty = document.createElement("BUTTON");
 add_loyalty.classList.add("ADDL");
 add_loyalty.innerHTML = "LOYALTY BUTTON";
 add_loyalty.onclick = function(planeswalker) {
  add_loyalty_onclick();
 };
 document.body.appendChild(add_loyalty);
}

function add_loyalty(planeswalker){
 newLoyalty = planeswalker.loyalty + 1;
 planeswalker.loyalty = newLoyalty;
}

function card_onclick(){
 console.log("drag start");
}

function card_upclick(child, card){
 console.log("drag end");
 console.log(document.body.childNodes);
 console.log("num bought" + bought);
 if(buy == true){
     let index = Array.prototype.indexOf.call(document.body.children, child);
     console.log(index);
    document.body.removeChild(document.body.childNodes[index]);
    bought = 0;
    childindex -=1;
 }


 buy = false;
}

//MAKE SURE TO SET BOUGHT TO 0!!!!!!
