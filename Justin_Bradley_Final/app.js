
//self forming words that appear when one is summoned to the page
var i = 0;
var welcome = 'Welcome Potential Students To ' + ' Hogwarts School Of WitchCraft And Wizardry';
var speed = 100;

 var typer = ()=> {
  if (i < welcome.length) {
      //type out whichever part of string the function is on which is charAt(i)
    document.getElementById("up1").innerHTML += welcome.charAt(i);
    //moving i forward
    i++;}
    //telling function not to stop until full string is completed
    setTimeout(typer, speed);
  }



//appearus spell part one to summon words from the void
var b = 0;
var magic1 = 'Welcome Potential Students To Hogwarts School Of WitchCraft And Wizardry. We are pleased by your ' + 
'interest in our school and would love to inform you of all we have to offer. We sincerly hope that you become one of our students. ' +
'Witn our school we teach students over a wide variety of subjects and fields so they are prepared for the real world' +
' No matter Where you come from, muggle-born or pure-blood, noble or commoner, ALL are the same within our school';
var sped = 50;
var appear = () => {
  if (b < magic1.length) {
      //return to i index in string
    document.getElementById("words1").innerHTML += magic1.charAt(b);
    b++;
    setTimeout(appear, sped);
  }
}
//appearus spell part 2 to summone owrds from the void
var c = 0;
var magic2 = 'Hogwarts School of Witchcraft and Wizardry is the British wizarding school, located in the Scottish Highlands. It takes students from the United Kingdom of Great Britain and Northern Ireland, and also the Republic of Ireland.' + 
'The castle is located in the mountains near a loch. The precise location of the school can never be uncovered because it was rendered Unplottable. To Muggles, the school looks like an old abandoned castle. Similarly, most wizarding schools locations are protected in order to prevent their ways of teaching being revealed, as well as protect the students and schools themselves from any harm.' +
'Established around the 10th century, Hogwarts is considered to be one of the finest magical institutions in the Wizarding World, though other notable schools included Beauxbatons Academy of Magic in France, the Durmstrang Institute in Scandinavia, and Ilvermorny School of Witchcraft and Wizardry in the United States.' +
"Children with magical abilities are enrolled at birth, and acceptance is confirmed by owl post at age eleven. However, if the child in question is a Muggle-born, a professor from the school would come and inform the child's parents." +
"The school's motto is Draco Dormiens Nunquam Titillandus (Draco Dormiens Nvnqvam Titillandvs)" + ', which, translated from Latin, means "Never tickle a sleeping dragon".';
var sped = 50;
var appear2 = () => {
  if (c < magic2.length) {
      //return to i index in string
    document.getElementById("words2").innerHTML += magic2.charAt(c);
    c++;
    setTimeout(appear2, sped);
  }
}


//slide show
//all images used in slideshow are from harry-potter.wikia.com
//except ice magic. That is from giphy
var picture = ["../images/icemagic.gif","../images/staircase.jpg","../images/gdorm.png","../images/quidditch.jpg","../images/sorting.jpg","../images/willow.gif"];
var basic_pic = 0;
var image_length = picture.length-1;


var changepic = (num) => {
   while (basic_pic = basic_pic + num){
    if(basic_pic > image_length){
        basic_pic = 0;
    }
    if(basic_pic < 0){
        basic_pic = image_length;
    }
    document.show.src = picture[basic_pic];
    return false
}}

//charms to view classes
//all images were gifted by the wizards of the potterwikia
//except pokemon gif from giphy
var charms1 = () =>{
  document.getElementById("workforme").style.backgroundImage = "url('../images/Astronomy.png')";
  document.getElementById("alsowork").innerHTML = "Helps you learn the basics of Divination and star reading"
}
var charms2 = () =>{
  document.getElementById("workforme").style.backgroundImage = "url('../images/Charms.jpg')";
  document.getElementById("alsowork").innerHTML = "Every wizards or witches best friend"
}
var charms3 = () =>{
  document.getElementById("workforme").style.backgroundImage = "url('../images/fight33.gif')";
  document.getElementById("alsowork").innerHTML = "Necessary to protect yourself and those you love from dark wizards"
}
var charms4 = () =>{
  document.getElementById("workforme").style.backgroundImage = "url('../images/flying.jpg')";
  document.getElementById("alsowork").innerHTML = "If you wish to fly your broomstick your second year: must be taken"
}
var charms5 = () =>{
  document.getElementById("workforme").style.backgroundImage = "url('../images/herbs.png')";
  document.getElementById("alsowork").innerHTML = "Learning about plants to help you with gathering whether for potions, familiars, or survival "
}
var charms6 = () =>{
  document.getElementById("workforme").style.backgroundImage = "url('../images/history.png')";
  document.getElementById("alsowork").innerHTML = "To not repeat mistakes of past, one must learn from them"
}
var charms7 = () =>{
  document.getElementById("workforme").style.backgroundImage = "url('../images/potions.jpg')";
  document.getElementById("alsowork").innerHTML = "One can grant themselves eternal life, if they reach high enough mastery"
}
var charms8 = () =>{
  document.getElementById("workforme").style.backgroundImage = "url('../images/transfig.jpg')";
  document.getElementById("alsowork").innerHTML = "Your only limits are your imagination and control"
}
//beta-sorting hat methods
var Quest = new Array(10);  //this sets up an array for all of the answers that are given
// var rip = () =>{
//     document.getElementById("demon").style.marginLeft = "0px";
// }


