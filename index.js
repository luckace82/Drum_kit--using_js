for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var clicked = this.innerHTML;
        sound(clicked);
    });


}

document.addEventListener("keypress", function(event) {
    sound(event.key);
});


function sound(key) {
    switch (key) {
        case "w":
            tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;

        case "s":
            tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;

        case "d":
            tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;

        case "j":
            crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;

        case "k":
            kick = new Audio("sounds/kick-bass.mp3")
            kick.play();
            break;

        case "l":
            snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;
        default:
            break;





    }


}