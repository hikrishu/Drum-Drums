const drums = document.querySelectorAll(".drum");

// let x = parseFloat(window.getComputedStyle(document.body)
//     .getPropertyValue('--x'));
                                                                /// ...... i wanted to change the position value also for 
                                                                ///......... plate down a little while striking, but couldn't.
// let y = parseFloat(window.getComputedStyle(document.body)
//     .getPropertyValue('--y'));

function cssChange(key){
    key.classList.add('anim');    // shrinking animation class is added.
   
}


let noOfDrums = drums.length;
for(let i=0; i < noOfDrums; i++){   // by mouse click


    drums[i].addEventListener("click", () => {


        var nameOfDrums = drums[i].innerHTML;
    
        makeSound(nameOfDrums);  
        cssChange(drums[i]);                   // for shrinking and animation
        
        setTimeout(function(){
            drums[i].classList.remove("anim");
        }, 2000)
        

    })
}

document.addEventListener("keypress", (e) => {
    const key = e.key.toLowerCase();
    makeSound(key);       // for keypress
    

    const drumElement = document.getElementsByClassName( `${key}`)[0];
    if (drumElement) {
        cssChange(drumElement);
        

        setTimeout(function(){
            drumElement.classList.remove("anim");
        }, 1000)

    }

    

})


function makeSound(key){    // switch case method to match each plate. and assing audio.
    switch (key) {
        case "w":    
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;    

        case "d":    
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();    
            break;    
        case "a":    
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();    
            break;
        case "s":    
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();    
            break;
        case "j":    
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();    
            break;
        case "k":    
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();    
            break;
        case "i":    
            var crash = new Audio("sounds/crash.mp3");
            crash.play();    
            break;
        case "l":    
            var snare2 = new Audio("sounds/snare.mp3");
            snare2.play();    
            break;
        
        default:
            null;
            break;
    }
}


