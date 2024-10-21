 var randomNumber1=Math.floor(Math.random()*6)+1;
 var randomImg="dice"+randomNumber1+".png";
 var randomImgsrc="images/"+randomImg;
 document.querySelectorAll("img")[0].setAttribute("src",randomImgsrc);

 var randomNumber2=Math.floor(Math.random()*6)+1;
 var randomImg2="dice"+randomNumber2+".png";
 var randomImgsrc2="images/"+randomImg2;
 document.querySelectorAll("img")[1].setAttribute("src",randomImgsrc2);


 if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins!";
 }
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 Wins!";
 }
 else{
    document.querySelector("h1").innerHTML="Draw!";  
 }