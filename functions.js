function changePinColor(event){
    let target = event.target;
    if(target.id != "r5" && target.id != "w5" && target.id != "g5" && target.id != "b5" && target.id != "o5" && target.id != "y5"){
        if(target.className == "green-block" || target.className == "red-block" || target.className == "white-block" || target.className == "blue-block" || target.className == "orange-block" || target.className == "yellow-block"){
            if(window.getComputedStyle(target).backgroundColor == redRGB){
                target.style.backgroundColor = green
            }
            else if(window.getComputedStyle(target).backgroundColor == greenRGB){
                target.style.backgroundColor = white
            }
            else if(window.getComputedStyle(target).backgroundColor == whiteRGB){
                target.style.backgroundColor = blue
            }
            else if(window.getComputedStyle(target).backgroundColor == blueRGB){
                target.style.backgroundColor = orange
            }
            else if(window.getComputedStyle(target).backgroundColor == orangeRGB){
                target.style.backgroundColor = yellow
            }
            else if(window.getComputedStyle(target).backgroundColor == yellowRGB){
                target.style.backgroundColor = red
            }
        }
    }
}    

function createCube(){
    
}