var getstartedfred =() => {
// alert("function getstartedfred started");
// this function gives each of the answers 0 points so if someone doesn't answer a question
// the whole thing will continue to work
  for(var i=0; i<10; i++) { Quest[i]=0; }
}

var total =() => {
// alert("function total started");
// this function adds the number of points each answer is worth together
  score=0;
  for (var i=0; i<10; i++) { score=score+Quest[i]; }
  analyzer(score);
}
housename = new Array();{
housename[0] = "Ravenclaw, You seek knowledge and hope to find the answers to all your questions. Whether for yourself or to assist others";

housename[1] = "HufflePuff, Cute and Fluffy to most, but those that wrong you know a Badger's rage is worse than a Lion or Snake "; 

housename[2] = "Gryffindor, A Lion care's not for a sheep's opinion and tries his hardest with every hunt. And you are a Lion";

housename[3] = "Slytherin, Follow the snake's path. Whether you Rule or Or are Alone. You will stand at the Apex";

housename[4] = "Either a Ravenlaw testing the test, A Gryffindor testing Authority, A Slytherin who doesn't wished to be tested, or a HufflePuff who made a mistake. Take a look at all the houses so that you may see which resonates most with you";
}
 


var analyzer = (score) => {
// this function uses the total calculated score to figure out which personality type they are
  if (score == 0){ housenamePtr = 4;}
else if (score < 28) { housenamePtr = 0; }
  else if (score < 48) { housenamePtr = 1; }
    else if(score < 70)  { housenamePtr = 2; } 
          else { housenamePtr = 3; }
  myDisplay(housename[housenamePtr])
}

var  myDisplay = (housename) => {
//This function will open a new window and show the results calculated
//issue and solution found. must be set exactly equal to in order to just revel parts i wish it to
  if(housenamePtr===4){
    alert(housename);
    document.getElementById("snake2").style.display = "block"
    document.getElementById("eagle2").style.display = "block"
    document.getElementById("lion2").style.display = "block"
    document.getElementById("badger2").style.display = "block"
  }
  if(housenamePtr===0){
    alert(housename);
    document.getElementById("eagle2").style.display = "block"
  }
  if(housenamePtr===1){
    alert(housename);
    document.getElementById("badger2").style.display = "block"
  }
  if(housenamePtr===2){
    alert(housename);
    document.getElementById("lion2").style.display = "block"
  }
  if(housenamePtr===3){
    alert(housename);
    document.getElementById("snake2").style.display = "block"
  }
}

var saver =(q, points) => {
// this function puts the points that each answer is worth into the array
  q=q-1;
  Quest[q]=points
}


//dispels the spirit foxes
// var byeboy = () =>{
  // document.getElementById("escope2").style.display ="none"
  // document.getElementById("escope3").style.display ="none"
  // document.getElementById("escope4").style.display ="none"
  // document.getElementById("escope5").style.display ="none"
  // document.getElementById("escope6").style.display ="none"
// }


//images from playcast.ru
var byeboy = () =>{
  document.getElementById("escope2").src ="../images/smoke.gif"
  document.getElementById("escope3").src ="../images/smoke.gif"
  document.getElementById("escope4").src ="../images/smoke.gif"
  document.getElementById("escope5").src="../images/smoke.gif"
  document.getElementById("escope6").src ="../images/smoke.gif"
  document.getElementById("escope2").style.borderRadius ="100%"
  document.getElementById("escope3").style.borderRadius ="100%"
  document.getElementById("escope4").style.borderRadius ="100%"
  document.getElementById("escope5").style.borderRadius ="100%"
  document.getElementById("escope6").style.borderRadius ="100%"
  
}

//test onketactivation
// var video = document.getElementById("playmeplease")

var video = document.getElementById('playmeplease');   


document.onkeyup = function(e) {
  //press m to play video/audio
  if (e.which == 66) {
    video.play();
    //pres b to pause video/audio
  } else if ( e.which == 69) {
    video.pause();}
};
