
function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("myname").innerHTML = x;
    document.getElementById("nameem").style.display = "none";
    document.getElementById("nameem2").style.display = "none";
}
y = document.getElementById("myname")

var first1 = () =>{
    document.getElementById("box3").style.display = "none"
    document.getElementById("box4").style.display = "none"
    document.getElementById("box5").style.display = "none"
    document.getElementById("box9").style.display = "block"
    document.getElementById("box6").style.display = "block"
    document.getElementById("box7").style.display = "block"
    document.getElementById("warrior1").style.display = "block"
    document.getElementById("changeallthis").innerHTML = "You Have chosen the path of the warrior. We are the ones who fight head to head unlike the cowardly rogues and lanky wizards." +
    " Now choose what type of warrior you are. The Beserker that forsakes armor for offence, The knight who is eqaully skilled in offence and defence, or the paldin who is protected by the gods "
    document.getElementById("fightem").innerHTML = "Warrior:[]"  
}
var second1 = () =>{
    document.getElementById("box3").style.display = "none"
    document.getElementById("box4").style.display = "none"
    document.getElementById("box5").style.display = "none"
    document.getElementById("box10").style.display = "block"
    document.getElementById("box11").style.display = "block"
    document.getElementById("box12").style.display = "block"
    document.getElementById("mage1").style.display = "block"
    document.getElementById("changeallthis").innerHTML = "You have chosen to become a mage. We communicate with the mana in the world and ask for its help as we fight" +
    " Now what path shall you embark on. The warlock who rains down spells after spells on enemies, the summoner who conjures creatures to fight along side them, or the druid who is the avatar of natures wrath."  
    document.getElementById("fightem").innerHTML = "Mage:[]"  
}
var third1 = () =>{
    document.getElementById("box3").style.display = "none"
    document.getElementById("box4").style.display = "none"
    document.getElementById("box5").style.display = "none"
    document.getElementById("box13").style.display = "block"
    document.getElementById("box14").style.display = "block"
    document.getElementById("box15").style.display = "block"
    document.getElementById("rogue1").style.display = "block"
    document.getElementById("changeallthis").innerHTML = "You are going down the path of the rogue. To fight face to face is not our forte. We prefer to use the shadows" +
    " Will you become the shinobi who uses special techniques using inner force, the assassin who specializes in poison and dagger usage, or the thief. They steal stuff."  
    document.getElementById("fightem").innerHTML = "Rogue:[]"  
}

var first2 = () =>{
    document.getElementById("box9").style.display = "none"
    document.getElementById("box6").style.display = "none"
    document.getElementById("box7").style.display = "none"
    document.getElementById("warrior1").style.display = "none"
    document.getElementById("beserker").style.display = "block"
    document.getElementById("changeallthis").innerHTML = "You have chosen the path of the beserker " + y.innerHTML + ". Welcome to the order of rage. You are standing in front of Nike's town gate"
    document.getElementById("fightem").innerHTML = "Warrior:[Beserker]" 
}
var first3 = () =>{
    document.getElementById("box9").style.display = "none"
    document.getElementById("box6").style.display = "none"
    document.getElementById("box7").style.display = "none"
    document.getElementById("warrior1").style.display = "none"
    document.getElementById("paladin").style.display = "block"
    document.getElementById("changeallthis").innerHTML = "You have chosen to be a holy Paladin " + y.innerHTML + ". Welcome fellow servent of God. You are standing in front of the town market"
    document.getElementById("fightem").innerHTML = "Warrior:[Paladin]" 
}
var first4 = () =>{
    document.getElementById("box9").style.display = "none"
    document.getElementById("box6").style.display = "none"
    document.getElementById("box7").style.display = "none"
    document.getElementById("warrior1").style.display = "none"
    document.getElementById("knight").style.display = "block"
    document.getElementById("changeallthis").innerHTML = "You have chosen to become a knight. " + y.innerHTML + ". Those without power seek us. Those with power fear us. You begin your journey in the stables at your previous lord's castle as you begin to leave" 
    document.getElementById("fightem").innerHTML = "Warrior:[Knight]"
}
var second2 = () =>{
    document.getElementById("box10").style.display = "none"
    document.getElementById("box11").style.display = "none"
    document.getElementById("box12").style.display = "none"
    document.getElementById("mage1").style.display = "none"
    document.getElementById("warlock").style.display = "block"
    document.getElementById("changeallthis").innerHTML = "You have chosen the path of the Warlock " + y.innerHTML + ". Welcome to the order of wisdom. You are standing in the hallways of the mages tower."
    document.getElementById("fightem").innerHTML = "Mage:[Warlock]" 
}
var second3 = () =>{
    document.getElementById("box10").style.display = "none"
    document.getElementById("box11").style.display = "none"
    document.getElementById("box12").style.display = "none"
    document.getElementById("mage1").style.display = "none"
    document.getElementById("summoner").style.display = "block"
    document.getElementById("changeallthis").innerHTML = "You have chosen to become a mighty summoner " + y.innerHTML + ". Our stregnth lay in our numbers. You are summoning your first creature. What qualities should it posess?"
    document.getElementById("fightem").innerHTML = "Mage:[Summoner]"
}
var second4 = () =>{
    document.getElementById("box10").style.display = "none"
    document.getElementById("box11").style.display = "none"
    document.getElementById("box12").style.display = "none"
    document.getElementById("mage1").style.display = "none"
    document.getElementById("druid").style.display = "block"
    document.getElementById("changeallthis").innerHTML = "You have been blessed by nature " + y.innerHTML + ". Welcome young druid"
    document.getElementById("fightem").innerHTML = "Mage:[Druid]"  
}
var third2 = () =>{
    document.getElementById("box13").style.display = "none"
    document.getElementById("box14").style.display = "none"
    document.getElementById("box15").style.display = "none"
    document.getElementById("rogue1").style.display = "none"
    document.getElementById("ninja").style.display = "block"
    document.getElementById("changeallthis").innerHTML = "You have chosen the path of the Shinobi " + y.innerHTML + ". Welcome use inner force to conquer obstacles"
    document.getElementById("fightem").innerHTML = "Rogue:[Shinobi]"  
}
var third3 = () =>{
    document.getElementById("box13").style.display = "none"
    document.getElementById("box14").style.display = "none"
    document.getElementById("box15").style.display = "none"
    document.getElementById("rogue1").style.display = "none"
    document.getElementById("assassin").style.display = "block"
    document.getElementById("changeallthis").innerHTML = "You have chosen to become an assassin " + y.innerHTML + ". We kill in one strike or die trying"
    document.getElementById("fightem").innerHTML = "Rogue:[Assassin]"  
}
var third4 = () =>{
    document.getElementById("box13").style.display = "none"
    document.getElementById("box14").style.display = "none"
    document.getElementById("box15").style.display = "none"
    document.getElementById("rogue1").style.display = "none"
    document.getElementById("thief").style.display = "block"
    document.getElementById("changeallthis").innerHTML = "You have chosen to be a thief " + y.innerHTML + ". You're a thief. What else you want?"
    document.getElementById("fightem").innerHTML = "Rogue:[Thief]"  
}

var restart = () =>{
    document.getElementById("box1000").style.display = "none"
    document.getElementById("ugly").style.display = "none"
    document.getElementById("freeze").style.display = "none"
    document.getElementById("box3").style.display = "block"
    document.getElementById("box4").style.display = "block"
    document.getElementById("box5").style.display = "block"
    document.getElementById("changeallthis").innerHTML = "Start Your Adventure!" 
    document.getElementById("fightem").innerHTML = "class"   
}