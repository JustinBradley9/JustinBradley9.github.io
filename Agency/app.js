
// this function will form a secret passage from this page to another if password and username are correct
var name;
var password;
function Open() {
     name = document.getElementById("name").value;
     password = document.getElementById("password").value;
   if(name == "amandawaller" && password == "xxxxxx"){
        document.getElementById("enter").innerHTML = "Welcome Back Director"
}
       else{
        window.alert("Sorry Log-in Info is incorrect. Try again or Leave");
       }
   };

//this function will make a counter that will stay with the file until deleted representing support counters//
function supportcounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have decide to support us with " + localStorage.clickcount + " vote(s). We thank you for you eternal support";
    } else {
        document.getElementById("result").innerHTML = "This doesn't work for you. Try another site";
    }
}
//when button is clicked on the  function level 2 will go down 20 
//percent and turn green indicating the threat level
function level2() {
    var ugh = document.getElementById("threatlevel");
    var position = 0;
    var interval = setInterval(frame, 50);
    function frame(){
    if (position == 20){
            clearInterval(interval);
            ugh.style.backgroundColor = "green";
            document.getElementById("answer").innerHTML = "Threat level 3. Armed forces can deal with threat";
        }
    else {
            position ++;
            ugh.style.top = position + '%'; 
            ugh.style.backgroundColor = "green"; 
    }             
    }
}
//when button is clicked on the  function level 3 will go down 30 
//percent and turn yellow indicating the threat level
function level3a() {
    var ugh = document.getElementById("threatlevel");
    var position = 0;
    var interval = setInterval(frame, 50);
    function frame(){
    if (position == 30){
            clearInterval(interval);
            ugh.style.backgroundColor = "yellow";
            document.getElementById("answer").innerHTML = "Threat level 4. Specialised weapons needed. Kryotonite and as large as organization is we have plenty of it";
        }
    else {
            position ++;
            ugh.style.top = position + '%'; 
            ugh.style.backgroundColor = "yellow"; 
    }             
    }
}
//when button is clicked on the  function level 3 will go down 30 
//percent and turn yellow indicating the threat level
//will also show personal description
function level3b() {
    var ugh = document.getElementById("threatlevel");
    var position = 0;
    var interval = setInterval(frame, 50);
    function frame(){
    if (position == 30){
            clearInterval(interval);
            ugh.style.backgroundColor = "yellow";
            document.getElementById("answer").innerHTML = "Threat level 4. Specialised weapons needed. The flash's speed is useless in air or objects ith no friction";
        }
    else {
            position ++;
            ugh.style.top = position + '%'; 
            ugh.style.backgroundColor = "yellow"; 
    }             
    }
}
//when button is clicked on the  function level 4 will go down 40 
//percent and turn red indicating the threat level
//will also show personal description
function level4a() {
    var ugh = document.getElementById("threatlevel");
    var position = 0;
    var interval = setInterval(frame, 50);
    function frame(){
    if (position == 50){
            clearInterval(interval);
            ugh.style.backgroundColor = "red";
            document.getElementById("answer").innerHTML = "Threat level 5. Unpredictable and dangerous. While dangerous his focus is usually on batman which lowers his threat level";
        }
    else {
            position ++;
            ugh.style.top = position + '%'; 
            ugh.style.backgroundColor = "red"; 
    }             
    }
}
//when button is clicked on the  function level 4 will go down 40 
//percent and turn red indicating the threat level
//will also show personal description
function level4b() {
    var ugh = document.getElementById("threatlevel");
    var position = 0;
    var interval = setInterval(frame, 50);
    function frame(){
    if (position == 50){
            clearInterval(interval);
            ugh.style.backgroundColor = "red";
            document.getElementById("answer").innerHTML = "Threat level 7. Alien who can kill superman and has an army behind him. Recommend using Justice League as cannon fodder";
        }
    else {
            position ++;
            ugh.style.top = position + '%'; 
            ugh.style.backgroundColor = "red"; 
    }             
    }
}
//when button is clicked on the  function level 9 will go down 90 
//percent and turn green indicating its batman. dont mess with batman
function level9() {
    var ugh = document.getElementById("threatlevel");
    var position = 0;
    var interval = setInterval(frame, 50);
    function frame(){
    if (position == 90){
            clearInterval(interval);
            ugh.style.backgroundColor = "black";
            document.getElementById("answer").innerHTML = "Threat level 9. Batman. No further information needed. Run!"
        }
    else {
            position ++;
            ugh.style.top = position + '%'; 
            ugh.style.backgroundColor = "black"; 
    }             
    }
}
