

for( var i=0; i<(document.querySelectorAll(".drum").length); i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
       makeNoice(this.innerHTML);
       keyPressAnimation(this.innerHTML);
    });
}

document.addEventListener("keypress", function(event){
    makeNoice(event.key);
    keyPressAnimation(event.key);
})

function makeNoice(key){
    if(key === "w"){
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    }else if(key === "a"){
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }else if(key === "s"){
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }else if(key === "d"){
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }else if(key === "j"){
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    }else if(key === "k"){
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }else if(key === "l"){
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
}

function keyPressAnimation(event){
    var pressedKey = document.querySelector("." + event);
    pressedKey.classList.add("pressed");
    setTimeout(function(){
        pressedKey.classList.remove("pressed");
    }, 100);
}