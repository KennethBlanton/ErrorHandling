Troubleshooting in JS

There are 16 errors in the main.js file.

Find them and fix them using the console log, google, and the following information:

1) The page should load showing a button
2) Clicking the button should make bubbles appear and go up the page in different directions at different speeds
3) Clicking the button should also show text
4) This assignment will also test your ability to notice things that don't belong by piecing
  together what someone else's code does... (ooooo mysterious!)

Extra Credit – If you can tell me WHY the console log causes issues AND the term
  we use to refer to the concept behind this issue, I’ll give you +5 points to
  your grade on this assignment.\
  
 The console cannot possibly issues. the console log is based in the browser and is independent from your code. the console can potentially cause security risks, but the console log is just how the console reports errors and helps with debugging. Console.log can cause compatability issues in some older version of IE 9, it thats what your refering to. 
  
  
  
  
  
  
Extra Credit – IF you’ve found all 16 issues and solved them, add the line for Strict Mode
  to the top of your file. If you can tell me WHY you get the response you do
  just by adding that line, AND why it wasn’t that way before that line was added,
  I’ll give you +5 points to your grade on this assignment. (Hint: google it ;-) )
  
  
  I lost count of the errors so I have no idea if I got them all, but it works, so I added strict mode and it broke the bubbles, it did this because variables have to be correctly defined in order to operate in strict mode. even i used in for loops. after correcting this I was able to make it operational. also this helped me find an error I missed with newTop and newLeft being incorrectly defined as variables. 



Researching in JS
Answer each of the following in the area provided BELOW the questions (for ease of reading)
1)	Research how to shuffle the letters in a word so that it’s randomly done each
    time it’s run. Copy/Paste the code you find and a link to the page where you found it.
2)	This is a common JS test, but I’m not going to tell you the name. I will give you
    the test, and you should do the following:
        a.	Tell me the name of the test. ------fizzbuzz
        b.	Give me the most efficient answer you can.
        c.	Link me to where you found your answer. (There are entire pages devoted to
            solving this test as efficiently as possible.

    The Test Question: Write a program that prints the numbers from 1 to 100.
    But for multiples of 7 print "Pop" instead of the number and for the multiples
    of 11 print "Whack". For numbers which are multiples of both 7 and 11 print
    "PopWhack".
3)  Research code to validate an email address. Copy/Paste the code you find, the name of
    the process used to validate it, and a link to where you found your answer.
4)  Find the Browser Compatibility Information for the Window''s Outer Width method from mozilla.
    List it below and a link to the page where you found.



ANSWERS
1) Shuffle
    Code: I hope Its allowed to just write the code from scratch. also i tested with a separate text editor and it messed up my spacing a little :(
        
var shuffle = function(string) {
    var randomWord = "";
    string = string.split("");
    for (var i = string.length - 1; i >= 0; i--) {
        var character = string.splice(Math.floor(Math.random() * string.length),1)
        randomWord = randomWord + character + "";
        console.log(randomWord);
    }
    return randomWord;
         
}

shuffle("encyclopedia");









    Link: I wrote from scratch, I recently created a new way to parse floats to correct parse float issues, namely being unable to pull number with letters before and after. It is kinda a parrallel problem. 
2) Common Test
    Name:fizz buzz
    Code:( I'm unsure if you literally meant print or just console log, I included both. )

var fizzBuzz = function() {
    for (var i = 1; i <= 100 ; i++) {
        if (i % 7 === 0 ) {
            // print("Pop");
            console.log("Pop")
        } else if (i % 11 === 0) {
            // print("PopWhack");
            console.log("PopWhack");
        } else if ( i % 11 && i % 7) {
            // print("PopWhack");
            console.log("PopWhack");
        } else {
            //print(i);
            console.log("PopWhack");
        }
    }
}




    Link:https://www.rosettacode.org/wiki/FizzBuzz
3) Email Validation
    Code:function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  $("#result").text("");
  var email = $("#email").val();
  if (validateEmail(email)) {
    $("#result").text(email + " is valid :)");
    $("#result").css("color", "green");
  } else {
    $("#result").text(email + " is not valid :(");
    $("#result").css("color", "red");
  }
  return false;
}

$("#validate").bind("click", validate);


    Link:http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
4) Window Outer Width
    Info:Desktop
Feature	Chrome	Firefox (Gecko)	Internet Explorer	Opera	Safari
Basic support	1	1.0 (1.7 or earlier)	9	9	3
Feature	Android	Firefox Mobile (Gecko)	IE Mobile	Opera Mobile	Safari Mobile
Basic support	1	1.0 (1.0)	9	9	3

    Link:
https://developer.mozilla.org/en-US/docs/Web/API/Window/outerWidth
