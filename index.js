// addEventListener(type,listener(a javaScript function))
var drumButton = document.querySelectorAll(".drum"); // it will select all the button ...
for(var i=0;i<drumButton.length;i++){
    drumButton[i].addEventListener("click",function ()/*anonymous function"function without name"*/{
        // it is an anonymous function ....

        var buttonInnerHTML = this.innerHTML /* The JavaScript this keyword refers to the object it belongs to.
        eg currently i clicked button w i.e Event associated to click "this" will enable:-
        <button class="w drum">w</button> whose innerHTML is w so buttonInnerHTMl = w...*/
        makeSound(buttonInnerHTML);
       
        // to generate the button animation when the button is pressed...
        buttonAnimation(buttonInnerHTML);

    });
}
/* To implement key Press Event since we don't know for what query will the particular be respond 
say in the above the event was with respect to the button but what keys we haven't describe in our HTMl code
hence we make our whole document respond to the key presses*/

document.addEventListener("keypress",function(event){
    //console.log(event);
    /* event:- when a event will happen this will trigger the function so here event will help us to 
    tap in the event that trigger the event Listener hence we pass event as a parameter to the function 
    it will give the whole bunch of information including the key which was pressed*/
    /*we can also pass evt or any other name cause we use a callbackfunction which call back a function when a 
    certain key is pressed*/ 
    makeSound(event.key); /*event triggers the event key i.e which key is pressed and pass it to the makeSound function*/
    // to generate the button animation when the key is pressed...
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case 'w':
            var tom1 = new Audio("sounds/tom-1.mp3");
            /* we created a variable tom1 which is a object to a Audio class  */
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'j':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 'k':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 'l':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default: alert("Please type only w,a,s,d,j,k,l keys for sound")
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    // setting Timeout 
    setTimeout(function()  {
        activeButton.classList.remove("pressed");
    }, 100);
}
/* to play audio in JavaScript */
// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();