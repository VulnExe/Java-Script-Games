
var tot = document.querySelectorAll(".drum").length
for(var i= 0;i < tot;i++ ){

document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    var buttonpress = this.innerHTML;
    play(buttonpress)
    buttonanimation(buttonpress)
});
}
//for keyboard
document.addEventListener("keypress", (event)=> {
    play(event.key)
    buttonanimation(event.key)
})

const play =(key)=>{
    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play()
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play()
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play()
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play()
            break;   
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play()
            break; 
        case "k":
            var audio = new Audio("sounds/crash.mp3");
             audio.play()
            break; 
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play()
            break; 
        default:
            console.log(butonpress);

    }
 
}

const buttonanimation = (key)=>{
 var activebutton = document.querySelector("." + key)
 activebutton.classList.add("pressed")

 setTimeout(()=>activebutton.classList.remove("pressed"),100)
}
