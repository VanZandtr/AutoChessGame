let pws = [];
let cards = [];
let hand = [];
let field_cards = [];
let hand_left = 1025;
let playing = false;
var hand_index = 0;

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
    hand_index: 0,
};
cards.push(snapcaster);
let buy = false;

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

 //create a field for cards
 let field = document.createElement("div");
 field.classList.add("field");
 field['id'] = "f";
 field.ondragover = function(event){
    event.preventDefault();
    playing = true;
 }
 
 document.body.appendChild(field);

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
    
 }

 //make timer
 var oneMinute = 60;
 let timer = document.createElement("div");
 timer.classList.add("timer");
 document.body.appendChild(timer);
 startTimer(oneMinute, timer);

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
 if(hand.length >= 7){
  console.log("Too many cards in hand");
 }
 if(buy == true && hand.length < 7){
    let index = Array.prototype.indexOf.call(document.body.children, child);
    document.body.removeChild(document.body.childNodes[index]);
    add_to_hand(card);
 }
 buy = false;
}

function add_to_hand(crd){
    //add to hand
    let card = Object.assign({}, crd);
    card.hand_index = hand_index;
    hand_index++;
    hand.push(card);

    //make new card in hand
    let new_card = document.createElement("div");
    new_card.classList.add("hand");
    new_card.innerHTML = card.name;
    new_card.setAttribute('draggable', true);
    new_card.ondragstart = function(){
        hand_card_onclick();
    }
    new_card.ondragend = function(){
        hand_card_upclick(new_card, card);
    }
    new_card.style.left = hand_left + "px";
    hand_left += 100;
    document.body.appendChild(new_card);

    console.log("hand: ", hand);
}

function hand_card_onclick(){
    console.log("drag start");
}
   
function hand_card_upclick(child, card){
    console.log("FIX ISSUE WITH LAST CARD RANGE");
    console.log(field_cards.length)
    if(field_cards.length >= 7 && playing == true){
        console.log("Too many cards on field");
    }
    if (field_cards.length < 7 && playing == true){
        //index of removed child
        let index = Array.prototype.indexOf.call(document.body.children, child);

        //hand index of removed card
        let card_index = card.hand_index;

        //if not the last card
        let counter = 1;
        if(card_index != (hand.length)){
            for(i = card_index + 1; i <hand.length; i++){
                let old_left = document.body.children[index + counter].style.left
                let new_left = (parseInt(old_left.split("px")[0]) - 100) + "px";
                document.body.children[index + counter].style.left = new_left;
                document.body.children[index + counter].style.top = "200px";
                counter++;
            }
        }

        //removing child
        document.body.removeChild(document.body.childNodes[index]);
        hand_left -= 100;
        hand.pop(card);
        add_to_field(card);
    }
    playing = false;
}

function add_to_field(card){
    //make new card in on the field
    let new_card = document.createElement("div");
    new_card.classList.add("field_card");
    new_card.innerHTML = card.name;

    //get field div
    let f = document.getElementById("f");

    f.appendChild(new_card);
    field_cards.push(card);
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.innerHTML = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

