 "use strict";
 var size;
 var speed;

 function createBubble() {
   var bubble = document.createElement("div");
   var direction = Math.round(Math.random()*20 - 10);
   size  = Math.round(Math.random() * 100) + 1;
   speed = Math.random() * 100 + 10;
   bubble.setAttribute("class", "bubble");
   bubble.style.width = size + "px";
   bubble.style.height = size + "px";
   bubble.style.top = (window.innerHeight - size) + "px";
   bubble.style.left = Math.round(Math.random() * (window.innerWidth + size + 1)) + "px";

   document.body.appendChild(bubble);



   var moveInterval = setInterval(function(){
     var newTop = parseInt(bubble.style.top) - 10;
     var newLeft = parseInt(bubble.style.left) + direction;
     bubble.style.top = newTop + "px";
     bubble.style.left = newLeft + "px";

     if ( newTop < -100 ||
         newLeft < -100 ||
         newLeft > window.innerWidth ){

         bubble.style.top = (window.innerHeight - size) + "px";
         bubble.style.left = Math.round(Math.random() * (window.innerWidth + size + 1)) + "px";
     }

     // changeColor();
   }, speed);

 }

 window.onload = function() {
     var button = document.querySelector("#btn");
     button.addEventListener("click", function() {
     button.style.display = "none";
     showText();
     for ( var i = 0; i < 100; i++ ) {
       createBubble();
       console.log("This bubble's size is " + size + " and it's speed is " + speed + ".");
     }
   });
 }

 function showText() {
   var text = document.getElementsByTagName('p')[0];
   var studentName = " Kenneth Mutha Fuckin Blanton"
   text.innerHTML += "," +"<br>"+ studentName + "!";
   text.style.opacity = 1;
 }





















