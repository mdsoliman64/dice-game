//declare a randome number 



function palyer1(){

    var Numbers = Math.random() * 6 + 1;
var count = Math.floor(Numbers);
console.log(count );

var dice1 = "images/dice"+ count +".png";
var images1 = document.querySelectorAll(".img1")[0];
images1.setAttribute("src", dice1);

// for player two 

var Numbers2 = Math.random() * 6 + 1;
var count2 = Math.floor(Numbers2);
console.log(count2 );
var dice2= "images/dice"+ count2 +".png";
var images2= document.querySelectorAll(".img2")[0];
images2.setAttribute("src",dice2);

// winner code 

if (count > count2){
    document.querySelector(".container h1 ").innerHTML ="Player 1 is winner ";
    document.querySelector(".container h1 ").style.fontSize ="3rem ";
}
else if (count === count2){
    document.querySelector(".container h1 ").innerHTML ="The match is draw ! Play again ";
    document.querySelector(".container h1 ").style.fontSize ="3rem ";
}else{
    document.querySelector(".container h1 ").innerHTML ="Player 2 is winner ";
    document.querySelector(".container h1 ").style.fontSize ="3rem ";
}


}